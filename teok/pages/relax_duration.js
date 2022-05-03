import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/Relax.module.css'
import { TwoMinButton, FiveMinButton, TenMinButton, LeftArrow } from '../comps/buttons';
import { NavBar } from '../comps/navbar';
import { GetName } from './data/name_content';


export default function Main(){
  const nm = GetName();
  const r = useRouter();
  
  return <div>
    <div className={styles.leftarrow}>
      <LeftArrow></LeftArrow>
    </div> 
    <div className={styles.nav}>
      <NavBar></NavBar>
      </div>
    <div className={styles.progressbar2}>
    <img src="/progress_bar_2.png" alt="Progress Bar Stage 2" />  
    </div>
    <text className={styles.bubbleText}>
      {nm}
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
