import type { NextPage } from "next";
import { useStore } from "../state/todo";

const Home: NextPage = () => {
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);

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
                onChange={() => toggleTodo(todo.id)}
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
