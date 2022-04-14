import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/Relax.module.css'
import { TwoMinButton, FiveMinButton, TenMinButton } from '../comps/buttons';





export default function Main(){
  return <div>
  <div className={styles.progressbar}>
   <img src="/progress_bar_2.png" alt="Teok logo" />  
  </div>
  <text className={styles.bubbleText}>
      Carol
  </text>
  <text className={styles.text}>
      How long would you like to relax for?
  </text>

  <h1 className={styles.h1}>Pick the Duration</h1>
  <div className={styles.line}>
    <img src="/line.png" alt="line" />   
  </div>  
  <div className={styles.durationBtn}>
    <TwoMinButton></TwoMinButton>
    <FiveMinButton></FiveMinButton>
    <TenMinButton></TenMinButton>
  </div>

  </div>
}

// export default function Journal(){
//   return <JournalButton></JournalButton>
// }