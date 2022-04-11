import styled from 'styled-components';
import { useRouter } from 'next/router';

const Bubble = styled.div`
position: absolute;
top:130px;
left:136px;
`;

export default function ShowingBubble() {
  return <Bubble>
    <img src="/bubble.png" alt="Dialogue bubble" />   
    <text>
      Hello! I am Teok!</text>  
  </Bubble>    
}



