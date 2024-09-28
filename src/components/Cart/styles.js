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

    div {
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
    .cartFooter{
        div{
            display: flex;
            justify-content: space-between;
            h4{
                font-size: 1.1rem;
                font-weight: 600;
            }
            span{
                font-size: 1rem;
            }
        }

        .buy-button{
            display: flex;
            flex-direction: column;
            align-items: stretch;
            width: 80%;
            margin: 0 auto;
            border: 0;
            background-color: #ee911e;
            box-sizing: border-box;
            padding: 8px;
            color: #fff;
            font-weight: 800;
            font-size: 1.3rem;
            cursor: pointer;
    }
    
    
        
    }
    
`;

export {
    CartContainer,
}