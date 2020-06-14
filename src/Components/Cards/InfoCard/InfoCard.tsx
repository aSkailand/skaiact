import React from 'react';
import '../Cards.scss';
import { CardContent, Typography, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';

interface Props {
    imageUrl?: string,
    title?: string,
    info: string,
}

export default class MessageCard extends React.Component<Props> {
    
    renderMedia(youtube: boolean) {
        if (youtube) {
            return <CardMedia component="iframe" height="140" src={this.props.imageUrl}/>
        } else {
            return <CardMedia component="img" height="140" image={this.props.imageUrl}/>
        }
    }

    render(){
        var youtubeLink: boolean = false;
        if (this.props.imageUrl) {
            youtubeLink = this.props.imageUrl.includes('youtube');
        }

        return(
            <div className="card-message">
                <Card raised={true}>
                    {this.props.imageUrl ?
                       this.renderMedia(youtubeLink) : null}
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