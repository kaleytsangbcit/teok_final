import styled from "styled-components"
import styles from '../styles/tips.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { prevButton, next1Button, next2Button, SmallBtn3, SmallBtn2 } from "../comps/buttons";

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
        <div className={styles.nav}>
        <NavBar></NavBar>
        </div>
       
        <Bubble>
            <img src="/bubble.png" alt="Dialogue bubble" />   
            <text className={styles.bubbleText}>
            How do you currently feel?
            </text> 
            <img id={styles.logo} src="/logo.png" alt="Teok Logo" /> 
        </Bubble>
         
        <div className={styles.itemList1}>
            <optionButton >
                <img className={styles.optBtn} src="/cold.png" alt="cold"/>
            </optionButton>
            <optionButton >
                <img className={styles.optBtn} src="/warm.png" alt="warm"/>
            </optionButton>
        </div>
        
        <div className={styles.prevNext}>
            <SmallBtn2>
              Previous
            </SmallBtn2>
            <SmallBtn3>
              Next
            </SmallBtn3>
        </div>
    </div>
  }