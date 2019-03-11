import React, {Component} from 'react';
import {
    LandingTeamContainer,
    Button
} from '../../styledComponents/LandingTeamStyle';
import meetteam from '../../assets/meetteam.jpeg'


const styledImg = {
    backgroundImage:`url(${meetteam})`,
    backgroundSize:'100%',
    backgroundRepeat:'no-repeat'
}

const LandingTeam = () => {
    return ( 
        <LandingTeamContainer style={styledImg}>
            <Button>
                Meet the Team
            </Button>
        </LandingTeamContainer>
     );
}
 
export default LandingTeam;