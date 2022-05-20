import styled from "styled-components"
import styles from '../styles/nature.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { MusicBar, LeftArrowForMusic, NextButton2 } from "../comps/buttons";
import {useState, useEffect} from 'react';
import React, {Components} from 'react';



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
    margin-bottom:40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF
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
    

    const [sel, setSel] = useState(-1);
    const r = useRouter();
    var {qnum} = r.query

    if(qnum === undefined){
        qnum = 0;
    }

    // const src=aud[sel]
    
    return <div>

        <div className={styles.leftarrow}>
            <LeftArrowForMusic></LeftArrowForMusic>
        </div> 


        <img className={styles.teokie} src="/teokcute2.png" alt="home"/>

        <Nature>
            <text >Instrumental</text>
        </Nature>
        <NatureButton
            bg={(sel === 0) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
              ()=>{setSel(0); play(0)}
            }

        >
            <text className={styles.MusicTitle}>Sailing</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" />
        </NatureButton>
        <NatureButton
            bg={(sel === 1) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(1); play(1)}
        }
            
        >
            <text className={styles.MusicTitle}>Falling Snow</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" />
        </NatureButton>
        <NatureButton
            bg={(sel === 2) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(2); play(2)}
            }
        >
            <text className={styles.MusicTitle}>Everything</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" />
        </NatureButton>
        <NatureButton
            bg={(sel === 3) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(3); play(3)}}
        >
            <text className={styles.MusicTitle}>Farewell</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" />
        </NatureButton>
        <NatureButton 
            bg={(sel === 4) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(4); play(4)}}
        >
            <text className={styles.MusicTitle}>Campfire</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" />
        </NatureButton>
        <NatureButton 
            bg={(sel === 5) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(5); play(5)}}
        >
            <text className={styles.MusicTitle}>Naptime</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" />
        </NatureButton>
        <NatureButton 
            bg={(sel === 6) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(6); play(6)}}
        >
            <text className={styles.MusicTitle}>Resolve</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" />
        </NatureButton>
        <NatureButton  
            bg={(sel === 7) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(7); play(7)}}
        >
            <text className={styles.MusicTitle}>Autumn Wind</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(7)}/>
        </NatureButton>

        <div className={styles.prevNext}>
            <NextButton2></NextButton2>
        </div>
    </div>
  }