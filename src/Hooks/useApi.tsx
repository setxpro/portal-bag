import axios from "axios";

const uri = axios.create({
  baseURL: "http://187.0.198.166:1259/rest",
});

export const useApi = () => ({
  signin: async (user: string, pass: string) => {
    const { data } = await uri.post("/PSSLOGIN", { user, pass });
    return data;
  },
  forgotPassword: async (user: string, number: string) => {
    const { data } = await uri.post("/PssEsqLg", { user, number });
    return data;
  },
  updatePassword: async (user: string, passEmail: string, newPass: string) => {
    const { data } = await uri.post("/PssAtuEsq", { user, passEmail, newPass });
    return data;
  },
});
