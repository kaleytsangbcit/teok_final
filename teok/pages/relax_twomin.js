import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/Relax.module.css'
import { ChangeMusicButton, LeftArrow  } from '../comps/buttons';
import { NavBar } from '../comps/navbar';
import { GetName } from './data/name_content';
import {useState, useEffect} from 'react';
import React, { Component } from 'react'

export default class Timer extends Component {
  
    state = {
        minutes: 2,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            var audio = document.getElementById('ai');

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                    console.log("pause music");
                    audio.pause();

                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
      const { minutes, seconds } = this.state;
      const nm = GetName();


      
      return (
        <div>
          <div className={styles.leftarrow}>
            <LeftArrow></LeftArrow>
          </div> 

          <div className={styles.nav}>
            <NavBar></NavBar>
          </div>
          <div className={styles.progressbar3}>
            <img src="/progress_bar_3.png" alt="Progress Bar Stage 3" />  
          </div>
          <text className={styles.bubbleText}>
            {nm}
          </text>
          <text className={styles.text}>
          Breathe in when the circle expands, breathe out when it shrinks.
          </text>

          <div className={styles.timer}>
              { minutes === 0 && seconds === 0
                ? <h1>Good job! Try another one</h1> 
                  : <h1> {minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h1>
              }
          </div>

          <div className={styles.line}>
            <img src="/line.png" alt="line" />   
          </div> 
          <div className={styles.breathingcircle}></div> 
          <div className={styles.logowithbreathing}>
            <img src="/logo.png" alt="logo" /> 
          </div>

          <div className={styles.startwithicon}>
            <ChangeMusicButton></ChangeMusicButton>
          </div>

        </div>
      )
    }
}

