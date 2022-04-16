import styled from "styled-components"
import styles from '../styles/WellBeingCheck.module.css'


export default function Main(){
    return <div>
    <ShowBubble />
    <div className={styles.logo}>
      <img src="/logo.png" alt="Teok logo" />   
    </div>
    <div className={styles.name}>
        <input type="text"></input>
    </div>
    <div className={styles.Natural}>
      <NextButton></NextButton>
    </div>

    </div>
  }
  