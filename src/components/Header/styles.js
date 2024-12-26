import styled from "styled-components";
import "reset-css";
import cartImage from '../../assets/cart.svg';
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
const ButtonCart = styled.button`

    width: 50px;
    height: 100%;
    background-color: transparent;
    border: none;
    background-image: ${(props) => props.visible > 0 ? `url(${cartImage})`:'none'};

    cursor: ${(props => props.visible > 0 ? 'pointer' : 'inherit')};
`;
export {
    HeaderContainer,
    NavContainer,
    ButtonCart
}