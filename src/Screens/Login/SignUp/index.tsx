import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const theme = createTheme();

export default function SignUp() {
  const [login, setLogin] = React.useState("");
  const [passwordEmail, setEmailPassword] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");

  const { updatePassword, setMessage } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!login) {
      toast.error("Insira ao menos um nome.");
      return;
    }
    if (!passwordEmail) {
      toast.error(
        "Por favor, insira a senha que foi enviada para o seu e-mail."
      );
      return;
    }
    if (!newPass) {
      toast.error("Insira ao menos uma nova senha.");
      return;
    }
    if (!confirmPass) {
      toast.error("Insira a confirmação da nova senha.");
      return;
    }
    if (newPass !== confirmPass) {
      toast.error("As senhas não são iguais.");
      return;
    }

    let user = login;
    let passEmail = passwordEmail;

    if (login && passwordEmail && newPass && confirmPass) {
      const data = await updatePassword(user, passEmail, newPass);

      let status = data[0].STATUS;
      let messageG = data[0].MESSAGE;

      if (status === "true") {
        setMessage("");
        toast("Senha atualizada com sucesso!");
        navigate("/");
      }

      if (messageG === "Usuario Inexistente") {
        toast.error("Usuário não encontrado!");
        return;
      }

      if (messageG === "Senha Inavalida") {
        toast.error("A senha do e-mail é inválida!");
        return;
      }
    }

    return;
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
            variant="h5"
            sx={{
              marginTop: 3,
            }}
          >
            Atualizar Senha
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            sx={{
              marginTop: 3,
            }}
          ></Typography>
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
                  onChange={(e) => setLogin(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordEmail"
                  label="Senha enviada para o E-mail"
                  type="password"
                  id="passwordEmail"
                  autoComplete="passwordEmail"
                  value={passwordEmail}
                  onChange={(e) => setEmailPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="newPassword"
                  label="Nova Senha"
                  type="password"
                  id="newPassword"
                  autoComplete="new-password"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmNewpassword"
                  label="Repitir nova senha"
                  type="password"
                  id="confirmNewpassword"
                  autoComplete="confirmNewpassword"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar nova senha
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
