'use client'
import { createTheme } from '@mui/material/styles'

export default createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#c90620'
        },
        secondary: {
            main: '#242424'
        },
        secondaryGrey: {
            main: '#3a629c'
        }

    },

    typography: {
        fontFamily: 'Inter, sans-serif',

        h2: {
            fontSize: '34px'
        }
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 3
                }
            }
        }
    }
})


declare module '@mui/material/styles' {
    interface Palette {
        secondaryGrey: Palette['primary'];
        // ocean: Palette['primary'];
    }
    interface PaletteOptions {
        secondaryGrey?: PaletteOptions['primary'];
        // ocean?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        secondaryGrey: true;
        // ocean: true;
    }
}