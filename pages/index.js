import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Typed from "react-typed";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1>
          <Typed
            strings={[
              "WELCOME ON MY PORTFOLIO",
              "WELCOME ON MY DATABASE",
              "WELCOME IN MY UNIVERSE",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h1>
      </header>

      <main>
        <section className={styles.profile}>
          <div className={styles.portrait}>
            <img
              src="https://res.cloudinary.com/df4imwogd/image/upload/v1652090753/GitHub/photo-cv-bis_gefnvm.jpg"
              alt="My profile picture"
            />
          </div>
          <ul>
            <li>
              <span className={styles.data}>NAME :</span>
              <span>
                <Typed
                  strings={["Julien Allard"]}
                  typeSpeed={40}
                  showCursor={false}
                />
              </span>
            </li>
            <li>
              <span className={styles.data}>AGE :</span>
              <span>
                <Typed strings={["36"]} typeSpeed={40} showCursor={false} />
              </span>
            </li>
            <li>
              <span className={styles.data}>ROLE :</span>
              <span>
                <Typed
                  strings={["Web Developer"]}
                  typeSpeed={40}
                  showCursor={false}
                />
              </span>
            </li>
            <li>
              <span className={styles.data}>LEVEL :</span>
              <span>
                <Typed
                  strings={["Beginner"]}
                  typeSpeed={40}
                  showCursor={false}
                />
              </span>
            </li>
            <li>
              <span className={styles.data}>SKILLS :</span>
              <span>
                <Typed
                  strings={[
                    "React, React Native, Next.js, TypeScript, JavaScript, SASS, Node.js, MongoDB",
                  ]}
                  typeSpeed={40}
                  showCursor={false}
                />
              </span>
            </li>
          </ul>
        </section>
        <section className={styles.description}>
          <h2>DESCRIPTION :</h2>
          <p>
            Julien is a beginner web developer. After more than 15 years in
            retail shops and logistics he decided to go through a drastic change
            in the course of his career, for the better. He discovered web
            developement years ago but was too afraid to go further. After
            months of thinking, he decided to go through it.
          </p>
          <p>
            He started as a self-taught student, learning more and more. He
            discovered a new passion which increased everyday. He decided to be
            part of the formidable bootcamp called Le Reacteur which helped him
            go further. He learned modern fullstack technologies but has a knack
            for frontend developement.
          </p>
          <p>
            He now wants to start his career as a web developer, either as an
            intern or as a fulltime employee if someone is ready to give him the
            chance.
          </p>
        </section>
      </main>
    </div>
  );
}
