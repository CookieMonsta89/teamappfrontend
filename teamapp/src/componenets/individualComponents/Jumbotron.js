import React, {Component} from 'react';
import {
    JumboTronContainer,
    JumboTronDiv,
    JumboMotto
} from '../../styledComponents/JumbotronStyle';
import jumbo from '../../assets/jumbo.jpeg';

const styledImg = {
    backgroundImage:`url(${jumbo})`,
    backgroundSize:'100% 100%',
    backgroundRepeat:'no-repeat'
}

const JumboTron = () => {
    return ( 
        <JumboTronContainer style={styledImg}>
            <JumboTronDiv>  
                <JumboMotto>
                    "I learned all about life with a ball at my feet."<br/>- Ronaldinho
                </JumboMotto>            
            </JumboTronDiv>    
        </JumboTronContainer>
     );
}
 
 
export default JumboTron;