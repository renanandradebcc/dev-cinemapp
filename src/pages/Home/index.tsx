import { FormEvent, useState } from 'react';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FiSearch } from 'react-icons/fi';
import mickeyAnimation from '../../assets/animations/mickeyAnimation.json';
import { Header } from '../../components/Header/index';
import * as S from './styles';

export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Poster: string;
}

export function Home(): JSX.Element {
  const [newMovie, setNewMovie] = useState('');

  const history = useHistory();

  async function handleAddMovies(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    history.push(`/results?query=${newMovie}`);
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.Content>
          <S.Title>Qual filme você quer assistir ?</S.Title>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Lottie
              options={{
                autoplay: true,
                animationData: mickeyAnimation,
                rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
              }}
              height={300}
              width={300}
            />
          </motion.div>

          <S.Input onSubmit={handleAddMovies}>
            <input
              value={newMovie}
              onChange={e => setNewMovie(e.target.value)}
              type="Text"
              placeholder="Digite o nome do Filme"
            />
            <button type="submit">
              <FiSearch />
            </button>
          </S.Input>
        </S.Content>
      </S.Container>
    </>
  );
}
