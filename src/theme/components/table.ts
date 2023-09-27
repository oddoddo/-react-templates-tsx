import { tableAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  table: {
    fontVariantNumeric: 'lining-nums tabular-nums',
    borderCollapse: 'collapse',
    width: 'full',
  },
  th: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 'wider',
    textAlign: 'start',
  },
  td: {
    textAlign: 'start',
  },
  caption: {
    mt: 4,
    fontFamily: 'heading',
    textAlign: 'center',
    fontWeight: 'medium',
  },
});

const numericStyles = defineStyle({
  '&[data-is-numeric=true]': {
    textAlign: 'end',
  },
});

const variantSimple = definePartsStyle((props) => {
  const { colorScheme: c } = props;

  return {
    th: {
      color: mode('gray.600', 'gray.400')(props),
      borderBottom: '1px',
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    td: {
      borderBottom: '1px',
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    caption: {
      color: mode('gray.600', 'gray.100')(props),
    },
    tfoot: {
      tr: {
        '&:last-of-type': {
          th: { borderBottomWidth: 0 },
        },
      },
    },
  };
});

const variantStripe = definePartsStyle((props) => {
  const { colorScheme: c } = props;

  return {
    th: {
      fontFamily: 'Roboto Flex',
      color: mode('#9C9C9C', '#9C9C9C')(props),
      borderBottom: '1px',
      borderColor: mode(`#E7E7EB`, `#E7E7EB`)(props),
      span: {
        color: '#9C9C9C',
      },
      ...numericStyles,
    },
    td: {
      fontFamily: 'Spoqa Han Sans Neo',
      borderBottom: '0',
      color: 'Typo_Sub_3A',
      ...numericStyles,
    },
    caption: {
      color: mode('gray.600', 'gray.100')(props),
    },
    tbody: {
      tr: {
        '&:nth-of-type(odd)': {
          td: {
            background: mode(`#F7F7F9`, `#fff`)(props),
          },
        },
      },
    },
  };
});

const variants = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({}),
};

const sizes = {
  sm: definePartsStyle({
    th: {
      px: '4',
      py: '1',
      lineHeight: '4',
      fontSize: 'xs',
    },
    td: {
      px: '4',
      py: '2',
      fontSize: 'sm',
      lineHeight: '4',
    },
    caption: {
      px: '4',
      py: '2',
      fontSize: 'xs',
    },
  }),
  md: definePartsStyle({
    th: {
      px: '6',
      py: '2',
      lineHeight: '4',
      fontSize: '12px',
      fontWeight: '500',
    },
    td: {
      px: '6',
      py: '5px',
      lineHeight: '5',
      fontSize: '12px',
      fontWeight: '400',
    },
    caption: {
      px: '6',
      py: '2',
      fontSize: 'sm',
    },
  }),
  lg: definePartsStyle({
    th: {
      px: '8',
      py: '4',
      lineHeight: '5',
      fontSize: 'sm',
    },
    td: {
      px: '8',
      py: '5',
      lineHeight: '6',
    },
    caption: {
      px: '6',
      py: '2',
      fontSize: 'md',
    },
  }),
};

export const tableTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'simple',
    size: 'md',
    colorScheme: 'gray',
  },
});
