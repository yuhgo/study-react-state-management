import type { AppProps } from "next/app";
import { Layout } from "./components/Layout";
import { TodosProvider } from "../state/todo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <TodosProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodosProvider>
  );
};

export default MyApp;
