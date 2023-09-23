import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { Container } from '@chakra-ui/react';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main id="main">
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex-grow: 1;
    padding: 2rem 0;
  }
  footer {
    margin-top: auto;
  }
`;

export default Layout;
