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


const colourButton = styled.button`
    // background:#ADCBDE;
    // width:322px;
    // height:60px;
    // display:flex;
    // align-items:center;
    // justify-content:center;
    // border-radius: 10px;
    // border: none;
    // position: relative;
    // margin:auto;
    // margin-top:20px;
    // font-family: 'Montserrat', sans-serif;
    align-items: center;
    margin:5px;
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
    margin:auto;
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
            What colour do you currently feel like?
            </text> 
            <img id={styles.logo} src="/logo.png" alt="Teok Logo" /> 
        </Bubble>
         
        <div className={styles.itemList2}>
            <colourButton >
                {/* <text className={styles.colName}>colour</text> */}
                <img className={styles.colBtn} src="/teokOk.png" alt="colour"/>
            </colourButton>
            <colourButton >
                {/* <text className={styles.MusicTitle}>Music</text> */}
                <img className={styles.colBtn} src="/teokOk.png" alt="colour"/>
            </colourButton>
            <colourButton >
                {/* <text className={styles.MusicTitle}>Music</text> */}
                <img className={styles.colBtn} src="/teokOk.png" alt="colour"/>
            </colourButton>
            <colourButton >
                {/* <text className={styles.MusicTitle}>Music</text> */}
                <img className={styles.colBtn} src="/teokOk.png" alt="colour"/>
            </colourButton>
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