import styled from 'styled-components';
import { useRouter } from 'next/router';
import { RelaxButton } from '../comps/buttons';
import { JournalButton } from '../comps/buttons';


const Bubble = styled.div`
position: absolute;
top:130px;
left:136px;
`



export function ShowBubble() {
  return <Bubble>
    <img src="/bubble.png" alt="Dialogue bubble" />   
    <text>
      Hi Carol!
    </text>  
  </Bubble>
}

export default function Home(){
  return <RelaxButton></RelaxButton>,
  <JournalButton></JournalButton>
}

// export default function Journal(){
//   return <JournalButton></JournalButton>
// }