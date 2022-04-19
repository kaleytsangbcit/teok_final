import styled from "styled-components"
import styles from '../styles/nature.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { MusicBar, LeftArrow } from "../comps/buttons";

const NatureButton = styled.button`
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

const Nature = styled.button`
    background:#69A5CA;
    width:200px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 10px;
    border: none;
    position: relative;
    margin:auto;
    margin-top:60px;
    margin-bottom:60px;
    font-family: 'Montserrat', sans-serif;
`

export default function Main(){
    return <div>
        <div className={styles.leftarrow}>
            <LeftArrow></LeftArrow>
        </div> 
        <div className={styles.nav}>
        <NavBar></NavBar>
        </div>
        <Nature>
            <text >Music</text>
        </Nature>
        <NatureButton >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
    </div>
  }