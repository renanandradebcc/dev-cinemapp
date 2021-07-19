import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1248px;
  margin: 2rem auto 0;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 3.12rem;
  font-weight: bold;
`;

export const ContainerLottie = styled.div``;

export const Input = styled.form`
  input {
    width: 20rem;
    height: 3rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px black;
    background: #dbdbdb;
    padding-left: 1.25rem;

    outline: none;
  }
  button {
    background: transparent;
    border: none;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;
