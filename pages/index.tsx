import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Introduce My CV</title>
        <meta name="description" content="Introduct My CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button variant="contained" color="secondary">
        Tim
      </Button>
    </div>
  );
};

export default Home;
