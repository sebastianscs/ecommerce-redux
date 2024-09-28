import styled from "styled-components";

const ProductsList = styled.article`
    width: 100%;
    padding-top:90px;
    display: grid;
    margin: 0 auto;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap:20px;
    font-family:'Lexend', Arial, sans-serif;
`
const Product = styled.section`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    h2 {
        font-size:1.2rem;
        font-weight:600;
        padding:7px;
        box-sizing:border-box;
    }
    img {
        width:100%;
        padding:10px;
        box-sizing:border-box;
    }
    p {
        font-size:1rem;
        font-weight:500;
        padding:7px;
        padding-top:2px;
        box-sizing:border-box;
    }
    button {
        border:none;
        border-radius:5px;
        background-color: #832424;
        color:#FFF;
        padding:10px 25px;
        box-sizing:border-box;
        cursor:pointer;
        transition: transform 0.2s linear;
        &:hover {
            transform: scale(1.03);
        }
    }
`
export {
    ProductsList,
    Product
}