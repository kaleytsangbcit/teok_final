import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../../styles/Relax.module.css'
import { StartButtonWithIcon } from '../../comps/buttons';
import { NavBar } from '../../comps/navbar';
// import { useCountdown } from '../../comps/timer';
import { Timer } from '../../comps/timer';
import { GetName } from '../../pages/data/name_content';



export default function Main(){
  const nm = GetName();
  // const endTime = new Date().getTime() + 60000 * 2; // 2 minutes
  // const [timeLeft, setEndTime] = useCountdown(endTime);

  // const minutes = Math.floor(timeLeft / 60000) % 60;
  // const seconds = Math.floor(timeLeft / 1000) % 60;

  return <div>
    <div className={styles.nav}>
      <NavBar></NavBar>
      </div>
  <div className={styles.progressbar3}>
   <img src="/progress_bar_3.png" alt="Progress Bar Stage 3" />  
  </div>
  <text className={styles.bubbleText}>
    {nm}
  </text>
  <text className={styles.text}>
      Let's practice breathing by following Teok?
  </text>

  <div className={styles.timer}>
    {/* <p>{`${minutes}:${seconds}`}</p> */}
    <Timer></Timer>
  </div>
  <div className={styles.line}>
    <img src="/line.png" alt="line" />   
  </div> 
  <div className={styles.breathingcircle}></div> 
  <div className={styles.logowithbreathing}>
    <img src="/logo.png" alt="logo" /> 
  </div>

  <div className={styles.startwithicon}>
    <StartButtonWithIcon></StartButtonWithIcon>
  </div>

  </div>
}

