import React from 'react';
import './Drawer.css';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';


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
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

  
    render(){
        return(
        <div className="drawer">
            <Button size='large' variant="contained" onClick={this.toggleDrawer('left', true)}>
                <MenuIcon/>
                </Button>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                {this.sideList('left')}
            </Drawer>
        </div>
        );
        }
}