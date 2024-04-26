import {Box, CssBaseline, Switch, ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles'
import {theme as myTheme} from '@/UI/theme'
import {useLayoutEffect, useState} from "react";
import {useRouter} from "next/router";


export default function App({ Component, pageProps }) {

    const [mode, setMode] = useState('light')
    const [showChild, setShowChild] = useState(false)
    const theme = createTheme(myTheme(mode))
    const {push, pathname} = useRouter()


    const changeMode = () => {
        setMode(prevState => (prevState === 'light' ? 'dark' : 'light'
    ))
    }

    useLayoutEffect(() => {
        const themeMode = localStorage.getItem('themeMode')
        if(themeMode === null ) localStorage.setItem('themeMode', 'light')
        localStorage.setItem('themeMode', mode)


        const token = localStorage.getItem('token')
        if(token === null && pathname !== '/') push('/')
        else if(token != null && pathname === '/') push('/me')
        else setShowChild(true)
    }, [pathname, push, mode])


    if (!showChild) return null;


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <Switch onChange={changeMode} checked={mode !== 'light'}>{mode}</Switch>
                <Component {...pageProps}/>
            </Box>
        </ThemeProvider>
  );
}
