import { User } from "../../Types/User";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ChildrenReactNode } from "../../Types/ChildrenProps";
import { useApi } from "../../Hooks/useApi";

type AuthContextType = {
  user: User | null;
  signin: (user: string, password: string) => Promise<boolean>;
  forgotPassword: (user: string, number: string) => Promise<any>;
  updatePassword: (
    user: string,
    passEmail: string,
    newPass: string
  ) => Promise<any>;
  firstLogin: (user: string, pass: string, newPass: string) => Promise<any>;
  getAllTable: (id: string) => Promise<any>;
  signout: () => void;
  setMessage: Dispatch<SetStateAction<string>>;
  status: string;
  message: string;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: ChildrenReactNode) => {
  const api = useApi();

  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState(""); // Setar o status vindo do servidor
  const [loading, setLoading] = useState(false); // Vai pegar o loading como true na requisição
  const [message, setMessage] = useState(""); // Vai setar a mensagem do servidor

  const signin = async (user: string, pass: string) => {
    const data = await api.signin(user, pass);

    // Verifica se existe um usuário pelo STATUS
    if (data[0].STATUS === "true") {
      // Cancela o loading caso exista um usuário
      setLoading(false);
      // Seta esse usuário no STATE "user"
      setUser(data[0]);
      // Seta o valor do STATUS em um estado "status"
      //para que seja feita outras verificações
      setStatus(data[0].STATUS);

      // Salva o usuário no LocalStorage para que ele mantenha logado
      setLocalStorage(data[0]);

      setMessage(data[0].MESSAGE);

      // timeUserLogged(); // Executo o time do usuário com 20 minutos de atividade no sistema

      // Retorno final como true
      return true;
    }
    // Caso não aja ussuário logado
    if (data[0].STATUS === "false") {
      // Setar o valor do status em um state

      setStatus(data[0].STATUS);
      // Cancela o loading
      setMessage(data[0].MESSAGE);
      setLoading(false);
    }
    return false;
  };

  // Função para fazer logout
  const signout = async () => {
    setMessage("");
    // Seta o usuário como nulo
    setUser(null);
    // Reseta o localStorage
    setLocalStorage("");
  };

  // salvando no lovalStorage
  const setLocalStorage = (user: string) => {
    // Vai no localStorage e seta na variável "auth" um usuário como OBJECT JSON
    localStorage.setItem("auth-bag", JSON.stringify(user));
  };

  // Persistindo o usuário logado no portal
  useEffect(() => {
    const isLoggedUser = localStorage.getItem("auth-bag"); // Busca um item no localStorage cuja chave "auth"
    if (isLoggedUser) {
      // Verifica se tem algum usuário setado no localStorage
      const foundUser = JSON.parse(isLoggedUser);
      // Seta esse usuário no STATE
      setUser(foundUser);
    }
  }, []);

  const forgotPassword = async (user: string, number: string) => {
    const data = await api.forgotPassword(user, number);
    return data;
  };
  const updatePassword = async (
    user: string,
    passEmail: string,
    newPass: string
  ) => {
    const data = await api.updatePassword(user, passEmail, newPass);
    return data;
  };
  const firstLogin = async (user: string, pass: string, newPass: string) => {
    const data = await api.firstLogin(user, pass, newPass);
    return data;
  };

  const getAllTable = async (id: string) => {
    const data = await api.getAllTable(id);
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        status,
        message,
        loading,
        signin,
        signout,
        forgotPassword,
        updatePassword,
        firstLogin,
        getAllTable,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
