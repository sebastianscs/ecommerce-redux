import styled from "styled-components";
import "reset-css";

const HeaderContainer = styled.header`
    width: 100%;
    font-family: 'Lexend', Arial, sans-serif;
    background-color:#832424;
    padding: 10px 35px;
    display: flex;
    justify-content: space-between;
    box-sizing:border-box;
    position: fixed;
    
    h1 {
        font-size:2rem;
        font-weight:700;
        padding:10px;
        box-sizing:border-box;
        color:#FFF;
        cursor:pointer;
        transition: transform 0.3s ease;
        &:hover {
            transform: scale(1.1);
        }
    }
    img {
        width:42px;
        height:37px;
        cursor:pointer;
        transition: transform 0.3s ease;
        &:hover {
            transform: scale(1.08);
        }
    }
`

const NavContainer = styled.nav`
    display:flex;

    font-size:1.3rem;
    box-sizing:border-box;
    align-items:center;
    justify-content:center;
    a{
        text-decoration:none;
        box-sizing:border-box;
        padding:10px;
        color:#FFF;
    }
`

export {
    HeaderContainer,
    NavContainer
}