import { useContext } from "react";
import { AuthContext } from "../Contexts/Auth/AuthContext";
import SignInSide from "../Screens/Login/Signin";
import { ChildrenJsxElement } from "../Types/ChildrenProps";

const SecurityRoutes = ({ children }: ChildrenJsxElement) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <SignInSide />;
  }
  return children;
};

export default SecurityRoutes;
