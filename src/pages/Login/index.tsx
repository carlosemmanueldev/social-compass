/* eslint-disable no-case-declarations */
import {useEffect, useState} from "react";
import HeaderMessage from "../../components/HeaderMessage/HeaderMessage.tsx";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock1 } from "iconsax-react";
import Input from "../../components/Inputs/Input.tsx";
import Container from "../../components/Container/Container.tsx";
import Button from "../../components/Button/Button";
import { login } from "../../api/auth.ts";
import { useDispatch } from "react-redux";
import { sessionActions } from "../../store/session.ts";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState("");
    const [userError, setUserError] = useState(false);
    
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);
    const [genericalError, setGenericalError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    async function handleLogin(){
        if(!user){
            setUserError(true)
        }else{
            setUserError(false)
        }
        
        if(!password && password.length < 8 ){
            setPasswordError(true)
        }else{
            setPasswordError(false)
        }
        
        if(
            user &&
            password.length >= 8 
        ){
            setLoading(true)
            login(user, password)
                .then((response)=>{
                    const {token, user} = response.data;
                    const userId = user.id;

                    switch (response.status){
                        case 200:
                            dispatch(sessionActions.login({token, userId}));
                            navigate("/home")
                            break;
                        case 401:
                            setPasswordError(true)
                            setUserError(true)
                            setGenericalError(response.data.message)
                            break;
                        default:
                            setPasswordError(true)
                            setUserError(true)
                            setGenericalError("Ocorreu um erro inesperado, tente novamente.")
                            break;
                    }
                })
                .finally(() =>{
                    setLoading(false)
                })
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if(token && userId){
            dispatch(sessionActions.login({token, userId}));
            navigate("/home");
        }
    },[dispatch, navigate]);
    
    return (
        <Container>
            <HeaderMessage message={'Para continuar navegando de forma segura, efetue o login.'} />
    
            <div className="login-page-info_form">
                <h2 className="login-page-info_title">Login</h2>
                
                <form>
                    <Input 
                        placeholder="Usuário"
                        value={user}
                        onChange={v => setUser(v.target.value)}
                        icon={User}
                        error={userError}
                        errorMessage={genericalError ? null : "Usuário inválido"}
                        />
                    <Input 
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={v => setPassword(v.target.value)}
                        icon={Lock1}
                        error={passwordError}
                        errorMessage={genericalError || "Senha inválida"}
                    />
                    <Button
                        onClick={handleLogin}
                        loading={loading}
                    >
                        Entrar
                    </Button>
                </form>

                <div className="login-page-info_register">
                    <p>Novo por aqui?</p><Link to="/register">Registre-se</Link>
                </div>
            </div>
        </Container>
    );
}

export default Login;