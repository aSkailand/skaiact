import React from 'react';
import './Header.css';
import Drawer from '../Drawer/Drawer';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Redirect } from 'react-router';

interface Props {
  routeMessages: () => JSX.Element;
}

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

export default class Header extends React.Component<Props> {  
    state = {
        redirect: false
    }  
    renderLeftContent() {
        return (
            <div className="header-left">
                <Drawer routeMessages={this.props.routeMessages}/>
            </div>
        );
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
      }
    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to='/'/>
        }
      }

    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <AppBar position="fixed">
                        <Toolbar>
                            {this.renderLeftContent()}
                            {this.renderRedirect()}
                            <Button variant='contained' color='secondary' onClick={this.setRedirect}>
                                Home
                            </Button>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </div>
            
        );
    }
}

