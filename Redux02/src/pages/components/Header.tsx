import { FC } from "react";
import Link from "next/link";
import { TodoCounter } from "./TodoCounter";

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>React状態管理</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>TODO一覧</a>
            </Link>
          </li>
          <li>
            <Link href="/add">
              <a>TODO追加</a>
            </Link>
          </li>
        </ul>
      </nav>

      <TodoCounter />
    </header>
  );
};
