import Head from "next/head";
import Typed from "react-typed";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "./Portfolio.module.scss";
import vintedBanner from "../../assets/img/vinted.png";

export default function Portfolio() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My portfolio - Julien Allard</title>
      </Head>
      <div className={styles.container}>
        <header>
          <h1>
            <Typed
              strings={["WELCOME TO MY PORTFOLIO"]}
              typeSpeed={50}
              backSpeed={50}
            />
          </h1>
        </header>
        <Navbar />
        <main>
          <article>
            <div className={styles.projectPrev}>
              <h3>FILE #1 / CODENAME VINTED</h3>
              <Image src={vintedBanner} layout="responsive" />
            </div>
            <div className={styles.projectDescription}>
              <ul>
                <li>
                  <span>NAME</span>
                  <span>Vinted Clone</span>
                </li>
                <li>
                  <span>TYPE</span>
                  <span>Fullstack</span>
                </li>
                <li>
                  <span>STATUS</span>
                  <span className={styles.ready}>READY</span>
                </li>
                <li>
                  <span>INFO</span>
                  <span>
                    A fullstack Vinted Clone made with React. You can check
                    offers, search via searchbar/filter buy with Stripe, create
                    an account (hash password), create new offers. Everything is
                    safely stored on my database. Cookies management.
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
