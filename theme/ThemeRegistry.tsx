"use client"
import React from "react"
import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"
import { NextAppDirEmotionCacheProvider } from "./EmotionCache"
import { CssBaseline } from "@mui/material"
import { Poppins } from "next/font/google"

const poppins = Poppins({
    weight: ['300','400','500','700','800','900'],
    style: ['normal','italic'],
    subsets: ['latin'],
})

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: poppins.style.fontFamily,
        h4:{
            fontSize: "1.25rem"
        },
        h5:{
            fontSize: '1.125rem'
        },
        h6:{
            fontSize: '1rem'
        }


    },
    palette: {
        background:{
            default: '#FFFFFF'
        },
        primary:{
            main: "#FFFFFF",
            light: "#F5F5F5"
        },
        secondary:{
            main: "#554AF0",
            light: "#726BCF",
            dark: "#151875"
        },
        grey:{
            100: "#707070",
            700: "#4E5471",
            800: "#121212",
            900: "#0E0E0E"
        }
    }
}

const theme = createTheme(themeOptions)

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    )
}