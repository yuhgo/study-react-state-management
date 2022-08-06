import type { NextPage } from "next";
import { useTodos, useTodosDispatch } from "../state/todo";

const Home: NextPage = () => {
  const todos = useTodos();
  const { toggleIsDone } = useTodosDispatch();

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
