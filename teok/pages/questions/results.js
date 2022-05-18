import { GetAnswers,res } from "../data/que_content"
// import { NatureButton } from "../../comps/buttons";
import {useState} from 'react';
import styled from "styled-components"
import styles from '../../styles/nature.module.css'


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

export default function QResults() {
    
    const [sel, setSel] = useState(-1);

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
    </div>

}