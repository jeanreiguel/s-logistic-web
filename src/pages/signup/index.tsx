import React, { useRef } from "react";
import { FiArrowLeft, FiLock, FiUser } from 'react-icons/fi'
import { Container, Content, Background } from './style'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { useCallback } from "react";

const SignUp: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback((data: Object): void => {
        console.log(data);
    },[]);

    return (
        <Container>
            <Background/>

            <Content>
                <Form 
                ref={formRef} 
                onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input icon={ FiUser } name="email" placeholder="E-mail" />
                    <Input icon={ FiLock } name="password" type="password" placeholder="Senha" />

                    <Button type="submit"> Cadastrar </Button>
                </Form>

                <a href="teste"><FiArrowLeft/> Voltar para o login</a>
            </Content>
        </Container>
    )};
export default SignUp;