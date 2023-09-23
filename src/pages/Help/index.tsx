import styled from 'styled-components';
import Title from '../../components/Title';

const Help = () => {
  return (
    <HelpWrapper>
      <Title title="Help" />
      <p>This is a Gatsby starter blog with TypeScript and styled-components.</p>
    </HelpWrapper>
  );
};

const HelpWrapper = styled.div``;

export default Help;
