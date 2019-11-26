import React from 'react';
import '../Cards.scss';
import { CardContent, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';

interface Props {
    title?: string,
    info: string,
}

export default class MessageCard extends React.Component<Props> {
    render(){
        return(
            <div className="card-message">
                <Card raised={true}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.info}
                        </Typography>
                    </CardContent>
                </Card>
            
            </div>
        )
    }
}