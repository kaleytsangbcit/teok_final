import styled from "styled-components"
import styles from '../styles/tips.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { prevButton, next1Button, next2Button } from "../comps/buttons";

const Bubble = styled.div`
position: relative;
top:106px;
left:60px;
width:300px;
`


const optionButton = styled.button`
    align-items: center;
`

const SmallButton2 = styled.button`
    background:#69A5CA;
    text-align:center;
    font-size:14px;
    padding-right:5px;
    width:109px;
    height:38px;
    border-radius:50px;
    color:#FFFFFF;
    border-color:white;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    display:flex;
    justify-content: center;
    margin:25px;
    margin-top:30px;
    
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
            <SmallButton2>
              Previous
            </SmallButton2>
            <SmallButton2>
              Next
            </SmallButton2>
        </div>
    </div>
  }