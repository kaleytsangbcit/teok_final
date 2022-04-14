import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/WellBeingCheck.module.css'
import { StartButton } from '../comps/buttons';
import { NavBar } from '../comps/navbar';



const Bubble = styled.div`
position: relative;
top:240px;
left:80px;
width:300px;
`

export function ShowBubble() {
  return<div>
  <h1 className={styles.h1}>Well Being Check</h1>
  <Bubble>
    <img src="/bubble.png" alt="Dialogue bubble" />   
    <text className={styles.bubbleText}>
      What to listen to?
    </text>  
  </Bubble>
  </div>
}

export default function Main(){
  return <div>
    <div className={styles.nav}>
    <NavBar></NavBar>
    </div>
    
  <ShowBubble />
  <div className={styles.logo}>
    <img src="/logo.png" alt="Teok logo" />   
  </div>  
  <div className={styles.StartBtn}>
    <StartButton></StartButton>
  </div>

  </div>
}

// export default function Journal(){
//   return <JournalButton></JournalButton>
// }