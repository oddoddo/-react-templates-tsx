import styled from 'styled-components';
import Title from '../../components/Title';

const Exchange = () => {
  return (
    <ExchangeWrapper>
      <Title title="Exchange" />
      <p>This is a Gatsby starter blog with TypeScript and styled-components.</p>
    </ExchangeWrapper>
  );
};

const ExchangeWrapper = styled.div``;

export default Exchange;
