import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/Relax.module.css'
import { StartButtonWithIcon } from '../comps/buttons';
import { NavBar } from '../comps/navbar';





export default function Main(){
  return <div>
    <div className={styles.nav}>
      <NavBar></NavBar>
      </div>
  <div className={styles.progressbar3}>
   <img src="/progress_bar_3.png" alt="Progress Bar Stage 3" />  
  </div>
  <text className={styles.bubbleText}>
      Carol
  </text>
  <text className={styles.text}>
      Let's practice breathing by following Teok?
  </text>

  <h1 className={styles.h2}>2 : 00</h1>
  <div className={styles.line}>
    <img src="/line.png" alt="line" />   
  </div>  
  <div className={styles.logowithbreathing}>
    <img src="/logo.png" alt="logo" /> 
  </div>
  <div className={styles.startwithicon}>
    <StartButtonWithIcon></StartButtonWithIcon>

  </div>

  </div>
}

// export default function Journal(){
//   return <JournalButton></JournalButton>
// }