import { AiFillHeart } from 'react-icons/ai';
import { Header } from '../../components/Header';
import { useFavorites } from '../../hooks/useFavorite';

import * as S from './styles';

export function Favorite(): JSX.Element {
  const { favoriteList, toggleAddFavorite } = useFavorites();

  return (
    <>
      <Header />

      <S.Title>Você tem tantos filmes fantásticos para ver...</S.Title>

      <S.Movies>
        {favoriteList.map(eachMovie => (
          <S.Container key={eachMovie.imdbID}>
            <img src={eachMovie.Poster} alt="Movie" />

            <S.TitleCard>
              <h6>{eachMovie.Title}</h6>
            </S.TitleCard>

            <S.FavoriteButton
              type="button"
              onClick={() => {
                toggleAddFavorite(eachMovie);
              }}
            >
              <AiFillHeart color="#cc0000" />
            </S.FavoriteButton>

            <S.Footer>
              <S.Yaer>
                <p>Ano</p>
                <p>{eachMovie.Year}</p>
              </S.Yaer>
            </S.Footer>
          </S.Container>
        ))}
      </S.Movies>
    </>
  );
}
