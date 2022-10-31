import { useState, useEffect } from "react";
import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
import { Title } from "../../Components/Page/Title";
import AddTodo from "../../Components/ToDo/AddTodo";
import { TodoTypes } from "../../Types/TodoTypes";
import * as C from "./styles";
import ListItem from "./../../Components/ToDo/ListItem/index";

const Todo = () => {
  //dentro do State eu vou ter um Array de itens ..... <Item>[]
  const [list, setList] = useState<TodoTypes[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list]; // clonar a lista
    newList.push({
      id: list.length + 1, // pega o ultimo e acrescenta + 1
      name: taskName,
      done: false,
    }); //adicionar um item novo
    setStorageData(JSON.stringify(newList));
    setList(newList); // Update to list
  };

  const setStorageData = (todoAdm: string) => {
    const storageDb = localStorage.setItem("toto-admin", todoAdm);
    return storageDb;
  };

  useEffect(() => {
    const getTodo = localStorage.getItem("toto-admin"); // Busca um item no localStorage cuja chave "auth"
    if (getTodo) {
      const foundTodo = JSON.parse(getTodo);
      setList(foundTodo);
    }
  }, []);

  const removeItem = (id: number) => {
    let removeTodo = list.filter((i) => i.id !== id);
    setList(removeTodo);
    setStorageData("");
  };

  return (
    <LayoutScreen>
      <Title title="Lista de Tarefas" />
      <Content>
        <C.Container>
          {/** Area de Adicionar uma nova tarefa */}
          <AddTodo onEnter={handleAddTask} />

          {/** Lista de Tarefas */}
          {list.map((todo, indice) => (
            <ListItem key={indice} item={todo} removeItem={removeItem} />
          ))}
        </C.Container>
      </Content>
    </LayoutScreen>
  );
};

export default Todo;
