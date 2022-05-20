
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';



export default function Home() {
  const r = useRouter();
  
  useEffect(() => {
    setTimeout(() => {
      r.push('/name');    
    }, 2000)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Teok To Me</title>
        <meta name="description" content="Teok To Me" />
      </Head>

      <main className={styles.main}>
        <img id={styles.bubble} src="/bubble.png" alt="Dialogue bubble" />   
        <text id={styles.bubbleText}>
          Hi !  I am Teok!
        </text>       
        <img id={styles.logowithtext} src="/logowithtext.png" alt="Teok Logo" />

        <p>By Angelyne, Joyce and Kaley</p>


      </main>

      {/* <footer className={styles.footer}>

      </footer> */}
    </div>
  )
}
