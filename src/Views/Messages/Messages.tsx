import React from 'react';
import { MessageResponse } from '../../interface';
import InfoCard from '../../Components/Cards/InfoCard/InfoCard';


type State = {
    data: MessageResponse[],
};

export default class Messages extends React.Component<{}, State> {

    state = {
        data: [] as MessageResponse[],
    }

    componentDidMount(){
            fetch('http://localhost:8000/notes', {method: 'GET',})
                .then((res) => res.json())
                .then((data) => {
                    this.setState({data}); 
            });
        }
        
    render(){
    const messageItems = this.state.data ? this.state.data.map(message=> {
        return <InfoCard title={message.date} info={message.message}></InfoCard>
    }) : <li>No messages</li>;
        return(
            <div className='Messages'>
                <ul>{messageItems}</ul>
            </div>
        )
    }
}