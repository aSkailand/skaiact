import React from 'react';
import './Header.scss';
import Drawer from '../Drawer/Drawer';
import { AppBar, Toolbar, Button, ListItem, List } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Redirect } from 'react-router';

interface Props {
  routeMessages: () => JSX.Element;
  routeMessagesButton: () => JSX.Element;
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
            <div className="header">
                <ThemeProvider theme={theme}>
                    <AppBar position="fixed">
                        <Toolbar>
                            {this.renderLeftContent()}
                            {this.renderRedirect()}
                            <div className="header-button">
                            <Button variant='contained' onClick={this.setRedirect}>
                                Home
                            </Button>
                            </div>
                            <div className="header-button">
                                {this.props.routeMessagesButton()}
                            </div>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </div>
            
        );
    }
}

