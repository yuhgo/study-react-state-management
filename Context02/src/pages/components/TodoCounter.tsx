import { FC, useContext } from "react";
import { TodoContext } from "../_app";

export const TodoCounter: FC = () => {
  const { todos } = useContext(TodoContext);

  console.log(todos);

  return <h2>TODO: {todos.length}件</h2>;
};
