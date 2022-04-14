import { NextButton } from '../comps/buttons';
import styles from '../styles/WellBeingCheck.module.css'
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Bubble = styled.div`
position: relative;
top:240px;
left:80px;
width:300px;
`

export function ShowBubble() {
    return<div>
    <Bubble>
      <img src="/bubble.png" alt="Dialogue bubble" />   
      <text className={styles.bubbleName}>
        What is your name?
      </text>  
    </Bubble>
    </div>
  }

export default function Main(){
    return <div>
    <ShowBubble />
    <div className={styles.logo}>
      <img src="/logo.png" alt="Teok logo" />   
    </div>
    <div className={styles.name}>
        <input type="text"></input>
    </div>
    <div className={styles.StartBtn}>
      <NextButton></NextButton>
    </div>
  
    </div>
  }
  