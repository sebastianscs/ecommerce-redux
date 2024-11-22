import styled from "styled-components";

const CheckoutContainer = styled.article`
    width:700px;
    position:relative;
    top:95px;
    display:flex;
    flex-direction:column;
    margin:0 auto;
    align-items:center;
    font-family: 'Lexend', Arial, sans-serif;
    @media screen and (max-width:480px){
        width: 100%;
    }
    @media screen and (max-width:820px){
        width: 100%;
    }
`;
const CheckoutProduct = styled.section`
    width:80%;
    display:grid;
    grid-template-columns: repeat(3, 1fr); 
    justify-items:center;
    justify-content:center;
    box-sizing:border-box;
    margin: 0 auto;
`;
const CheckoutTitles = styled.section`
    width:80%;
    display:grid;
    grid-template-columns: repeat(3, 1fr); 
    justify-items:center;
    justify-content:center;
    box-sizing:border-box;
    margin: 0 auto;
    box-sizing:border-box;
    padding:5px;
`;
const Titles = styled.h1`
    font-weight:800;
    font-size:1.4rem;
    box-sizing:border-box;
    padding:5px;
`;
const ProductText = styled.h2`
    font-weight:500;
    font-size:1.1rem;
    box-sizing:border-box;
    padding:15px;
`;
const CheckoutTotalContainer = styled.section`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

const CheckoutTotalTitle = styled.h2`
    font-weight:600;
    font-size:1.2rem;
    box-sizing:border-box;
    padding:15px;
`;
const CheckoutTotal = styled.h2`
    font-weight:600;
    font-size:1rem;
    box-sizing:border-box;
    padding:15px;
`;
const CheckoutButton = styled.button`
    width:300px;
    box-sizing:border-box;
    border:none;
    border-radius:10px;
    padding:7px;
    font-family: 'Lexend', Arial, sans-serif;
    font-weight:600;
    background-color: #832424;
    color: #FFF;
`;
export {
    CheckoutContainer,
    CheckoutProduct,
    ProductText,
    Titles,
    CheckoutTotalContainer,
    CheckoutTotalTitle,
    CheckoutTotal,
    CheckoutTitles,
    CheckoutButton,
}