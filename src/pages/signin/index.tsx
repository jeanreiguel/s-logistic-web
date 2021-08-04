import React, { useCallback, useRef, useContext } from "react";
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'
import { Container, Content, Background } from './style'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from '@unform/web'

import getValidationErrors from "../../utils/getValidationErrors";
import { FormHandles } from "@unform/core";
import * as Yup from 'yup'
import { useAuth } from "../../hooks/Auth";
import { useToast } from "../../hooks/toast"

interface FormData {
    email: string;
    senha: string;
}
const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();
    const handleSubmit = useCallback(async (data: FormData) => {

        try {
            formRef.current?.setErrors({});
            console.log(data.senha)
            console.log(data.email)
            const schema = Yup.object().shape({
                email: Yup.string()
                .required('E-mail obrigatório')
                .email('Informe um e-mail válido'),
                senha: Yup.string()
                .required("Senha obrigatória"),
            });
    
            await schema.validate(data, {
                abortEarly: false,
            });

            signIn({
                email: data.email,
                senha: data.senha
            });
        } catch(e) {
            const errors = getValidationErrors(e);

            formRef.current?.setErrors(errors);

            addToast({
                type: 'error',
                title: 'Erro de autenticação',
                description: 'Ocorreu um erro ao fazer login, verifique suas credenciais.',
            })
        }

        
    },[ signIn, addToast ]);

    return (

    <Container>
        <Content>
            <Form ref={ formRef } onSubmit={ handleSubmit }>
                <h1>Faça seu login</h1>

                <Input icon={ FiMail } name="email" placeholder="E-mail" />
                <Input icon={ FiLock} name="senha" type="password" placeholder="Senha" />

                <Button type="submit"> Entrar </Button>

                <a href="teste">Esqueci minha senha</a>
            </Form>

            <a href="teste"><FiLogIn/> Criar Conta</a>
        </Content>
        <Background/>

    </Container>
    );
};
export default SignIn;