import styled from 'styled-components';
import Title from '../../components/Title';

const Deposit = () => {
  return (
    <DepositWrapper>
      <Title title="Deposit" />
      <p>This is a Gatsby starter blog with TypeScript and styled-components.</p>
    </DepositWrapper>
  );
};

const DepositWrapper = styled.div``;

export default Deposit;
