import styles from '../styles/WellBeingCheck.module.css'
import { NatureButton, MusicButton} from '../comps/buttons';
import { NavBar } from '../comps/navbar';


export default function Main(){
    return <div>
      <div className={styles.nav}>
      <NavBar></NavBar>
      </div>

      <div className={styles.progressbar}>
    <img src="/progress_bar_1.png" alt="Teok logo" />  
    </div>
    <text className={styles.bubbleText}>
      Carol
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
  
    </div>
  }