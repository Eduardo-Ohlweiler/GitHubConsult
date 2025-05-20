import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {  /* Corrigido aqui */
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.background};
  min-width: 20rem;
  max-width: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: ${({ theme }) => theme.colors.container};
  width: 100%;
  height: 100vh;
  padding: 40px;
  overflow-y: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;
