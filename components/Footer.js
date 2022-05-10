import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer>
        <p>
          Website made with{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            NEXT.JS
          </a>
        </p>
        <p>
          Design inspired by{" "}
          <a
            href="https://codepen.io/ibandim123/pen/OJjOdzm"
            target="_blank"
            rel="noreferrer"
          >
            Futuristic Panel Table
          </a>{" "}
          from Isaac Bandim
        </p>
        <p>
          All icons come from{" "}
          <a
            href="https://www.flaticon.com/fr/"
            target="_blank"
            rel="noreferrer"
          >
            Flaticon.com
          </a>
        </p>
        <p className={styles.sign}>
          @ Julien Allard - {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
