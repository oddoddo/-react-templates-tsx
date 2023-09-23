import { Container } from '@chakra-ui/react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <p>© 2023 oddodd.io</p>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: var(--gray-8);
  color: var(--white);
  padding: 1rem 0;
  text-align: center;
`;

export default Footer;
