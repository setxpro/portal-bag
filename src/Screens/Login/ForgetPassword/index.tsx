import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Error } from "../../../Components/Messages/Error";
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
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ForgetPassword() {
  const navigate = useNavigate();
  const { forgotPassword, message, status } = React.useContext(AuthContext);

  const [login, setLogin] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [err, setErr] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let user = login;
    let number = phone;

    if (!login) {
      setErr("Por favor, insira ao menos um login.");
      return;
    }

    if (!phone) {
      setErr("Por favor, insira ao menos um numero de telefone.");
      return;
    }

    if (login && phone) {
      const data = await forgotPassword(user, number);

      if (data[0].STATUS === "true") {
        navigate("/update-pass");
      }

      if (message === "Senha Enviado para Email") {
        navigate("/update-pass");
      }
      return;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              marginTop: 8,
            }}
          >
            Esqueci minha senha
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            sx={{
              marginTop: 1,
            }}
          >
            <Error error={message} />
            <Error error={err} />
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="login"
                  label="Usuário"
                  name="login"
                  autoComplete="login"
                  value={login}
                  onChange={(e) => [setLogin(e.target.value), setErr("")]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Celular"
                  type="phone"
                  id="phone"
                  autoComplete="new-phone"
                  value={phone}
                  onChange={(e) => [setPhone(e.target.value), setErr("")]}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid item sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Enviar
                </Button>
              </Grid>
              <Grid item sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, marginLeft: 5 }}
                  color="inherit"
                  onClick={() => navigate(-1)}
                >
                  Voltar
                </Button>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
