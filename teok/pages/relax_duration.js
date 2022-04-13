import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/Relax.module.css'
import { TwoMinButton, FiveMinButton, TenMinButton } from '../comps/buttons';



const Bubble = styled.div`
position: relative;
top:130px;
left:136px;
`

export function ShowBubble() {
  return <Bubble>
    <img src="/bubble.png" alt="Dialogue bubble" />   
    <text className={styles.bubbleText}>
      Hi Carol!
    </text>  
  </Bubble>
}

export default function Main(){
  return <div>
  <ShowBubble />
  <div className={styles.logo}>
    <img src="/logo.png" alt="Teok logo" />   
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