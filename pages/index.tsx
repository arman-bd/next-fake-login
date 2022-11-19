import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.css'
import { useCallback, useState } from "react";
import LoginForm from '../components/login-form'

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <LoginForm/>
      </main>
    </div>
  )
}
