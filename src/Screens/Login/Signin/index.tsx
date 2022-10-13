import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import thumbnail from "../../../images/thumbnail.jpg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";
import { toast } from "react-toastify";

// Função nativa do material ui que vai gerar um component informando a empresa e o Copyright
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.bagaggio.com.br">
        BAGAGGIO
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
//

const theme = createTheme();

export default function SignInSide() {
  const [login, setLogin] = React.useState(""); // State do login
  const [password, setPassword] = React.useState(""); // state da senha
  const [err, setErr] = React.useState(""); // State das mensagens de erro da aplicação

  const navigate = useNavigate(); // Função nativa do react-router-dom para trabalhar com rotas

  // Obtendo as informações por contexto do AuthContext
  const { signin, status, message } = React.useContext(AuthContext);

  // Função para enviar os dados para API
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Guardando na variável que esta vindo da API
    let user = login;
    let pass = password;
    //

    // Verifico se o campo de login foi preenchido
    if (!login) {
      toast.error("Por favor, insira ao menos um login.");
      return;
    }
    //

    // Verifico se o campo de senha foi preenchido
    if (!password) {
      toast.error("Por favor, insira ao menos uma senha.");
      return;
    }
    //

    // Verifico se login e senha estão preenchidos
    if (login && password) {
      // Chamo o signin do meu contexto e passo os valores das variáveis que estão recebendo
      // de login e password
      signin(user, pass);
      //

      // Verifico o status da resposta do servidor
      if (status === "true") {
        // sendo "true", levo o usuário para a página inicial do sistema
        return navigate("/");
      }

      // // Caso seja false
      // if (status === "false") {
      // }
      // //
    }
    //
  };

  // ---------------- Efeitos colaterais
  React.useEffect(() => {
    console.log(err);
    // Verifico se a mensagem esta como senha Atualizada
    if (message === "Senha Atualizada") {
      setErr(""); // Na intenção de limpar o "Senha Atualizada vindo do resultado do registrar uma nova senha"
      return;
    }
    //

    // Verifico se a mensagem esta como Usuário inexistente
    if (message === "Usuario Inexistente" && status === "false") {
      // setErr("Usuário não encontrado!"); -> testing
      toast.error("Usuário inexistente!");
      return;
    }
    //

    // Verifico se a mensagem está como senha inválida
    if (message === "Senha Invalida") {
      toast.error(message);
      // seto no state error a mensagem vindo do servidor, mas paddando um novo valor
      // setErr("Senha incorreta"); -> testing
      return; // return para parar o fluxo de leitura do código
    }
    //

    //  Verifico se a mensagem esta como Esqueceu a senha
    if (message === "Esqueceu Senha") {
      // Mensagem para orientar o usuário para que ele deve ir até o e-mail e pegar a senha temporária
      toast(
        "Você está em um proceso de redefinição de senha. Será redirecionado para a tela de esqueci minha senha."
      );

      // Um time de 5s para que o usuário possa ler a mensagem de cima.
      setTimeout(() => {
        // Levo o usuário para a tela onde ele terá que informar o usuário e o celular
        navigate("/forgot-pass");
      }, 5000); // 5000 milissegundos === 5 segundos
    }
    //

    //  Verifico se a mensagem esta como Primeiro login
    if (message === "Primeiro Login") {
      toast(
        "Você será levado para uma página de atualização de senha por conta do seu primeiro login no sistema."
      );

      // Um time de 5s para que o usuário possa ler a mensagem de cima.
      setTimeout(() => {
        // Levo o usuário para a tela onde ele terá que informar o usuário e o celular
        navigate("/firstlogin");
      }, 5000); // 5000 milissegundos === 5 segundos
      //
    }
    //
  }, [message, status, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${thumbnail})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
                autoFocus
                value={login}
                onChange={(e) => [setLogin(e.target.value)]}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => [setPassword(e.target.value)]}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Relembrar-me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-pass" variant="body2">
                    Esqueceu sua senha?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
