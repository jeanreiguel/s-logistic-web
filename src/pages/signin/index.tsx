import React from "react";
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'
import { Container, Content, Background } from './style'
import Input from "../../components/Input";
import Button from "../../components/Button";
const SingIn: React.FC = () => (
    <Container>
        <Content>
            <form action="">
                <h1>Faça seu login</h1>

                <Input icon={ FiMail } name="email" placeholder="E-mail" />
                <Input icon={ FiLock} name="password" type="password" placeholder="Senha" />

                <Button type="submit"> Entrar </Button>

                <a href="teste">Esqueci minha senha</a>
            </form>

            <a href="teste"><FiLogIn/> Criar Conta</a>
        </Content>
        <Background/>

    </Container>
);
export default SingIn;