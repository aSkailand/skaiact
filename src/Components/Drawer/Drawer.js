import React from 'react';
import './Drawer.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';


export default class TemporaryDrawer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false,
        };
    }
    
    toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ ...this.state, [side]: open });
    };

    sideList = side => (
        <div
            className="list"
            role="presentation"
            onClick={this.toggleDrawer(side, false)}
            onKeyDown={this.toggleDrawer(side, false)}
        >
            <List>
                    {this.renderListItem('Email', 'mailto: aslakskailand@gmail.com', 'mail')}
                    {this.renderListItem('Phone', 'tel: +47 401 70 768', 'phone' )}
                    {this.renderListItem('LinkedIn', 'https://www.linkedin.com/in/aslak-frafjord-skailand-968a6a130', 'web', '_blank')}
            </List>
        </div>
    );

    renderListItem(key,link, icon, target){
        return(
            <a href={link} target={target} rel='noopener noreferrer'>
            <ListItem button key={key}>
            <i class="material-icons">{icon}</i>
                <ListItemText primary={key}/>
            </ListItem>
             </a>
        )

    }

  
    render(){
        return(
        <div className="drawer">
            <IconButton onClick={this.toggleDrawer('left', true)}>
                <MenuIcon/>

                </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                {this.sideList('left')}
            </Drawer>
        </div>
        );
        }
}