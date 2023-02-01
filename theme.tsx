import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    hover?: string;
    selection?: string;
  }
  interface SimplePaletteColorOptions {
    hover?: string;
    selection?: string;
  }
  interface TypeText {
    tertiary?: string;
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0177C8',
      hover: '#F0F9FF',
      selection: '#E1F3FE',
    },
    secondary: {
      main: '#78BE22',
      hover: '#6CAB1E',
    },
    background: {
      default: '#E9EEF2',
    },
    text: {
      primary: '#02080D',
      secondary: '#565B6A',
      tertiary: '#8D919A',
      disabled: '#8D919A',
    },
    error: {
      main: '#FF0000',
    },
    warning: {
      main: '#F9BF00',
    },
    success: {
      main: '#78BE22',
    },
    info: {
      main: '#0077C8',
    },
    divider: '#5b6062',
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    allVariants: {
      color: '#02080D',
    },
    h1: {
      fontWeight: 800,
      fontSize: '3.6rem',
      '@media (max-width:1200px)': {
        fontSize: '3.0rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.6rem',
      },
    },
    h2: {
      fontSize: '1.45rem',
      fontWeight: 650,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 300,
      color: '#8D919A',
    },
    button: {
      textTransform: 'none',
      fontSize: '1.1rem',
    },
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiList: {
      defaultProps: {
        dense: true,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
});

export default theme;
