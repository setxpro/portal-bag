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
import { Error } from "../../../Components/Messages/Error";

import thumbnail from "../../../images/thumbnail.jpg";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";

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

const theme = createTheme();

export default function SignInSide() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState("");

  const navigate = useNavigate();
  const { signin, status, message } = React.useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let user = login;
    let pass = password;

    if (!login) {
      setErr("Por favor, insira ao menos um login.");
      return;
    }

    if (!password) {
      setErr("Por favor, insira ao menos uma senha.");
      return;
    }

    if (login && password) {
      signin(user, pass);
      if (status === "true") {
        // toast(`Seja bem-vindo!`);
        return navigate("/");
      }
    }
  };

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
            <Typography component="h1" variant="h5">
              <Error error={message} />
              <Error error={err} />
            </Typography>
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
                onChange={(e) => [setLogin(e.target.value), setErr("")]}
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
                onChange={(e) => [setPassword(e.target.value), setErr("")]}
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
