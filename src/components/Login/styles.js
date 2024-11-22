import styled from "styled-components";

const InputLogin = styled.input`
    padding:10px;
    width:300px;
    border-radius: 5px;
`;
const ContainerLogin = styled.article`
    
    display:flex;
    flex-direction:column;
    font-family:'Lexend', Arial, sans-serif;
    justify-content:center;
    align-items:center;
    padding:250px 20px;
    margin:0 auto;
    width:600px;
    border:None;
    border-radius:10px;
    
`;

const LabelLogin = styled.label`
    padding:15px;
    font-weight:500;
    color:#4f4f4f;
`;
const ButtonLogin = styled.button`
    width:275px;
    color:#FFF;
    background-color:#832424;
    border:none;
    border-radius:4px;
    box-sizing:border-box;
    padding:10px;
    margin:5px;
`;

const ButtonContainer = styled.section`
    display:flex;
    flex-direction:column;
    padding-top:10px;
    margin:5px;
`;

export {
    InputLogin,
    ContainerLogin,
    LabelLogin,
    ButtonLogin,
    ButtonContainer
}