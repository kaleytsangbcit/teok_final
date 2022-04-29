import styles from '../styles/start_relax.module.css'
import { useRouter } from 'next/router';
import { NatureButton, MusicButton, GetTip} from '../comps/buttons';
import { NavBar } from '../comps/navbar';
import styled from 'styled-components';
import { GetName } from './data/name_content';

const Bubble = styled.div`
    margin: auto;
    position: relative;
    top: 450px;
    left: 215px;
`

export default function Main(){
    const nm = GetName();
    return <div>
      <div className={styles.progressbar}>
    <img src="/progress_bar_1.png" alt="Progress Bar Stage 1" />  
    </div>
    <text className={styles.bubbleText}>
      Hi {nm}
    </text>
    <div className={styles.line}>
    <img src="/line.png" alt="line" />   
  </div>  
    <text className={styles.text}>
        Let's start relaxing
    </text>
    <h1 className={styles.h1}>Pick your background sounds</h1>
    
    <div className={styles.StartBtn}>
      <NatureButton></NatureButton>
      <MusicButton></MusicButton>
    </div>
    <div className={styles.SmallLogo}>
    <img src="/Logo_small.png" alt="small"/>
    </div>
    <div className={styles.StartBtnSmall}>
        <GetTip></GetTip>
    </div>
    <Bubble>
        <img src='/smallbubble.png' alt='smallbubble'/>
        <text className={styles.SmallBubbleText}> 
            Feeling unsure?
        </text>
        <text className={styles.SmallBubbleText2}> 
            I can help!
        </text>

    </Bubble>
    </div> 
  }