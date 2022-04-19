import styled from "styled-components"
import styles from '../styles/tips.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { prevButton, next1Button, next2Button } from "../comps/buttons";

const Bubble = styled.div`
position: relative;
top:90px;
left:60px;
width:300px;
`

// const itemSec = styled.div`
// position: relative;
// top: 406px;
// `

const SoundButton = styled.button`
    background:#ADCBDE;
    width:322px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 10px;
    border: none;
    position: relative;
    margin:auto;
    margin-top:20px;
    font-family: 'Montserrat', sans-serif;
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

// const Nature = styled.button`
//     background:#69A5CA;
//     width:200px;
//     height:30px;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     border-radius: 10px;
//     border: none;
//     position: relative;
//     margin:auto;
//     margin-top:60px;
//     margin-bottom:60px;
//     font-family: 'Montserrat', sans-serif;
// `

export default function Main(){
    return <div>
        <div className={styles.nav}>
        <NavBar></NavBar>
        </div>
        
        <Bubble>
            <img src="/bubble.png" alt="Dialogue bubble" />   
            <text className={styles.bubbleText}>
            These sounds might help!
            </text>              
            <img src="/teok_icon2.png" alt="Teok Icon" />   

        </Bubble>
        <div className={styles.itemList}>
            <SoundButton >
                <text className={styles.MusicTitle}>Music</text>
                <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
            </SoundButton>
            <SoundButton >
                <text className={styles.MusicTitle}>Music</text>
                <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
            </SoundButton>
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