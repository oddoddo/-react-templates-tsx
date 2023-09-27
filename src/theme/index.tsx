import { extendTheme } from '@chakra-ui/react';
import { tabsTheme } from './components/tabs';
import { tableTheme } from './components/table';
import { containerTheme } from './components/container';

const theme = extendTheme({
  components: {
    Container: containerTheme,
    Tabs: tabsTheme,
    Table: tableTheme,
  },
  styles: {
    global: {
      html: {
        width: '100%',
        height: '100%',
      },
      body: {
        bg: 'white',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '400',
      },
      // styles for the `a`
      a: {
        color: '#000000',
        _hover: {
          textDecoration: 'none !important',
        },
      },
      li: {
        listStyle: 'none',
      },
    },
  },
  space: {
    4: '25px',
  },
  colors: {
    text_default: '#3a3a3a',
    text_Gray01: '#000000',
    text_Gray02: '#000001',
    Secondary_V: '#A796FF',
    primary_V: '#6F36FF',
    Point_Red: '#E0002B',
    point02: '#FF6D3F',
    point_Green: '#00A5BC',
    BG_V: '#141225',
    BG_MainBOX: '#2D2A5C',
    login_BGBOX: '#19182F',
    input_BOXbg: '#2C273F',
    login_BOXline: '#443F5B',
    login_BOXline_hover: '#8F8DB1',
    mocup_bg: '#ECECEC',
    mocup_line: '#D1D1D1',
    mocup_text: '#929292',
    popup_B01: '#443F5B',
    popup_hover: '#2C273F',
    popup_BBGG: '#46405F',
    popup_BBG: '#3D3755',
    L_Gray_T01: '#BCBCCC',
    Back_BGBLACK: '#141225',

    primary: '#120E46',
    S_Light: '#cbc8ec',
    primary_light: 'rgba(90, 84, 164, 0.80)',
    primary_1: '#8a87b3',
    primary_2: '#8D86D5',
    primary_3: '#908eae',
    Dark_Red: '#ff324b',
    Dark_Blue: '#3AACFF',
    Typo_Sub_B0: '#9c9c9c',
    Typo_Sub_3A: '#3A3A3A',
    back_bg: '#F3F3F8',
    Line_Gray_EE: '#e7e7eb',
    Low_light: '#EDF3FF',
    High_light: '#FFEFEF',
    HIGH: '#f2002c',
    Gray_light: '#EDEDF0',
  },
});

export default theme;
