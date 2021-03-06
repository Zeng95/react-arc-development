import { createTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

const theme = createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    },
    text: {
      primary: '#000'
    },
    background: {
      default: '#1C202B'
    }
  },
  typography: {
    tabItem: {
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'none'
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      color: 'white'
    }
  }
});

/**
 * The theme for this app
 */
export const appTheme = createTheme({
  ...theme,
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1080,
      xl: 1440
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: false,
      disableTouchRipple: false
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      },
      containedPrimary: {
        borderRadius: 10,
        '&:hover': {
          backgroundColor: theme.palette.primary.main
        }
      }
    }
  }
});

export const appThemeTeal = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#3C9EAF',
      light: 'rgba(60, 158, 175, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});

export const appThemePink = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#d1596e',
      light: 'rgba(209, 89, 110, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});

export const appThemeGreen = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#009473',
      light: 'rgba(0, 148, 115, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});

export const appThemePurple = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#c758a3',
      light: 'rgba(199, 88, 163, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});

export const appThemeBlue = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#819edf',
      light: 'rgba(129, 158, 223, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});
