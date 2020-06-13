import React from 'react';
import { MessageResponse, SKAIEND } from '../../interface';
import InfoCard from '../../Components/Cards/InfoCard/InfoCard';
import '../../Components/Cards/Cards.scss';
import '../../App/App.scss'
import { Container } from '@material-ui/core';



type State = {
    data: MessageResponse[],
};

export default class Messages extends React.Component<{}, State> {

    state = {
        data: [] as MessageResponse[],
    }

    componentDidMount(){
            console.log(SKAIEND + '/notes');
            fetch(SKAIEND + '/notes', {method: 'GET',})
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.setState({data}); 
            });
        }
        
    render(){
        console.log(this.state.data);
        const messageItems = this.state.data.length > 0  ? this.state.data.map(message=> {
            return <InfoCard title={message.date} info={message.message}></InfoCard>
        }).reverse() : <li>No messages</li>;
        return(
            <Container maxWidth='sm'>
                <div className="please-hire-me">
                    {messageItems}
                </div>
            </Container>
            
        )
    }
}