import React from 'react';
import '../Cards.scss';
import { CardContent, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export default function MessageCard(){
    return(

        <div className="card-message">
            <Card raised={true}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        About me
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        My name is Aslak and I am an 25 year old man. I have studied computer engineering at the University of Agder
                        and want continue the path of software development.
                    </Typography>
                </CardContent>
            </Card>
           
        </div>
    )
}