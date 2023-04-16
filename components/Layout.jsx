import Header from "./Header";
import { Inter } from "next/font/google";
import Head from "next/head";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const Main = styled.main`
  padding: var(--layout-padding);
`;
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Podcaster</title>
        <meta name="description" content="Listen your favorites podcats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className={inter.className} />
      <Main className={inter.className}>{children}</Main>
    </>
  );
};

export default Layout;
