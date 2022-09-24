import {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";

import { TableProps } from "../../Types/TableProps";
import { ChildrenReactNode } from "../../Types/ChildrenProps";
import { AuthContext } from "./../Auth/AuthContext";

interface Props {
  titles: TableProps[];
}

export const AllInfoByTableContext = createContext({} as Props);

export const AllInfoByTableProvider = ({ children }: ChildrenReactNode) => {
  const [titles, setTitles] = useState<TableProps[]>([]);
  const { user, getAllTable } = useContext(AuthContext);

  const getAllInfo = useCallback(async () => {
    const data = await getAllTable(`${user?.ID}`);
    setTitles([data]);
  }, []);

  useEffect(() => {
    getAllInfo();
  }, [getAllInfo]);
};
