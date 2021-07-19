import { useContext } from 'react';

import { FavoritesContext, FavoritesData } from '../contexts/favorites';

export function useFavorites(): FavoritesData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within an FavoritesProvider');
  }

  return context;
}
