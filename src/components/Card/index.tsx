import React from 'react';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useFavorites } from '../../hooks/useFavorite';
import { IMovie } from '../../pages/Home/index';

import * as S from './styles';

interface ICardProps {
  movie: IMovie;
}

export const Card: React.FC<ICardProps> = ({ movie }) => {
  const { isFavoriteCheckExists, toggleAddFavorite } = useFavorites();

  return (
    <S.Container key={movie.imdbID}>
      <img src={movie.Poster} alt="Movie" />

      <S.Title>
        <h6>{movie.Title}</h6>
      </S.Title>

      <S.FavoriteButton
        type="button"
        onClick={() => {
          toggleAddFavorite(movie);
        }}
      >
        {isFavoriteCheckExists(movie.imdbID) ? (
          <AiFillHeart color="#cc0000" />
        ) : (
          <AiOutlineHeart color="#cc0000" />
        )}
      </S.FavoriteButton>

      <S.Footer>
        <S.Yaer>
          <p>Ano</p>
          <p>{movie.Year}</p>
        </S.Yaer>
      </S.Footer>
    </S.Container>
  );
};
