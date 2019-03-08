import React, {Component }from 'react';
import logo from '../../assets/logo.png'
import {
    Nav,
    NavDiv,
    Logo,
    NavList,
    ATag
} from '../../styledComponents/navigationStyles';

class Navigation extends Component {
    state = { 
        
     }

     activeLink = (e) => {
        e.preventDefault();
        let tabsArr = document.getElementsByClassName("tab");
        for (let i = 0; i < tabsArr.length; i++) {
            tabsArr[i].removeAttribute('style');
        }
        tabsArr[e.target.name].setAttribute('style', "color:white; border-bottom:2px solid white");
     }


    render() { 
        return ( 
            <Nav>
                <NavDiv>
                    <Logo src={logo} alt='Logo' />
                    <NavList>
                        <ATag href='' onClick={this.activeLink} className='tab' name='0' style={{color:'white', borderBottom:'1px solid white'}}>Home</ATag>
                        <ATag href='' onClick={this.activeLink} className='tab' name='1'>News</ATag>
                        <ATag href='' onClick={this.activeLink} className='tab' name='2'>Games</ATag>
                        <ATag href='' onClick={this.activeLink} className='tab' name='3'>Team</ATag>
                    </NavList>
                </NavDiv>                
            </Nav>
         );
    }
}
 
export default Navigation;