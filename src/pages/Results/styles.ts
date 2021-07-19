import styled, { css } from 'styled-components';
// import { shade } from 'polished';

interface PaginationPageProps {
  isSelected?: boolean;
}

interface PaginationItemProps {
  disabled?: boolean;
}

export const Container = styled.div``;

export const Movies = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1248px;
  margin: 2rem auto 0;
`;

export const LottieContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  bottom: 50%;
  justify-content: center;
  align-items: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 30px 0;
`;

export const PaginationButton = styled.div`
  display: flex;
  cursor: pointer;
`;

export const PaginationItem = styled.button<PaginationItemProps>`
  background-color: transparent;
  border-color: grey;
  border: none;
  margin: 0 10px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: grey;
    `}
`;

export const PaginationPage = styled.button<PaginationPageProps>`
  background-color: transparent;
  border-color: grey;
  border: none;
  margin: 0 10px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: red;
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    `}
`;
