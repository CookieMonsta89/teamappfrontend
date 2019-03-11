import React, {Component }from 'react';
import logo from '../../assets/logo.png'
import {
    Nav,
    NavDiv,
    Logo,
    NavList,
    ATag
} from '../../styledComponents/NavigationStyles';

class Navigation extends Component {
    state = { 
        
     }

     activeLink = (e) => {
        e.preventDefault();
        let tabsArr = document.getElementsByClassName("tab");
        for (let i = 0; i < tabsArr.length; i++) {
            tabsArr[i].removeAttribute('style');
        }
        tabsArr[e.target.name].setAttribute('style', "color:white; background:#520A0D");
     }


    render() { 
        return ( 
            <Nav>
                <NavDiv>
                    <Logo src={logo} alt='Logo' />
                    <NavList>
                        <ATag href='' onClick={this.activeLink} className='tab' name='0' style={{color:'white', background:'#520A0D'}}>Home</ATag>
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