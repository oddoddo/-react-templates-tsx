import styled from 'styled-components';
import Title from '../../components/Title';

const Investment = () => {
  return (
    <InvestmentWrapper>
      <Title title="Investment" />
      <p>This is a Gatsby starter blog with TypeScript and styled-components.</p>
    </InvestmentWrapper>
  );
};

const InvestmentWrapper = styled.div``;

export default Investment;
