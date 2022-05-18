import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeAnswers } from '../../pages/data/que_content';
import { useState } from 'react';
// import styles from '../styles/question.module.css'



const OpsCont = styled.div`
display:flex;
flex-direction:row;
position: absolute;
top: 466px;
margin:auto;
margin-left: auto;
margin-right: auto;
padding-left:15px;
align-item: center;
`;



const OpsTitle = styled.h3`
position:absolute;
width:260px;
top:64px;
left:92px;
font-family: 'Nanum Pen Script', cursive;
font-size:32px;
color:#515253;
`;

const OpsDiv = styled.div`
background-color: #FFFFFF;
width: 160px;
height: 125px;
border-radius: 35px;
position: relative;
display:flex;
justify-content: center;
padding:10px;
margin:10px;
`

// const OpsButton = styled.button`

// `;

export default function Options({
  q="What is your fav fruit?",
  arr=[]
}){

  const r = useRouter();
  const [sel, setSel] = useState(-1);

  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 0;
  }

  function handleClick(o, i){
    ChangeAnswers(o, qnum)
    setSel(i)
  }
  return <div>
    
    <OpsTitle>{q}</OpsTitle>
    <OpsCont>
    {
      arr.map((o,i)=><OpsDiv style={{background: i == sel ? "pink": "white"}}><img src={o} onClick={
        ()=>handleClick(o, i)
      } /></OpsDiv>)
    }
    </OpsCont>
    </div>
}