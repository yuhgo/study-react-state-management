import { FC, ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
