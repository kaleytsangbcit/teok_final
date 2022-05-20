import { NextButton } from '../comps/buttons';
import styles from '../styles/name.module.css'
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeButton } from './data/name_content';

const Bubble = styled.div`
position: relative;
top:240px;
left:80px;
width:300px;
`


export function ShowBubble() {
    return<div>
    <Bubble>
      <img  className={styles.bubble} src="/bubble.png" alt="Dialogue bubble" />   
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
    <div >

        <input className={styles.name} type="text" onChange={
        (e)=>ChangeButton(e.target.value)
      }/>
    </div>
    <div className={styles.StartBtn}>
      <NextButton></NextButton>
    </div>

    </div>
  }
  