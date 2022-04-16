import styled from 'styled-components';
import { useRouter } from 'next/router';

const BlueButton = styled.button`
    background:#69A5CA;
    text-align:center;
    font-size:24px;
    padding-right:5px;
    width:160px;
    height:60px;
    border-radius:50px;
    color:white;
    border-color:white;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    display:flex;
    justify-content: center;
    margin:auto;
    margin-top:30px;

`

const GreenButton = styled.button`
    background:#9ED292;
    text-align:center;
    font-size:24px;
    padding-right:5px;
    width:160px;
    height:60px;
    border-radius:50px;
    color:#292929;
    border-color:white;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    display:flex;
    justify-content: center;
    margin:auto;
    margin-top:30px;

`
const SmallButton = styled.button`
    background:#9ED292;
    text-align:center;
    font-size:14px;
    padding-right:5px;
    width:120px;
    height:36px;
    border-radius:50px;
    color:#292929;
    border-color:white;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    display:flex;
    justify-content: center;
    margin:auto;
    margin-top:30px;
`


export function TwoMinButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push('/relaxation')}>
        2-min
    </BlueButton>
}    

export function FiveMinButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push('/relaxation')}>
        5-min
    </BlueButton>
}    

export function TenMinButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push('/relaxation')}>
        10-min
    </BlueButton>
}


export function StartButton(){
    return <GreenButton>
        Start
    </GreenButton>
}    

export function StartButtonWithIcon(){
    return <GreenButton>
        Start
        <img src="/play.png" alt="play icon" />  
    </GreenButton>
}

export function NextButton(){
    return <BlueButton>
        Next
    </BlueButton>
}

export function NatureButton(){
    return <BlueButton>
        Nature
    </BlueButton>
}

export function MusicButton(){
    return <BlueButton>
        Music
    </BlueButton>
}

export function GetTip(){
    return <SmallButton>
        Get Tips
    </SmallButton>
}
