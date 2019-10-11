import React from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import Drawer from './Drawer';

export default class Header extends React.Component {

    buttonList = [];

    renderButtons() {
        for (let i = 0; i < 3; i++) {
            let className = "button-" + i;
            this.buttonList.push(
                <div className={className + "-container"}>
                    <Button variant="contained" className={className}>
                        Action {i}
                    </Button>
                </div>)
        }

        return (this.buttonList);
    }

    renderRightContent() {
        return (
            <div className="header-right">
                <div className="button-0">
                    <Button variant="contained" className="profile">
                        My profile
                </Button>
                </div>
            </div>
        );
    };

    renderCenterContent() {
        return (
            <div className="header-center">
                <p>
                    header center
                </p>
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

