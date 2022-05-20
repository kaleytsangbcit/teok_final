import { qs, GetAnswers } from "../data/que_content";

import Options from "../../comps/questions/options";

import { useRouter } from "next/router";
import styles from '../../styles/tips.module.css';
import styled from 'styled-components';
import { NavBar } from "../../comps/navbar";

const Bubble = styled.div`
position: relative;
top:94px;
left:64px;
width:300px;
`

const SmallButton3 = styled.button`
    background:#69A5CA;
    text-align:center;
    font-size:16px;
    padding-right:5px;
    width:120px;
    height:50px;
    border-radius:50px;
    color:#FFFFFF;
    border-color:white;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    display:flex;
    justify-content: center;
    margin:25px;
    margin-top:30px;
`
const SmallButton4 = styled.button`
    background:#9ED292;
    text-align:center;
    font-size:16px;
    padding-right:5px;
    width:120px;
    height:50px;
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
    top: 350px;
    left: 110px;
`

export default function Questions(){

  const an = GetAnswers();
  const r = useRouter();

  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 0;
  }

  return <div>
    {/* <hr />
    Answer Some Questions */}

{/* className="preBtn" */}


<div className={styles.nav}>
  <NavBar></NavBar>
</div>

<Bubble>
  <img src="/bubble.png" alt="Dialogue bubble" />   
  <text className={styles.bubbleText}>
  </text> 
  <img id={styles.logo} src="/logo.png" alt="Teok Logo" /> 
</Bubble>

<Options 
      q={qs[qnum].title}
      arr={qnum== 2? qs[qnum][an.temp] : qs[qnum].ops}
    />

<div className={styles.itemList1}>
  {
    Number(qnum) < qs.length - 1 &&
    <SmallButton3 onClick={
      ()=>r.back({
        pathname:"/questions",
        query:{
          qnum:Number(qnum)+1 > qs.length - 1 ? qs.length-1 : Number(qnum)+1
        }
      })
    }>Previous</SmallButton3>
  }
</div>

<div className={styles.itemList2}>
  {
    Number(qnum) < qs.length - 1 &&
      <SmallButton3 onClick={
        ()=>r.push({
          pathname:"/questions",
          query:{
            qnum:Number(qnum)+1 > qs.length - 1 ? qs.length-1 : Number(qnum)+1
        }
      })
    }>Next</SmallButton3>
  }
</div>

{
  Number(qnum) >= qs.length - 1 &&
  <SmallButton4 onClick={
    ()=>r.push("/questions/results")
  }>Get Tips!</SmallButton4>
}

  </div>
}