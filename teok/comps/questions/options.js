import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeAnswers } from '../../pages/data/que_content';
// import styles from '../styles/question.module.css'


const OpsCont = styled.div`
top:800px;
left:65px;`;

const OpsTitle = styled.h3`
position:absolute;
width:260px;
top:64px;
left:92px;
font-family: 'Nanum Pen Script', cursive;
font-size:32px;
color:#515253;
`;

// const OpsButton = styled.button`

// `;

export default function Options({
  q="What is your fav fruit?",
  arr=[]
}){

  const r = useRouter();

  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 0;
  }

  return <OpsCont>
    <OpsTitle>{q}</OpsTitle>
    {
      arr.map((o,i)=><img src={o} onClick={
        ()=>ChangeAnswers(o, qnum)
      } /> )
    }
    </OpsCont>
}