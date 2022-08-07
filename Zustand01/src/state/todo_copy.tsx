import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Todo } from "../types";

type Props = {
  children: ReactNode;
};

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const TodosContext = createContext(TODOS);

export const TodosDispatchContext = createContext<{
  toggleIsDone: (id: Todo["id"]) => void;
  addTodo: (text: Todo["text"]) => void;
}>({
  toggleIsDone: () => {
    throw Error("No default value!");
  },
  addTodo: () => {
    throw Error("No default value!");
  },
});

export const TodosProvider: FC<Props> = (props) => {
  const { children } = props;

  const [todos, setTodos] = useState<Todo[]>(TODOS);

  const addTodo = useCallback((text: Todo["text"]) => {
    setTodos((prevTodos) => {
      const newTodos = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodos];
    });
  }, []);

  const toggleIsDone = useCallback((id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  }, []);

  const todosDispatchValue = useMemo(() => {
    return { addTodo, toggleIsDone };
  }, [addTodo, toggleIsDone]);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={todosDispatchValue}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
};

export const useTodosDispatch = () => {
  return useContext(TodosDispatchContext);
};
