import React from 'react';
import '../Cards.scss'
import { CardContent, CardActions, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextArea from '@material-ui/core/TextareaAutosize';


interface Props {
}

interface State {
    message: string;
    date: string;

}

export default class MessageCard extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            message: '',
            date: ''
        }
    }
 
    handleChange = (event: any) => {
        this.setState({message: event.target.value});
    }

    handleSubmit = async() => {
        const response = await fetch('http://localhost:8000/notes', {
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
        });
    }

    render(){
    return(
        <div className="card-message">
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