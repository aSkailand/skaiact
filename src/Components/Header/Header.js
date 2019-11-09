import React from 'react';
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Drawer from '../Drawer/Drawer';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#039be5',
      },
      secondary: {
        main: '#ef5350',
      },
    },
  });

export default class Header extends React.Component {    

    renderRightContent() {
        return (
            <div className="header-right">
                <IconButton>
                    <AccountCircleIcon color="inherit"/>
                </IconButton>
            </div>
        );
    };

    renderLeftContent() {
        return (
            <div className="header-left">
                <Drawer />
            </div>
        );
    };



    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <AppBar position="fixed">
                        <Toolbar>
                            {this.renderLeftContent()}
                            <Typography variant="h6">
                                Home
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </div>
        );
    }
}

