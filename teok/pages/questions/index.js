import { qs } from "../data/que_content";

import Options from "../../comps/questions/options";

import { useRouter } from "next/router";
// import styles from '../../styles/question.module.css';
import styled from 'styled-components';
import { SmallBtn, SmallBtn2 } from "../../comps/buttons";


export default function Questions(){

  const r = useRouter();

  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 0;
  }

  return <div>
    <hr />
    Answer Some Questions

    <Options 
      q={qs[qnum].title}
      arr={qs[qnum].ops}
    />
{/* className="preBtn" */}
{
  Number(qnum) < qs.length - 1 &&
  <SmallBtn2>Previous</SmallBtn2>
}

{
  Number(qnum) < qs.length - 1 &&
    <SmallBtn >Next</SmallBtn>
}
    

{
  Number(qnum) >= qs.length - 1 &&
  <button onClick={
    ()=>r.push("/questions/results")
  }>Go to Results!</button>
}

  </div>
}