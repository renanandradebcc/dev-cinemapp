import React, { createContext, useState, ReactNode } from 'react';

import { addToLocalStorage, getLocalStorage } from '../../utils/storage';
import { IMovie } from '../../pages/Home';

export interface FavoritesData {
  favoriteList: IMovie[];
  toggleAddFavorite: (movie: IMovie) => void;
  isFavoriteCheckExists: (id: string) => boolean;
}

interface FavoriteProvidersProps {
  children: ReactNode;
}

export const FavoritesContext = createContext({} as FavoritesData);

export function FavoritesProvider({
  children,
}: FavoriteProvidersProps): JSX.Element {
  const [favoriteList, setfavoriteList] = useState<IMovie[]>(
    getLocalStorage('@Cinemapp:movies'),
  );

  function toggleAddFavorite(movie: IMovie): void {
    const movieExist = favoriteList.find(data => data.imdbID === movie.imdbID);

    if (movieExist) {
      const filteredMovies = favoriteList.filter(
        data => data.imdbID !== movieExist.imdbID,
      );

      setfavoriteList(filteredMovies);

      addToLocalStorage('@Cinemapp:movies', filteredMovies);

      return;
    }

    const newFavoriteMovieList = [...favoriteList, movie];

    setfavoriteList(newFavoriteMovieList);
    addToLocalStorage('@Cinemapp:movies', newFavoriteMovieList);
  }

  function isFavoriteCheckExists(id: string): boolean {
    const movieExist = favoriteList.find(data => data.imdbID === id);

    if (movieExist) {
      return true;
    }
    return false;
  }

  const contextValues = {
    favoriteList,
    toggleAddFavorite,
    isFavoriteCheckExists,
  };

  return (
    <FavoritesContext.Provider value={contextValues}>
      {children}
    </FavoritesContext.Provider>
  );
}
