import React, { useState } from "react";
import { ButtonContainer, ButtonLogin, ContainerLogin, InputLogin, LabelLogin } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, login} from "../../state/store.slice";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const users = useSelector(state => state.products.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = () => {
        dispatch(login({ username, password }));
        const userExists = users.find((u) => u.username === username && u.password === password);
        if (userExists) {
            navigate("/products"); // Redirigir si es exitoso
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    const handleRegister = () => {
        dispatch(registerUser({ username, password }));
        alert("Usuario registrado. Ahora puedes iniciar sesión.");
    };

    return(
        <>
            <ContainerLogin>
                
                <LabelLogin >Usuario</LabelLogin>
                <InputLogin 
                    placeholder='Usuario'
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"
                    aria-label="Ingresar usuario"
                    value={username}
                    />
                <LabelLogin >Contraseña</LabelLogin>
                <InputLogin 
                    placeholder='Contraseña' 
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    aria-label="Ingresar contraseña"
                    type="password"
                    value={password}
                    />
                
                <ButtonContainer>
                    <ButtonLogin aria-label='Boton de inicio de sesion' role="button" onClick={handleLogin}>Iniciar Sesión :3</ButtonLogin>
                    <ButtonLogin aria-label="Boton para registrarte" role="button" onClick={handleRegister}>Registrarse</ButtonLogin>
                </ButtonContainer>

            </ContainerLogin>
        </>
    )

}

export default Login;