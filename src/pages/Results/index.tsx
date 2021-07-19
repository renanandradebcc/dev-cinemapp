import { useState, useCallback, useEffect } from 'react';
import Lottie from 'react-lottie';
import { useLocation } from 'react-router-dom';

import { api } from '../../services/api';
import Loading from '../../assets/animations/loading.json';
import Error from '../../assets/animations/error.json';
import { Header } from '../../components/Header/index';
import { Card } from '../../components/Card/index';
import * as S from './styles';

export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Poster: string;
}

export function Results(): JSX.Element {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hitFive, setHitFive] = useState<number[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [loadingMovies, setLoadingMovies] = useState<boolean>(false);

  const location = useLocation();

  const useQuery = useCallback(
    () => new URLSearchParams(location.search),
    [location],
  );

  const params = useQuery();
  const query = params.get('query');

  const handleGetMovies = useCallback(async () => {
    if (!query) return;

    setLoadingMovies(true);

    const { data } = await api.get(
      `/${query}&page=${currentPage}&limit=${limit}`,
    );

    setTotal(data.totalResults);

    const totalPages = Math.ceil(data.totalResults / limit);

    const arrayPages = [] as number[];

    let result = [];
    let intervalNumber = currentPage - 3;
    while (intervalNumber < currentPage + 3) {
      result.push(intervalNumber);
      intervalNumber++;
    }

    result = result.filter(
      pageNumber => pageNumber >= 1 && pageNumber < totalPages,
    );

    for (let i = 1; i <= totalPages; i++) {
      arrayPages.push(i);
    }

    setPages(arrayPages);

    setHitFive(result);

    setMovies(data.Search);
    setLoadingMovies(false);
  }, [currentPage, limit, query]);

  useEffect(() => {
    handleGetMovies();
  }, [selectedPage, currentPage, handleGetMovies]);

  const handleChangePage = useCallback(page => {
    setSelectedPage(page);
    setCurrentPage(page);
  }, []);

  const limits = useCallback(e => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.Movies onChange={limits}>
          {loadingMovies && (
            <S.LottieContainer>
              <Lottie
                options={{
                  autoplay: true,
                  animationData: Loading,
                  rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
                }}
                height={300}
                width={300}
              />
            </S.LottieContainer>
          )}
          {!loadingMovies &&
            movies?.length > 0 &&
            movies?.map(eachMovie => (
              <Card key={eachMovie.imdbID} movie={eachMovie} />
            ))}
          {!loadingMovies && !movies?.length && (
            <S.LottieContainer>
              <Lottie
                options={{
                  autoplay: true,
                  animationData: Error,
                  rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
                }}
                height={300}
                width={300}
              />
            </S.LottieContainer>
          )}
        </S.Movies>
        <S.Pagination>
          <S.PaginationButton>
            {currentPage > 1 && (
              <S.PaginationItem
                onClick={() => handleChangePage(currentPage - 1)}
              >
                Previous
              </S.PaginationItem>
            )}
            {hitFive.map(page => (
              <S.PaginationPage
                key={page}
                onClick={() => handleChangePage(page)}
                isSelected={page === currentPage}
              >
                {page}
              </S.PaginationPage>
            ))}

            <S.PaginationPage
              key={pages[pages.length - 1]}
              onClick={() => handleChangePage(pages[pages.length - 1])}
              isSelected={pages[pages.length - 1] === currentPage}
            >
              {pages[pages.length - 1]}
            </S.PaginationPage>

            {currentPage <= pages.length && (
              <S.PaginationItem
                disabled={currentPage === pages.length}
                onClick={() => handleChangePage(currentPage + 1)}
              >
                Next
              </S.PaginationItem>
            )}
          </S.PaginationButton>
        </S.Pagination>
      </S.Container>
    </>
  );
}
