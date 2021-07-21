import React from "react";
import { FiLogIn } from 'react-icons/fi'
import { Container, Content, Background } from './style'
import Input from "../../components/Input";

const SingIn: React.FC = () => (
    <Container>
        <Content>
            <form action="">
                <h1>Faça seu login</h1>

                <Input name="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Senha" />

                <button type="submit"> Entrar </button>

                <a href="teste">Esqueci minha senha</a>
            </form>

            <a href="teste"><FiLogIn/> Criar Conta</a>
        </Content>
        <Background/>

    </Container>
);
export default SingIn;