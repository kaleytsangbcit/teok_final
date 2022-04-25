import styled from 'styled-components';
import { Router, useRouter } from 'next/router';

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

const SmallButton2 = styled.button`
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
    margin:auto;
    margin-top:30px;
`

const Arrow = styled.div`
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
    const r = useRouter();
    return <GreenButton onClick={
        ()=>r.push("/questionA")}>
        Start
    </GreenButton>
}    



export function StartButtonWithIcon(){

    // const animation = (event) => {
    //     event.target.classList.add('breathingcircle');
    //     innertext = "Pause";
    // }

    return <GreenButton 
    // onClick={animation}
    >
        Start
        <img src="/play.png" alt="play icon" />  
    </GreenButton>
}



export function NextButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push("/start_relax")}>
        Next
    </BlueButton>
}

export function NatureButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push("/nature")}>
        Nature
    </BlueButton>
}

export function MusicButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push("/music")}>
        Music
    </BlueButton>
}

export function GetTip(){
    const r = useRouter();
    return <SmallButton onClick={
        ()=>r.push("/tips")}>
        Get Tips
    </SmallButton>
}

export function LeftArrow(){
    const r = useRouter();
    return <Arrow onClick={
        ()=> r.back()}>
        <img src="/leftarrow.png" alt="back icon" /> 
    </Arrow>
}

export function NextButton2(){
    const r = useRouter();
    return <SmallButton2 onClick={
        ()=>r.push("/relax_duration")}>
            Next
    </SmallButton2>
}
