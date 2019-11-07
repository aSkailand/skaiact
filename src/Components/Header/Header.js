import React from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Drawer from '../Drawer/Drawer';

export default class Header extends React.Component {

    buttonList = [];

    renderButtons() {
        for (let i = 0; i < 3; i++) {
            let className = "button-" + i;
            this.buttonList.push(
                <div className={className + "-container"}>
                    <Button variant="contained" className={className}>
                    </Button>
                </div>)
        }

        return (this.buttonList);
    }

    renderRightContent() {
        return (
            <div className="header-right">
                <div className="button-0">
                    <Button variant="contained" color="primary" size="large" className="profile">
                    <AccountCircleIcon/>
                </Button>
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
            <div className="header">
                {this.renderLeftContent()}
                {this.renderCenterContent()}
                {this.renderRightContent()}
            </div>
        );
    }
}

