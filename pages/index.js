import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Typed from "react-typed";
import Patience from "../assets/img/patience.png";
import Curiosity from "../assets/img/curiosity.png";
import Group from "../assets/img/group.png";
import Kindness from "../assets/img/kindness.png";
import Portrait from "../assets/img/portrait.jpg";
import Navbar from "../components/Navbar";

export default function Home() {
  const skills = [
    "REACT",
    "REACT NATIVE",
    "NEXT.JS",
    "SASS",
    "JAVASCRIPT",
    "GIT",
    "NODE.JS",
    "MONGODB",
    "EXPRESS",
  ];

  const tools = [
    "VSC",
    "GITHUB",
    "FIGMA",
    "NETLIFY",
    "HEROKU",
    "ATLAS",
    "STRIPE",
  ];

  const futureSkills = ["REDUX", "TYPESCRIPT"];

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Homepage - Julien Allard</title>
      </Head>
      <div className={styles.container}>
        <header>
          <h1>
            <Typed
              strings={[
                "WELCOME TO MY PORTFOLIO",
                "WELCOME TO MY DATABASE",
                "WELCOME IN MY UNIVERSE...",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h1>
        </header>
        <Navbar />
        <main>
          <section className={styles.profile}>
            <div className={styles.portrait}>
              <Image src={Portrait} alt="My profile picture" />
            </div>
            <ul>
              <li>
                <span className={styles.data}>NAME :</span>
                <span>
                  <Typed
                    strings={["Julien Allard"]}
                    typeSpeed={100}
                    showCursor={false}
                  />
                </span>
              </li>
              <li>
                <span className={styles.data}>AGE :</span>
                <span>
                  <Typed strings={["36"]} typeSpeed={100} showCursor={false} />
                </span>
              </li>
              <li>
                <span className={styles.data}>ROLE :</span>
                <span>
                  <Typed
                    strings={["Web Developer"]}
                    typeSpeed={100}
                    showCursor={false}
                  />
                </span>
              </li>
              <li>
                <span className={styles.data}>LEVEL :</span>
                <span>
                  <Typed
                    strings={["Beginner"]}
                    typeSpeed={100}
                    showCursor={false}
                  />
                </span>
              </li>
              <li>
                <span className={styles.data}>SKILLS :</span>
                <span>
                  <Typed
                    strings={[
                      "React, React Native, Next.js, JavaScript, SASS, Node.js, MongoDB",
                    ]}
                    typeSpeed={40}
                  />
                </span>
              </li>
            </ul>
          </section>
          <section className={styles.description}>
            <h2>INTRODUCTION</h2>
            <div>
              <p>
                Julien is a beginner web developer. After more than 15 years in
                retail shops and logistics he decided to go through a drastic
                change in the course of his career, for the better. He
                discovered web developement years ago but was too afraid to go
                further. After months of thinking, he decided to go through it.
              </p>
              <p>
                He started as a self-taught student, learning more and more. He
                discovered a new passion which increased everyday. He decided to
                be part of the formidable bootcamp called Le Reacteur which
                helped him go further. He learned modern fullstack technologies
                but has a knack for frontend developement. How could he predict
                that you could have fun when working ?
              </p>
              <p>
                He now wants to start his career as a web developer, either as
                an intern or as a fulltime employee if someone is ready to give
                him the chance.
              </p>
            </div>
          </section>
          <section className={styles.skills}>
            <article>
              <h3>SOFT SKILLS</h3>
              <div>
                <div className={styles.logoContainer}>
                  <Image src={Patience} alt="patience logo" />
                </div>
                <p>Patience</p>
              </div>
              <p className={styles.skillDescription}>
                Allows Julien to stay level-headed under dire circumstances.
                Unless it is the last slice of pizza.
              </p>
              <div>
                <div className={styles.logoContainer}>
                  <Image src={Curiosity} alt="curiosity logo" />
                </div>
                <p>Curiosity</p>
              </div>
              <p className={styles.skillDescription}>
                Julien loves to learn new things more than anything. He will not
                stop at something he doesn&apos;t know and loves resolving
                problems. And creating some.
              </p>
              <div>
                <div className={styles.logoContainer}>
                  <Image src={Group} alt="group logo" />
                </div>
                <p>Teamwork</p>
              </div>
              <p className={styles.skillDescription}>
                A good teamwork helps Julien&apos;s growth tenfold. He loves
                working with other people so everybody can grow and learn from
                eachother. Likes to disturb with weird jokes.
              </p>
              <div>
                <div className={styles.logoContainer}>
                  <Image src={Kindness} alt="kindness logo" />
                </div>
                <p>Benevolence</p>
              </div>
              <p className={styles.skillDescription}>
                Julien is always up to help others. He is sure that it is the
                key for success and for people to elevate themselves and
                eachother. Except if it&apos;s a cat, he won&apos;t care.
              </p>
            </article>
            <article>
              <h3>HARD SKILLS</h3>
              <div className={styles.hardSkills}>
                {skills.map((elem) => {
                  return <p key={uuidv4()}>{elem}</p>;
                })}
              </div>
              <span className={styles.separator}></span>
              <h3>TOOLS</h3>
              <div className={styles.hardSkills}>
                {tools.map((elem) => {
                  return <p key={uuidv4()}>{elem}</p>;
                })}
              </div>
              <span className={styles.separator}></span>
              <h3>NEXT SKILLS</h3>
              <div className={styles.hardSkills}>
                {futureSkills.map((elem) => {
                  return (
                    <p className={styles.futureSkills} key={uuidv4()}>
                      {elem}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}
