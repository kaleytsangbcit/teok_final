import styled from "styled-components"
import styles from '../styles/nature.module.css'
import { NavBar } from '../comps/navbar';
import { useRouter } from 'next/router';
import { MusicBar, LeftArrow, NextButton2 } from "../comps/buttons";
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
    margin-bottom:60px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: bold;
`

const ShowCont = styled.div`

`

let isSubmitted = false;

export default function Main(){

    const [sel, setSel] = useState(1);
    const r = useRouter();
    var {qnum} = r.query

    if(qnum === undefined){
        qnum = 0;
    }


    return <div>
        <div className={styles.leftarrow}>
            <LeftArrow></LeftArrow>
        </div> 
        <div className={styles.nav}>
        <NavBar></NavBar>
        </div>
        <Nature>
            <text>Natural</text>
        </Nature>
        <NatureButton
            bg={(sel === 0) ? "#FFCFD5" : "#ADCBDE"}
            onClick={
              ()=>setSel(0)
            }
        >
            <text className={styles.MusicTitle}>Ocean Sound</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton
            bg={(sel === 1) ? "#FFCFD5" : "#ADCBDE"}
            onClick={
            ()=>setSel(1)
        }
        >
            <text className={styles.MusicTitle}>Ocean Sound</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton
            bg={(sel === 2) ? "#FFCFD5" : "#ADCBDE"}
            onClick={
            ()=>setSel(2)}
        >
            <text className={styles.MusicTitle}>Ocean Sound</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton
            bg={(sel === 3) ? "#FFCFD5" : "#ADCBDE"}
            onClick={
            ()=>setSel(3)}
        >
            <text className={styles.MusicTitle}>Ocean Sound</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton 
            bg={(sel === 4) ? "#FFCFD5" : "#ADCBDE"}
            onClick={
            ()=>setSel(4)}
        >
            <text className={styles.MusicTitle}>Ocean Sound</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton 
            bg={(sel === 5) ? "#FFCFD5" : "#ADCBDE"}
            onClick={
            ()=>setSel(5)}
        >
            <text className={styles.MusicTitle}>Ocean Sound</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton 
            bg={(sel === 6) ? "#FFCFD5" : "#ADCBDE"}
            onClick={
            ()=>setSel(6)}
        >
            <text className={styles.MusicTitle}>Ocean Sound</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>
        <NatureButton  
            bg={(sel === 7) ? "#FFCFD5" : "#ADCBDE"}
            onClick={
            ()=>setSel(7)}
        >
            <text className={styles.MusicTitle}>Ocean Sound</text>
            <img className={styles.sound} src="/sound_icon.png" alt="sound"/>
        </NatureButton>

        <div className={styles.prevNext}>
            <NextButton2></NextButton2>
        </div>
        
    </div>
  }
  