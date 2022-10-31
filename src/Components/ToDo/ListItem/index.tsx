import { useState, memo } from "react";
import { TodoTypes } from "../../../Types/TodoTypes";

import * as C from "./styles";
import { useTheme } from "./../../../Hooks/useTheme";

// indicar a to-do que será recebido
type Props = {
  item: TodoTypes;
  removeItem: (id: number) => void;
};

const ListItem = ({ item, removeItem }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  const { theme } = useTheme();

  return (
    //passando o elemento done para dentro do container
    <C.Container theme={theme} done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
      <C.TrashIcon onClick={() => removeItem(item.id)} />
    </C.Container>
  );
};

export default memo(ListItem);
