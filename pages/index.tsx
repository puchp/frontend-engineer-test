import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap-utilities/bootstrap-utilities.css";

import Calculator from "../components/Calculator";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Calculator</title>
        <meta name="description" content="Product Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Calculator />
      </MuiPickersUtilsProvider>
    </div>
  );
}
