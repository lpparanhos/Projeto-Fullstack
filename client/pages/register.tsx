import Head from "next/head";
import HeaderGeneric from "../src/components/common/headerGeneric";
import Footer from "../src/components/common/footer";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import authService from "../src/services/authService";
import ToastComponent from "../src/components/common/toast";
import styles from "../styles/registerLogin.module.scss";

const Register = function () {
  const router = useRouter();
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("unidev-token")) {
      router.push("/home");
    }
  }, []);

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName")!.toString();
    const lastName = formData.get("lastName")!.toString();
    const phone = formData.get("phone")!.toString();
    const birth = formData.get("birth")!.toString();
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const confirmPassword = formData.get("confirmPassword")!.toString();
    const params = { firstName, lastName, phone, birth, email, password };

    if (password != confirmPassword) {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage("As senhas não são iguais. Tente novamente.");

      return;
    }

    const { data, status } = await authService.register(params);

    if (status === 201) {
      router.push("/login?registered=true");
    } else {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage(data.message);
    }
  };

  return (
    <>
      <Head>
        <title>Unidev - Registro</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <script src="https://jsuites.net/v4/jsuites.js"></script>
      </Head>

      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Já possuo uma conta"
        />
        <Container className="py-5">
          <p className={styles.formTitle}>
            <strong>Bem-vindo(a)!</strong>
          </p>
          <Form className={styles.form} onSubmit={handleRegister}>
            <p className="text-center h2">
              <strong>Crie sua conta</strong>{" "}
            </p>
            {/* name */}
            <FormGroup>
              <Label for="firstName" className={styles.label}>
                NOME
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Digite o seu nome"
                required
                maxLength={20}
                className={styles.inputName}
              />
            </FormGroup>
            {/* last name */}
            <FormGroup>
              <Label for="lastName" className={styles.label}>
                SOBRENOME
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Digite o seu sobrenome"
                required
                maxLength={20}
                className={styles.inputName}
              />
            </FormGroup>
            {/* phone */}
            <FormGroup>
              <Label for="phone" className={styles.label}>
                CELULAR
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(xx) 9xxxx-xxxx"
                data-mask="[-]+55 (00) 00000-0000"
                required
                className={styles.input}
              />
            </FormGroup>
            {/* email */}
            <FormGroup>
              <Label for="email" className={styles.label}>
                EMAIL
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="exemplo@email.com"
                required
                className={styles.input}
              />
            </FormGroup>
            {/* birth */}
            <FormGroup>
              <Label for="birth" className={styles.label}>
                DATA DE NASCIMENTO
              </Label>
              <Input
                id="birth"
                name="birth"
                type="date"
                min="1930-01-01"
                max="2020-12-31"
                required
                className={styles.input}
              />
            </FormGroup>
            {/* password */}
            <FormGroup>
              <Label for="password" className={styles.label}>
                SENHA
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Digite a sua senha (Min: 6 | Max: 20)"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            {/* confirm password */}
            <FormGroup>
              <Label for="confirmPassword" className={styles.label}>
                CONFIRME SUA SENHA
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme a sua senha"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
              CADASTRAR
            </Button>
          </Form>
        </Container>
        <Footer />
        <ToastComponent
          color="bg-danger"
          isOpen={toastIsOpen}
          message={toastMessage}
        />
      </main>
    </>
  );
};

export default Register;
