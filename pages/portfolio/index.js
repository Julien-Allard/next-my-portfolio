import Head from "next/head";
import Typed from "react-typed";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "./Portfolio.module.scss";
import vintedBanner from "../../assets/img/vinted.png";
import marveactBanner from "../../assets/img/marveact.png";
import flemmeBanner from "../../assets/img/flemme.PNG";
import simpleFormBanner from "../../assets/img/simpleform.png";
import deliverooBanner from "../../assets/img/deliveroo.png";

export default function Portfolio() {
  return (
    <>
      <Head>
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
            <div className={styles.projectContainer}>
              <div className={styles.projectPrev}>
                <h3>FILE #1 / CODENAME VINTED</h3>
                <Image
                  src={vintedBanner}
                  layout="responsive"
                  placeholder="blur"
                  width="320"
                  height="165"
                  alt="Vinted Clone banner"
                />
              </div>
              <div className={styles.projectDescription}>
                <ul>
                  <li>
                    <span>NAME</span>
                    <span>Vinted Clone</span>
                  </li>
                  <li>
                    <span>TYPE</span>
                    <span>Fullstack / React / Node.js</span>
                  </li>
                  <li>
                    <span>STATUS</span>
                    <span className={styles.ready}>READY</span>
                  </li>
                  <li>
                    <span>INFO</span>
                    <span>
                      A fullstack Vinted Clone made with React and Node.js. You
                      can check offers, search via searchbar/filter, buy with
                      Stripe, create an account (hash password), create new
                      offers. Everything is safely stored on my database.
                      Cookies management.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.linksContainer}>
              <a
                href="https://react-vinted-clone-julalldev.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                TEST
              </a>
              <a
                href="https://github.com/Julien-Allard/react-vinted-clone"
                target="_blank"
                rel="noreferrer"
              >
                FRONT CODE
              </a>
              <a
                href="https://github.com/Julien-Allard/Vinted-Le-Reacteur"
                target="_blank"
                rel="noreferrer"
              >
                BACK CODE
              </a>
            </div>
          </article>
          <article>
            <div className={styles.projectContainer}>
              <div className={styles.projectPrev}>
                <h3>FILE #2 / CODENAME MARVEACT</h3>
                <Image
                  src={marveactBanner}
                  layout="responsive"
                  placeholder="blur"
                  width="320"
                  height="165"
                  alt="Marveact banner"
                />
              </div>
              <div className={styles.projectDescription}>
                <ul>
                  <li>
                    <span>NAME</span>
                    <span>Marveact</span>
                  </li>
                  <li>
                    <span>TYPE</span>
                    <span>Fullstack / React / Node.js</span>
                  </li>
                  <li>
                    <span>STATUS</span>
                    <span className={styles.ready}>READY</span>
                  </li>
                  <li>
                    <span>INFO</span>
                    <span>
                      An original fullstack Marvel project made with React and
                      Node.js. Consult a Marvel heroes/vilains/comics database,
                      put them in your favourites (local storage), and make your
                      own universe in a nice and responsive UI inspired but
                      numerous Marvel sources.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.linksContainer}>
              <a
                href="https://marveact-julalldev.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                TEST
              </a>
              <a
                href="https://github.com/Julien-Allard/react-marvel-app"
                target="_blank"
                rel="noreferrer"
              >
                FRONT CODE
              </a>
              <a
                href="https://github.com/Julien-Allard/express-marvel-app"
                target="_blank"
                rel="noreferrer"
              >
                BACK CODE
              </a>
            </div>
          </article>
          <article>
            <div className={styles.projectContainer}>
              <div className={styles.projectPrev}>
                <h3>FILE #3 / CODENAME FLEMME</h3>
                <Image
                  src={flemmeBanner}
                  layout="responsive"
                  width="320"
                  height="165"
                  alt="Flemme banner"
                />
              </div>
              <div className={styles.projectDescription}>
                <ul>
                  <li>
                    <span>NAME</span>
                    <span>Flemme</span>
                  </li>
                  <li>
                    <span>TYPE</span>
                    <span>Fullstack / React / Node.js / Forest Admin</span>
                  </li>
                  <li>
                    <span>STATUS</span>
                    <span className={styles.ready}>MVP</span>
                  </li>
                  <li>
                    <span>INFO</span>
                    <span>
                      A fullstack MVP made for the Flemme startup. Register at a
                      restaurant table, order, pay for any of your or other
                      people&apos;s orders at the table. Anybody can join and
                      pay at any moment, orders are updated in (near) realtime.
                      Download your receipt.
                      <br />
                      Team : Nicolas Guérineau (lead), Johann Pouponnot
                      (PO/dev), Gabriel Brandao (dev), Julien Allard (dev)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.linksContainer}>
              <a
                href="https://youtu.be/eGpPDp99VR8"
                target="_blank"
                rel="noreferrer"
              >
                DEMO #1
              </a>
              <a
                href="https://youtu.be/7pGDnbgZkyw"
                target="_blank"
                rel="noreferrer"
              >
                DEMO #2
              </a>
            </div>
          </article>
          <article>
            <div className={styles.projectContainer}>
              <div className={styles.projectPrev}>
                <h3>FILE #2 / CODENAME FORM</h3>
                <Image
                  src={simpleFormBanner}
                  layout="responsive"
                  placeholder="blur"
                  width="320"
                  height="165"
                  alt="Contact Form banner"
                />
              </div>
              <div className={styles.projectDescription}>
                <ul>
                  <li>
                    <span>NAME</span>
                    <span>Contact Form</span>
                  </li>
                  <li>
                    <span>TYPE</span>
                    <span>Fullstack / HTML / JavaScript / Mailgun</span>
                  </li>
                  <li>
                    <span>STATUS</span>
                    <span className={styles.ready}>READY</span>
                  </li>
                  <li>
                    <span>INFO</span>
                    <span>
                      A simple contact form. Fill the different fields of the
                      form and confirm to send me an email containing all datas
                      directly in my mailbox via Mailgun.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.linksContainer}>
              <a
                href="https://simple-contact-form-julalldev.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                TEST
              </a>
              <a
                href="https://github.com/Julien-Allard/contact-form-front"
                target="_blank"
                rel="noreferrer"
              >
                FRONT CODE
              </a>
              <a
                href="https://github.com/Julien-Allard/contact-form-back"
                target="_blank"
                rel="noreferrer"
              >
                BACK CODE
              </a>
            </div>
          </article>
          <article>
            <div className={styles.projectContainer}>
              <div className={styles.projectPrev}>
                <h3>FILE #2 / CODENAME DELIVEROO</h3>
                <Image
                  src={deliverooBanner}
                  layout="responsive"
                  placeholder="blur"
                  width="320"
                  height="165"
                  alt="Deliveroo page banner"
                />
              </div>
              <div className={styles.projectDescription}>
                <ul>
                  <li>
                    <span>NAME</span>
                    <span>Deliveroo Page</span>
                  </li>
                  <li>
                    <span>TYPE</span>
                    <span>Fullstack / React / JavaScript</span>
                  </li>
                  <li>
                    <span>STATUS</span>
                    <span className={styles.ready}>READY</span>
                  </li>
                  <li>
                    <span>INFO</span>
                    <span>
                      A simple, yet responsive, deliveroo page clone. The goal
                      was to work with a responsive UI and a cart system using
                      states with a minimal backend to fetch datas.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.linksContainer}>
              <a
                href="https://react-deliveroo-julalldev.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                TEST
              </a>
              <a
                href="https://github.com/Julien-Allard/react-deliveroo-clone"
                target="_blank"
                rel="noreferrer"
              >
                FRONT CODE
              </a>
              <a
                href="https://github.com/Julien-Allard/deliveroo-backend"
                target="_blank"
                rel="noreferrer"
              >
                BACK CODE
              </a>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
