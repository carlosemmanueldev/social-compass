import Input from "../../components/Inputs/Input.tsx";
import Container from "../../components/Container/Container.tsx";
import Button from "../../components/Button/Button";
import HeaderMessage from "../../components/HeaderMessage/HeaderMessage.tsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import {User, Lock1, Calendar1, FingerCricle, ShieldTick, Sms} from "iconsax-react";

interface UserProps {
    name: string;
    username: string;
    birth: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function Register() {
    const [user, setUser] = useState(
        { name: '', username: '', birth: '', email: '', password: '', confirmPassword: '' } as UserProps)
    const [userError, setUserError] = useState(false);


    return (
        <Container>
            <HeaderMessage message={'Por favor, registre-se para continuar.'} />
    
            <div className="login-page-info_form">
                <h2 className="login-page-info_title">Cadastro</h2>
                
                <form>
                    <Input 
                        placeholder="Nome"
                        value={user.name}
                        onChange={v => setUser(prevState => ({ ...prevState, name: v.target.value }))}
                        icon={User}
                        error={userError}
                    />

                    <Input 
                        placeholder="Usuário"
                        value={user.username}
                        onChange={v => setUser(prevState => ({ ...prevState, username: v.target.value }))}
                        icon={FingerCricle}
                        error={userError}
                    />

                    <Input 
                        placeholder="Nascimento"
                        value={user.birth}
                        onChange={v => setUser(prevState => ({ ...prevState, birth: v.target.value }))}
                        icon={Calendar1}
                        error={userError}
                    />

                    <Input 
                        placeholder="Email"
                        value={user.email}
                        onChange={v => setUser(prevState => ({ ...prevState, email: v.target.value }))}
                        icon={Sms}
                        error={userError}
                    />

                    <Input 
                        placeholder="Senha"
                        type="password"
                        value={user.password}
                        onChange={v => setUser(prevState => ({ ...prevState, password: v.target.value }))}
                        icon={Lock1}
                        error={userError}
                    />

                    <Input 
                        placeholder="Confirmar Senha"
                        type="password"
                        value={user.confirmPassword}
                        onChange={v => setUser(prevState => ({ ...prevState, confirmPassword: v.target.value }))}
                        icon={ShieldTick}
                        error={userError}
                    />

                    <Button 
                        onClick={()=>alert("aaaaa")}
                    >
                        Registrar-se
                    </Button>
                </form>

                <div className="login-page-info_register">
                    <p>Já possui uma conta?</p><Link to="/">Faça Login</Link>
                </div>
            </div>
        </Container>
    );
}

export default Register;