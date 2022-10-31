import { useState, KeyboardEvent } from "react";

import * as C from "./styles";

type Prop = {
  onEnter: (taskName: string) => void;
};

const AddTodo = ({ onEnter }: Prop) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText); // Vai inserir
      setInputText(""); // Vai limpar
    }
  };

  return (
    <C.Container>
      <div className="image">✛</div>
      <input
        type="text"
        name=""
        placeholder="Adicione uma tarefa..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};

export default AddTodo;
