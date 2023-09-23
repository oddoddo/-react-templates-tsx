import { Heading, Input, Flex, Spacer } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import Gnb from './Gnb';
import Utils from './Util';
import Langs from './Langs';

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading as="h1" size="lg">
        <Link to="/">한국ST거래</Link>
      </Heading>
      <Gnb />
      <Spacer />
      <Flex alignItems={'center'}>
        <Search />
        <Utils />
        <Langs />
      </Flex>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  height: var(--header-height);
  background: var(--primary);
  border-bottom: 1px solid var(--gray-2);
  padding: 0 4%;
  h1 a {
    display: flex;
    align-items: center;
    width: 154px;
    height: 100%;
    margin-right: 1rem;
    background: url('/images/comm/logo.svg') no-repeat 50% 50%;
    text-indent: -9999px;
  }
`;

export default Header;
