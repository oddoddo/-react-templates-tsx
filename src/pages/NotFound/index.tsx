import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Container>
        <h2>404</h2>
        <p>페이지를 찾을 수 없습니다.</p>
        <Link to="/">홈으로</Link>
      </Container>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

export default NotFound;
