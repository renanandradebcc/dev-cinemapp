import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import * as S from './styles';
import Logo from '../../assets/logo.svg';

export const Header: React.FC = () => (
  <S.Container>
    <S.ContainerIMG>
      <Link to="/">
        <img src={Logo} alt="Cinema App" />
      </Link>
    </S.ContainerIMG>

    <S.Menu>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/favorite">
        <li>Favoritos</li>
      </Link>
    </S.Menu>
  </S.Container>
);
