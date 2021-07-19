import React, { ReactNode } from 'react';

import { FavoritesProvider } from './favorites';

interface Props {
  children: ReactNode;
}

export function AppContext({ children }: Props): JSX.Element {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
