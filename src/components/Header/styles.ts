import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  height: 3.75rem;

  img {
    margin-left: 1rem;
    position: absolute;
    top: 25%;
  }
`;

export const ContainerIMG = styled.div``;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  flex: 1;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #000;
    font-size: 1.25rem;
  }

  @media (max-width: 540px) {
    margin-top: 3.12rem;
  }
`;
