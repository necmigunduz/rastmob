import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Logo from '../src/images/todo_logo.png'

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static">
                <Typography variant="h2" align="center">ToDo APP</Typography>
                <img src={Logo} alt="logo" height="60" width="60"/>
            </AppBar>
        </Container>
    )
}

export default App