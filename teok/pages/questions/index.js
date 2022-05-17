import { qs } from "../data/que_content";

import Options from "../../comps/questions/options";

import { useRouter } from "next/router";
import styles from '../../styles/tips.module.css';
import styled from 'styled-components';
import { LeftArrow } from "../../comps/buttons";
import { NavBar } from "../../comps/navbar";

const Bubble = styled.div`
position: relative;
top:106px;
left:60px;
width:300px;
`

const SmallButton3 = styled.button`
    background:#69A5CA;
    text-align:center;
    font-size:14px;
    padding-right:5px;
    width:109px;
    height:38px;
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

export default function Questions(){

  const r = useRouter();

  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 0;
  }

  return <div>
    {/* <hr />
    Answer Some Questions */}

    <Options 
      q={qs[qnum].title}
      arr={qs[qnum].ops}
    />
{/* className="preBtn" */}

<div className={styles.leftarrow}>
  <LeftArrow></LeftArrow>
</div>
{/* 
<div className={styles.nav}>
  <NavBar></NavBar>
</div> */}

<Bubble>
  <img src="/bubble.png" alt="Dialogue bubble" />   
  <text className={styles.bubbleText}>
  Which activities are you in the mood for?
  </text> 
  <img id={styles.logo} src="/logo.png" alt="Teok Logo" /> 
</Bubble>

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

<div className={styles.itemList1}>
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
  <button onClick={
    ()=>r.push("/questions/results")
  }>Go to Results!</button>
}

  </div>
}