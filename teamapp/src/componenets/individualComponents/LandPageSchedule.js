import React, {Component} from 'react';
import {
    LandingScheduleContainer,
    SchedDiv
} from '../../styledComponents/LandingScheduleStyle'
import axios from 'axios';

class LandingSchedule extends Component {
    state = { 
        games: []
     }

    componentDidMount = () => {
        axios
            .get('http://localhost:3300/games')
            .then(res => {
                this.setState({
                    games:res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    listgames = () => {
        return this.state.games.filter(param => {
            return new Date(param.date) >= new Date()
        }).map(param => {
            return (
                <SchedDiv>
                    <p>{param.date}</p>
                    <p>{param.teamname}</p>                    
                    <p>{param.location}</p>     
                    <p>{param.time} PM</p>               
                </SchedDiv>
            )
        })
    }


    render() { 
        return ( 
            <LandingScheduleContainer>
                <h1>Upcoming Games</h1>
                {this.listgames()}
            </LandingScheduleContainer>            
         );
    }
}
 
export default LandingSchedule;