import styled from "styled-components"
import styles from '../styles/nature.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { MusicBar, LeftArrow, NextButton2 } from "../comps/buttons";
import {useState, useEffect} from 'react';
import React, {Components} from 'react';
// import blueSailing from "../public/audio/Colorsongs/blueSailing.mp3";
// import {Howl, Howler} from "howler";

// const audioClips = [
//     {sound: blueSailing},
//     {sound: blueSnow},
//     {sound: greenEverything},
//     {sound: greenFarewell}
// ]
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
    margin-top:14px;
    font-family: 'Montserrat', sans-serif;
    background: ${[props=>props.bg || "#DAA"]};
`

const Nature = styled.button`
    background:#69A5CA;
    width:200px;
    height:40px;
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
    font-size: 16px;
    font-weight: bold;
`
//put all your src link into the array
const aud = [
    "/audio/Colorsongs/blueSailing.mp3", "/audio/Colorsongs/blueSnow.mp3", "/audio/Colorsongs/greenEverything.mp3", "/audio/Colorsongs/greenFarewell.mp3", "/audio/Colorsongs/redCampfire.mp3", "/audio/Colorsongs/redNaptime.mp3", "/audio/Colorsongs/yellowResolve.mp3", "/audio/Colorsongs/yellowAutumn.mp3"
]

export default function Main(){
   
    function play(sel) {
        var audio = document.getElementById('ai');
        console.log(audio);
        // audio.src = aud[sel]
        audio.src = aud[sel]
        audio.play();
    }
    

    const [sel, setSel] = useState(1);
    const r = useRouter();
    var {qnum} = r.query

    if(qnum === undefined){
        qnum = 0;
    }

    const src=aud[sel]
    
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
        <NatureButton
            bg={(sel === 0) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
              ()=>setSel(0)
            }
        >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(0)}/>
        </NatureButton>
        <NatureButton
            bg={(sel === 1) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>setSel(1)
        }
            
        >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(1)}/>
        </NatureButton>
        <NatureButton
            bg={(sel === 2) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>setSel(2)}
        >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(2)}/>
        </NatureButton>
        <NatureButton
            bg={(sel === 3) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>setSel(3)}
        >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(3)}/>
        </NatureButton>
        <NatureButton 
            bg={(sel === 4) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>setSel(4)}
        >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(4)}/>
        </NatureButton>
        <NatureButton 
            bg={(sel === 5) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>setSel(5)}
        >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(5)}/>
        </NatureButton>
        <NatureButton 
            bg={(sel === 6) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>setSel(6)}
        >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(6)}/>
        </NatureButton>
        <NatureButton  
            bg={(sel === 7) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>setSel(7)}
        >
            <text className={styles.MusicTitle}>Music</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(7)}/>
        </NatureButton>

        <div className={styles.prevNext}>
            <NextButton2></NextButton2>
        </div>
    </div>
  }