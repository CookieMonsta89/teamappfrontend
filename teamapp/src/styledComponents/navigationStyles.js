import styled, {css} from 'styled-components'

export const Nav = styled.div`
    background:rgb(51, 51, 51);
    color:white;
    height:55px;
    display:flex;
    justify-content:center;
`;

export const NavDiv = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
    width:65%;

`;

export const Logo = styled.img`
    width: 5%;
    height: 85%; 
`;

export const NavList = styled.div`
    color:white;
    display:flex;
    width:45%;
    height:100%;
    align-items:center;
    justify-content:space-evenly;
`;

export const ATag = styled.a`
    text-decoration:none;
    color: #9d9d9d;
    font-size:1rem;
    height:100%;
    display:flex;
    align-items:center;
    transition: color 1s;
    width: 25%;
    justify-content: center;
    :hover {
        color:white;
        transition:color 1s;
    }
`