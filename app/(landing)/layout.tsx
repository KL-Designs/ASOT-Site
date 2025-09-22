import { ThemeProvider } from "@mui/material"

import UnitTheme from '@/themes/unit'


export default function LandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeProvider theme={UnitTheme}>
            {children}
        </ThemeProvider>
    )
}