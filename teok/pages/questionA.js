import styled from "styled-components"
import styles from '../styles/tips.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { prevButton, next1Button, next2Button, LeftArrow } from "../comps/buttons";

const Bubble = styled.div`
position: relative;
top:106px;
left:60px;
width:300px;
`


const OptionButton = styled.button`
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
            <OptionButton >
                {/* <text className={styles.MusicTitle}>Music</text> */}
                <img className={styles.optBtn} src="/indoor.png" alt="indoor"/>
            </OptionButton>
            <optionButton >
                {/* <text className={styles.MusicTitle}>Music</text> */}
                <img className={styles.optBtn} src="/outdoor.png" alt="outdoor"/>
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