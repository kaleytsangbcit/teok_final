import { GetAnswers,res } from "../data/que_content"
// import { NatureButton } from "../../comps/buttons";
import {useState} from 'react';
import styled from "styled-components"
import styles from '../../styles/nature.module.css'
import { NavBar } from "../../comps/navbar";
import { NextButton2, LeftArrowForMusic, RetakeBtn } from "../../comps/buttons";
import { useRouter } from 'next/router';



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

    //retake
    const SmallButton4 = styled.button`
    background:#9ED292;
    text-align:center;
    font-size:12px;
    padding-right:5px;
    width: 160px;
    height: 38px;
    border-radius:50px;
    color:#515253;
    border-color:white;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    display:flex;
    justify-content: center;
    margin:25px;
    margin-top:30px;
    position: relative;
    top: 545px;
    left: 86px;
`
    //pick duration
    const SmallButton5 = styled.button`
    background:#69A5CA;
    text-align:center;
    font-size:16px;
    padding-right:5px;
    width: 160px;
    height: 60px;
    border-radius:50px;
    color:#FFFFFF;
    border-color:white;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    display:flex;
    justify-content: center;
    margin:25px;
    margin-top:30px;
    position: relative;
    top: 404px;
    left: 86px;
`

const SoundSec = styled.div`
    position: absolute;
    top: 346px;
    left: 33px;
`
const Bubble = styled.div`
    position: relative;
    top:104px;
    left:64px;
    width:300px;
`

export default function QResults() {
    
    const [sel, setSel] = useState(-1);
    const r = useRouter();

    function play(src) {
        var audio = document.getElementById('ai');
        console.log(audio);
        // audio.src = aud[sel]
        audio.src = src
        audio.play();
    }
    const an = GetAnswers();
    console.log(an, res[an.place][an.col]);
    const musics = res[an.place][an.col]

    return <div>

        {/* <div className={styles.leftarrow}>
            <LeftArrowForMusic></LeftArrowForMusic>
        </div>  */}

        <div className={styles.nav}>
        <NavBar></NavBar>
        </div>

        <Bubble>
            <img src="/bubble.png" alt="Dialogue bubble" />   
            <text className={styles.bubbleText}>These sounds might help!
            </text> 
            <img id={styles.teokLay} src="/teokcute.png" alt="Teok relaxing" /> 
        </Bubble>

        <SoundSec>
            {
            musics.map((o,i)=> <NatureButton
            bg={(sel === i) ? "#FCBAC2" : "#ADCBDE"}
            onClick={
            ()=>{setSel(i); play(o.src)}
            }

            >
                <text className={styles.MusicTitle}>{o.name}</text>
                <img className={styles.sound} src="/sound_icon.png" alt="sound" />
            </NatureButton>
            )
            }
        </SoundSec>

        <SmallButton4 onClick={()=>
        {r.push("/tips");
        var audio = document.getElementById('ai')
        audio.pause()}
        }>
            Retake Quiz
        </SmallButton4>    
        
        <SmallButton5 onClick={()=>
        {r.push("/relax_duration");}}>
            Pick Duration
        </SmallButton5>

    </div>

}