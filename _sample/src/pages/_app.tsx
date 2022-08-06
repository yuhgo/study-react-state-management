import type { AppProps } from "next/app";
import { useState } from "react";
import { Todo } from "../types";
import { Layout } from "./components/Layout";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <>
      <Layout todoCount={todos.length}>
        <Component {...pageProps} todos={todos} setTodos={setTodos} />
      </Layout>
    </>
  );
};

export default MyApp;
