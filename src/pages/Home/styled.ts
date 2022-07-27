import styled, { keyframes } from 'styled-components/macro';

const logoFloat = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const AppWrapper = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoFloat} infinite 3s ease-in-out;
  }
`;

export const AppLink = styled.a`
  color: rgb(112, 76, 182);
`;
