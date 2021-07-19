import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(18.75rem + 1rem);
  background: white;
  border-radius: 1.87rem;
  padding: 0.5rem;

  img {
    width: 18.75rem;
    height: 27.69rem;
    border-radius: 1.87rem 1.87rem 1.87rem 1.87rem;
    margin-bottom: 1rem;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 2rem;
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 0.8rem;
  justify-content: space-around;
`;

export const Yaer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    font-weight: bold;
    color: #000;
    font-family: sans-serif;
    font-size: 1rem;
  }
`;

export const Avaliation = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: black;
    font-family: sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  width: 3.12rem;
  height: 3.12rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 3.75rem;
  padding: 1.5rem;

  background: #ffffff;
  color: white;

  svg {
    position: absolute;
    width: 1.56rem;
    height: 1.56rem;
  }
`;
