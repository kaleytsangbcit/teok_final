import styled from "styled-components"
import styles from '../styles/tips.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { LeftArrow } from '../comps/buttons';

const Bubble = styled.div`
position: relative;
top:106px;
left:60px;
width:300px;
`
const SmallBtn = styled.button`
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
    margin:auto;
    margin-top:30px;
`

const optionButton = styled.button`
    align-items: center;
`

export function SmallButton2(){
    const r = useRouter();
    return <SmallBtn onClick={
        ()=>r.push('/questionB')}>
        </SmallBtn>
}


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
            <SmallBtn>
              Previous
            </SmallBtn>
            <SmallBtn>
              Next
            </SmallBtn>
        </div>
    </div>
  }