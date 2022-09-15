import React, { useCallback }from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import logoImg from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";
import * as Yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => {
    const handleSubmit = useCallback(async (data: object) => {
        try {
          const schema = Yup.object().shape({
            name: Yup.string().required('Nome é obrigatório'),
            email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
            password: Yup.string().min(6, 'No mínimo 6 dígitos')
          });
          await schema.validate(data, {
            abortEarly: false,
          });
        } catch (error) {
          console.log(error);
        }
    }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
