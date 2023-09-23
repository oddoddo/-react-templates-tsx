import styled from 'styled-components';
import { FormControl, FormLabel, Input, Button, VisuallyHidden } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Search2Icon } from '@chakra-ui/icons';

const Langs = () => {
  return (
    <LangsWrap>
      <Link className="on" to="/">
        KO
      </Link>
      <Link to="/">EN</Link>
    </LangsWrap>
  );
};

const LangsWrap = styled.nav`
  display: flex;
  margin-left: 0.5rem;
  a {
    display: flex;
    position: relative;
    padding: 1rem 0.6rem;
    white-space: nowrap;
    color: var(--primary-1);
    font-size: 0.6875rem;
    font-weight: 500;
    font-family: Roboto Flex;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-46%);
      width: 1px;
      height: 12px;
      background: var(--primary-2);
    }
    &:first-child::before {
      display: none;
    }
    &:hover {
      color: var(--black);
    }
    &.on {
      color: var(--white);
    }
  }
`;

export default Langs;
