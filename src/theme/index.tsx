import { extendTheme } from '@chakra-ui/react';
import { containerTheme } from './components/Container';

const theme = extendTheme({
  components: {
    Container: containerTheme,
  },
});

export default theme;
