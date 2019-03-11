import React, {Component} from 'react';
import {
    LandingNewsContainer,
    PTagDiv,
    PTag
} from '../../styledComponents/LandingNewsStyle';
import axios from 'axios';

class LandingNews extends Component {
    state = { 
        landingnews: []
    }

    componentDidMount = () => {
        axios
            .get('http://localhost:3300/news')
            .then(res => {
                this.setState({
                    landingnews:res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    dateParser = () => {
        return this.state.landingnews[this.state.landingnews.length -1].created_at.split(' ')[0]
    }

    latestNews = () => {
       if (this.state.landingnews.length) {
           return (
            <PTagDiv>
                <PTag>
                    {this.state.landingnews[this.state.landingnews.length - 1].name}
                </PTag>
                <PTag>
                    "<em>{this.state.landingnews[this.state.landingnews.length - 1].content}</em>"
                </PTag>
                <PTag>
                    -{this.dateParser()}
                </PTag>
            </PTagDiv>
           )
       }
    }





    render() { 
        return ( 
            <LandingNewsContainer>
                <h1>
                    Latest News
                </h1> 
                   {this.latestNews()}                
            </LandingNewsContainer>
        );
    }
}
 
export default LandingNews;

