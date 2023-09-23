// Routes를 이용한 라우팅
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages';
import Exchange from './pages/Exchange';
import Deposit from './pages/Deposit';
import Investment from './pages/Investment';
import Help from './pages/Help';
import NotFound from './pages/NotFound';

import { ChakraProvider } from '@chakra-ui/react';
import { Reset } from 'styled-reset';
import GlobalStyles from './styles/GlobalStyles.styles';
import theme from './theme';

const App = () => {
  return (
    // chakra-ui 적용
    <ChakraProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Exchange" element={<Exchange />} />
          <Route path="/Deposit" element={<Deposit />} />
          <Route path="/Investment" element={<Investment />} />
          <Route path="/Help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
