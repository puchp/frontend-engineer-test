import Head from "next/head";
import styles from "../styles/Home.module.css";
import Calculator from "../components/Calculator";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Calculator</title>
        <meta name="description" content="Product Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Calculator />
    </div>
  );
}
