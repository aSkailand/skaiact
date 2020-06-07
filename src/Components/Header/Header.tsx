import React from 'react';
import './Header.scss';
import Drawer from '../Drawer/Drawer';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Redirect } from 'react-router';

interface Props {
  routeMessages: () => JSX.Element;
  createRouteButton: (linkTo: string, title: string) => JSX.Element;
}


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
                
                    <AppBar position="fixed">
                        <Toolbar>
                            {this.renderLeftContent()}
                            {this.renderRedirect()}
                            <div className="header-button">
                            <Button variant='contained' color='secondary' onClick={this.setRedirect} disableElevation>
                                Home
                            </Button>
                            </div>
                            {this.props.createRouteButton('/messages', 'Messages')}
                            {this.props.createRouteButton('/game', 'Game')}
                            {this.props.createRouteButton('/fantasy', 'Fantasy Div 5 Rog (KAFAEN E PL)')}
                        </Toolbar>
                    </AppBar>
            </div>
            
        );
    }
}

