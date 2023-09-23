import styled from 'styled-components';
import { FormControl, FormLabel, Input, Button, VisuallyHidden } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Search2Icon } from '@chakra-ui/icons';

const Search = () => {
  return (
    <SearchWrapper>
      <FormLabel className="blind">Search</FormLabel>
      <Input type="text" placeholder="토큰증권’을 검색해보세요." />
      <Button>
        <Search2Icon />
        <VisuallyHidden>search</VisuallyHidden>
      </Button>
    </SearchWrapper>
  );
};

const SearchWrapper = styled(FormControl)`
  overflow: hidden;
  margin-right: 8px;
  border-radius: 34px;
  border: 1px solid #322f74;
  background: #221e5e;
  input {
    width: 270px;
    height: 2.125rem;
    padding: 0.1rem 0.5rem 0 2.9rem;
    border: none;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--white);
    &::placeholder {
      color: var(--gray-3);
    }
  }
  button {
    position: absolute;
    top: 0;
    left: 5px;
    width: 34px;
    height: 34px;
    background: transparent;
    color: var(--white);
  }
`;

export default Search;
