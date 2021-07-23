import React from "react";
import { FiArrowLeft, FiLock, FiUser } from 'react-icons/fi'
import { Container, Content, Background } from './style'
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => (
    <Container>
        <Background/>

        <Content>
            <form action="">
                <h1>Faça seu cadastro</h1>

                <Input icon={ FiUser } name="email" placeholder="E-mail" />
                <Input icon={ FiLock } name="password" type="password" placeholder="Senha" />

                <Button type="submit"> Cadastrar </Button>
            </form>

            <a href="teste"><FiArrowLeft/> Voltar para o login</a>
        </Content>
    </Container>
);
export default SignUp;