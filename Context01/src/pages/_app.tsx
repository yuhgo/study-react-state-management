import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { Todo } from "../types";
import { Layout } from "./components/Layout";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const ThemeContext = createContext("light");
export const LangContext = createContext("ja");

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ja");

  return (
    <ThemeContext.Provider value={theme}>
      <LangContext.Provider value={lang}>
        <Layout todoCount={todos.length}>
          <button
            onClick={() => {
              setTheme((prev) => (prev === "dark" ? "light" : "dark"));
              setLang((prev) => (prev === "ja" ? "en" : "ja"));
            }}
          >
            切り替え
          </button>
          <Component {...pageProps} todos={todos} setTodos={setTodos} />
        </Layout>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MyApp;
