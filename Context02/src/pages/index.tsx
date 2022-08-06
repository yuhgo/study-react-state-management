import type { NextPage } from "next";
import { Todo } from "../types";
import { Dispatch, SetStateAction, useContext } from "react";
import { TodoContext } from "./_app";

const Home: NextPage = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const toggleIsDone = (id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      <h3>TODO一覧</h3>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label
              style={{
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => toggleIsDone(todo.id)}
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
