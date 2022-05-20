import styled from "styled-components"
import styles from '../styles/nature.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { MusicBar, LeftArrowForMusic, NextButton2 } from "../comps/buttons";
import {useState, useEffect} from 'react';

const NatureButton = styled.button`
    // background:#ADCBDE;
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
    color:#FFFFFF
`

const ShowCont = styled.div`

`

let isSubmitted = false;

const aud = [
    "/audio/Nature/blueRain.mp3", "/audio/Nature/blueWater.mp3", "/audio/Nature/greenForest.mp3", "/audio/Nature/greenWind.mp3", "/audio/Nature/redFire.mp3", "/audio/Nature/redFireplace.mp3", "/audio/Nature/yellowBird.mp3", "/audio/Nature/yellowBird2.mp3"
]

export default function Main(){

    function play(sel) {
        var audio = document.getElementById('ai');
        console.log(audio);
        // audio.src = aud[sel]
        audio.src = aud[sel]
        audio.loop=true;
        audio.play();
    }

    const [sel, setSel] = useState(-1);
    const r = useRouter();
    var {qnum} = r.query

    if(qnum === undefined){
        qnum = 0;
    }


    return <div>
        <div className={styles.leftarrow}>
            <LeftArrowForMusic></LeftArrowForMusic>
        </div> 

       <img className={styles.teokie2} src="/teokcute3.png" alt="home"/>
       
        
        <Nature>
            <text>Natural</text>
            
        </Nature>
        <NatureButton
            bg={(sel === 0) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
              ()=>{setSel(0);play(0)}
            }
        >
            <text className={styles.MusicTitle}>Rain</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" />
        </NatureButton>
        <NatureButton
            bg={(sel === 1) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(1);play(1)}
        }
        >
            <text className={styles.MusicTitle}>Ocean Waves</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(1)}/>
        </NatureButton>
        <NatureButton
            bg={(sel === 2) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(2);play(2)}}
        >
            <text className={styles.MusicTitle}>Forest</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(2)}/>
        </NatureButton>
        <NatureButton
            bg={(sel === 3) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(3);play(3)}}
        >
            <text className={styles.MusicTitle}>Wind</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(3)}/>
        </NatureButton>
        <NatureButton 
            bg={(sel === 4) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(4);play(4)}}
        >
            <text className={styles.MusicTitle}>Calm Fire</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(4)}/>
        </NatureButton>
        <NatureButton 
            bg={(sel === 5) ? "#F6BBC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(5);play(5)}}
        >
            <text className={styles.MusicTitle}>Fireplace</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(5)}/>
        </NatureButton>
        <NatureButton 
            bg={(sel === 6) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(6);play(6)}}
        >
            <text className={styles.MusicTitle}>Bird</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(6)}/>
        </NatureButton>
        <NatureButton  
            bg={(sel === 7) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(7);play(7)}}
        >
            <text className={styles.MusicTitle}>Bird</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound" onClick={()=>play(7)}/>
        </NatureButton>

        <div className={styles.prevNext}>
            <NextButton2></NextButton2>
        </div>
        
    </div>
  }
  