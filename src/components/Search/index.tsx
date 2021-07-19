import React from 'react';
import { FiSearch } from 'react-icons/fi';
import * as S from './styles';

export const Search: React.FC = () => (
  <S.Container>
    <S.Input>
      <input placeholder="Digite o nome do Filme" />
      <FiSearch />
    </S.Input>
  </S.Container>
);
