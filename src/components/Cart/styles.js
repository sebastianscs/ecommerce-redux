import styled from "styled-components";
import "reset-css";
const CartContainer = styled.article`

    width: 500px;
    height: 93%;
    background-color: #FFF;
    padding: 20PX;
    box-sizing: border-box;
    position: fixed;
    right: 0;
    transition: all .25s ease;
    top: 72px;
    box-shadow: -19px -1px 22px -15px rgba(0, 0, 0, 0.30);
    overflow: auto;
    right: ${({ visible }) => (visible ? '0' : '-700px')};
    font-family:'Lexend', Arial, sans-serif;

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }
    &::-webkit-scrollbar:vertical{
        width: 10px;
    }
    
    h2 {
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        padding: 20px 0;
        box-sizing: border-box;
    }
      
        input{
            width: 30px;
            height: 20px;
            border: 0;
            color: #494949;
            text-align: center;
            font-weight: 300;
            font-size: .95rem;
            font-family: 'Lexend', Arial, Helvetica, sans-serif;
        }
    
    }
`;

const ProductContainer = styled.section`
        width: 100%;
        border-bottom: 1px solid #494949;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        box-sizing: border-box;

        img {
            width: 72px;
            height: 60px
        }

        p{
            font-weight: 500;
        }

        i {
            width: 25px;
            height:30px;
            cursor: pointer;
            img{
                width:100%;
                height:100%;
            }
`;
const CartFooter = styled.section`
    width:463px;
    height:70px;
    flex-direction:column;
    justify-content:space-between;
    position:absolute;
    bottom:3%;
    display:flex;
    align-items:center;
    background-color:#FFF;
    
`;

const TotalTitle = styled.h3`
    box-sizing:border-box;
    padding:15px 20px;
    font-size:1.5rem;
    font-weight:700;
`;
const TotalPrice = styled.h4`
    box-sizing:border-box;
    padding:7px 20px;
    font-size:1.1rem;
    font-weight:700;
`;
const TextContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    box-sizing:border-box;
    justify-content:space-between;
`;
const BuyButton = styled.button`
    width:100%;
    box-sizing:border-box;
    border:none;
    border-radius:4px;
    padding:7px;
    font-family: 'Lexend', Arial, sans-serif;
    font-weight:600;
    background-color: #832424;
    color: #FFF;
`;
export {
    CartContainer,
    CartFooter,
    TotalTitle,
    TotalPrice,
    TextContainer,
    BuyButton,
    ProductContainer
}