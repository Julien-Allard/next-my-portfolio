import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Head from "next/head";
import Typed from "react-typed";
import Navbar from "../../components/Navbar";
import styles from "./Contact.module.scss";
import linkedinLogo from "../../assets/img/linkedin.png";
import githubLogo from "../../assets/img/github.png";

export default function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleForm = async (event) => {
    event.preventDefault();

    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      subject !== "" &&
      message !== ""
    ) {
      try {
        setLoading(true);

        const data = {
          firstname,
          lastname,
          email,
          subject,
          message,
        };

        const response = await axios.post(
          "https://contact-form-le-reacteur.herokuapp.com/form",
          data
        );

        if (response.data) {
          setLoading(false);
          setSuccess(true);
          setFirstname("");
          setLastname("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact - Julien Allard</title>
      </Head>
      <div className={styles.container}>
        <header>
          <h1>
            <Typed
              strings={["FEEL FREE TO CONTACT ME"]}
              typeSpeed={50}
              backSpeed={50}
            />
          </h1>
        </header>
        <Navbar />
        <main>
          <h2>SEND ME A MESSAGE</h2>
          <form className={styles.contactForm} onSubmit={handleForm}>
            <div>
              <label htmlFor="subject">SUBJECT</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
              <label htmlFor="content">YOUR MESSAGE</label>
              <textarea
                type="text"
                id="content"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="firstname">FIRSTNAME</label>
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
              />
              <label htmlFor="lastname">LASTNAME</label>
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
              />
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {(firstname === "" ||
                lastname === "" ||
                email === "" ||
                subject === "" ||
                message === "") &&
              !success ? (
                <button className={styles.emptyFields}>
                  SOME FIELDS ARE EMPTY
                </button>
              ) : loading ? (
                <button className={styles.disabled}>
                  <Typed
                    strings={["SENDING MESSAGE..."]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                  />
                </button>
              ) : success ? (
                <button className={styles.success}>MESSAGE SENT</button>
              ) : (
                <button>SEND</button>
              )}
            </div>
          </form>
          <h2>MEDIAS</h2>
          <section className={styles.medias}>
            <table>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>MEDIA</th>
                  <th>TYPE</th>
                  <th>URL</th>
                </tr>
                <tr>
                  <td>
                    <Image
                      src={linkedinLogo}
                      width="30"
                      height="30"
                      alt="Linkedin logo"
                    />
                  </td>
                  <td>LINKEDIN</td>
                  <td>JOB / COMMUNITY</td>
                  <td>
                    <a
                      href="https://www.linkedin.com/in/allardj/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>LINK</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image
                      src={githubLogo}
                      width="30"
                      height="30"
                      alt="GitHub logo"
                    />
                  </td>
                  <td>GITHUB</td>
                  <td>CODE / COMMUNITY</td>
                  <td>
                    <a
                      href="https://github.com/Julien-Allard"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>LINK</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}
