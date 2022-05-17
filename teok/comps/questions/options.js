import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ChangeAnswers } from '../../pages/data/que_content';
// import styles from '../styles/question.module.css'


const OpsCont = styled.div``;

const OpsTitle = styled.h3``;

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