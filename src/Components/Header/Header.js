import React from 'react';
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Drawer from '../Drawer/Drawer';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';

export default class Header extends React.Component {

    renderRightContent() {
        return (
            <div className="header-right">
                <div className="button-0">
                    <IconButton>
                        <AccountCircleIcon/>
                    </IconButton>
                </div>
            </div>
        );
    };

    renderCenterContent() {
        return (
            <div className="header-center">
                <h3>
                    Home
                </h3>
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
            <React.Fragment>
                <AppBar position="fixed">
                    <Toolbar>
                        {this.renderLeftContent()}
                        {this.renderRightContent()}\
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

