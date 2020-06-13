import React from 'react';
import { PlayerResponse, SKAIEND } from '../../interface';
import InfoCard from '../../Components/Cards/InfoCard/InfoCard';
import '../../Components/Cards/Cards.scss';
import '../../App/App.scss'
import { Container } from '@material-ui/core';



type State = {
    data: PlayerResponse[],
};

export default class Fantasy extends React.Component<{}, State> {

    state = {
        data: [] as PlayerResponse[],
    }

    componentDidMount(){
            fetch(SKAIEND + '/players', {method: 'GET',})
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    this.setState({data}); 
            });
        }
        
    render(){
        console.log(this.state.data);
        const players = this.state.data.length > 0  ? this.state.data.map(player=> {
            return <InfoCard title={player.name} info={player.team + ' ' + player.number + ' ' + player.position}></InfoCard>
        }).reverse() : <li>No messages</li>;
        return(
            <Container maxWidth='sm'>
                <div className="please-hire-me">
                    {players}
                </div>
            </Container>
            
        )
    }
}