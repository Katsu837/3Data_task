export const theme = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#44A815',
                },
                secondary: {
                    main: '#f50057',
                },
                background: {
                    default: '#F5F5F7',
                    paper: '#F5F5F7',
                },
            }
            : {
                primary: {
                    main: '#44A815',
                    contrastText: '#2B2E33',
                },
                secondary: {
                    main: '#f50057',
                },
                background: {
                    default: '#2B2E33',
                    paper: '#2B2E33',
                },
            }),
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'standard',
                fullWidth: true,
                sx: { margin: '16px 24px',  }
            },
        },
        MuiStack: {
            defaultProps: {
                display: "flex",
                alignItems: "center",
            }
        }
    }
});
