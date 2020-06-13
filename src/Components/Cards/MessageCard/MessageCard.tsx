import React from 'react';
import '../Cards.scss'
import { CardContent, CardActions, Typography, Snackbar } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextArea from '@material-ui/core/TextareaAutosize';
import { SKAIEND } from '../../../interface';


interface Props {
}

interface State {
    message: string;
    date: string;
    snackbar: boolean;

}

export default class MessageCard extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            message: '',
            date: '',
            snackbar: false, 
        }
    }

 
    handleChange = (event: any) => {
        this.setState({message: event.target.value});
    }

    handleClose = () => {
        this.setState({snackbar: false});
    }

    handleSubmit = async() => {
        console.log(SKAIEND);
        await fetch(SKAIEND + '/notes', {
            mode: 'cors',   
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: this.state.message,
                date: new Date().toDateString()
            })
        }).then(() => {
            this.setState({
                message: '',
                snackbar: true,
            });

        });
    }

    render(){
    return(
        <div className="card-message">
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
            open={this.state.snackbar}
            autoHideDuration={3000}
            onClose={this.handleClose}
            message="Message sent!"/>
            <Card raised={true}>
                <CardContent>
                    <Typography variant="h5" color="textSecondary">Send me a message! :-)</Typography>
                <CardContent>
                    <TextArea className="text-area"rows={6} placeholder="message..." value={this.state.message} onChange={this.handleChange}></TextArea>
                </CardContent>
                    <CardActions>
                        <Button color="secondary" onClick={this.handleSubmit}>Submit</Button>
                    </CardActions>
                </CardContent>
            </Card>           
        </div>
    )
}
}