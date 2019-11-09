import React from 'react';
import '../Cards.scss'
import { CardContent, CardActions, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import TextArea from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';


export default function MessageCard(){
    return(

        <div className="card-message">
            <Card raised={true}>
                <CardContent>
                    <Typography variant="h5" color="textSecondary">Send me a message! :-)</Typography>
                <CardContent>
                    <TextArea className="text-area"rows={6} placeholder="message..."></TextArea>
                </CardContent>
                    <CardActions>
                        <Button color="secondary">Submit</Button>
                    </CardActions>
                </CardContent>
            </Card>
           
        </div>
    )
}