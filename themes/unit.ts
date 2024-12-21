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
        }
    },

    typography: {
        fontFamily: 'Inter, sans-serif',

        h2: {
            fontSize: '34px'
        }
    }
})