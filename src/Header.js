import React from 'react';
import './Header.css';

export default class Header extends React.Component {

    renderRightContent() {
        return (
            <div className="header-right">
                <p>
                    header rigth
                </p>
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
                <p>
                    header left
                </p>
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

