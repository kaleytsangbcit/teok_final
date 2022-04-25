import styled from "styled-components"
import styles from '../styles/tips.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { LeftArrow, SmallBtn, SmallBtn2 } from '../comps/buttons';

const Bubble = styled.div`
position: relative;
top:106px;
left:60px;
width:300px;
`

const optionButton = styled.button`
    align-items: center;
`



export default function Main(){
    return <div>
        <div className={styles.leftarrow}>
            <LeftArrow></LeftArrow>
        </div> 
        <div className={styles.nav}>
        <NavBar></NavBar>
        </div>
       
        <Bubble>
            <img src="/bubble.png" alt="Dialogue bubble" />   
            <text className={styles.bubbleText}>
            Which activities are you in the mood for?
            </text> 
            <img id={styles.logo} src="/logo.png" alt="Teok Logo" /> 
        </Bubble>
         
        <div className={styles.itemList1}>
            <optionButton >
                <img className={styles.optBtn} src="/indoor.png" alt="indoor"/>
            </optionButton>
            <optionButton >
                <img className={styles.optBtn} src="/outdoor.png" alt="outdoor"/>
            </optionButton>
        </div>
        
        <div className={styles.prevNext}>
            <SmallBtn2>
              Previous
            </SmallBtn2>
            <SmallBtn>
              Next
            </SmallBtn>
        </div>
    </div>
  }