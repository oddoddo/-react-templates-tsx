import styled from 'styled-components';
import { Heading } from '@chakra-ui/react';

const Title = (props: { title: string }) => {
  return (
    <TitleWrapper>
      <Heading as="h2" size="lg">
        {props.title}
      </Heading>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  padding: 1rem 0;
`;

export default Title;
