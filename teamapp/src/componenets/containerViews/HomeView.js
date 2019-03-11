import React, {Component} from 'react'
import JumboTron from '../individualComponents/Jumbotron';
import LandingNews from '../individualComponents/LandPageNews';
import LandingSchedule from '../individualComponents/LandPageSchedule';
import LandingTeam from '../individualComponents/LandingTeam';
import {
    HomeViewContainer,
} from '../../styledComponents/HomeViewStyle';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HomeViewContainer>
                <JumboTron />
                <LandingNews />
                <LandingSchedule />
                <LandingTeam />
            </HomeViewContainer>
         );
    }
}
 
export default HomeView;