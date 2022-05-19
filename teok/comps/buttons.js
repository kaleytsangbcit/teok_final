import styled from 'styled-components';
import { Router, useRouter } from 'next/router';
// import Options from './questions/options';
// import { qs } from '../pages/data/que_content';



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
const BlueButton2 = styled.button`
    background:#69A5CA;
    text-align:center;
    font-size:20px;
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
const GreenButtonChangeMusic = styled.button`
    background:#9ED292;
    text-align:center;
    font-size:18px;
    padding-right:5px;
    width:180px;
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

const GetTipButton = styled.button`
    background:#9ED292;
    text-align:center;
    font-size:18px;
    font-weight: bold;
    padding-right:5px;
    width:150px;
    height:50px;
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
    font-size:16px;
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

const Arrow = styled.div`
`

// const SmallButton3 = styled.button`
//     background:#69A5CA;
//     text-align:center;
//     font-size:14px;
//     padding-right:5px;
//     width:109px;
//     height:38px;
//     border-radius:50px;
//     color:#FFFFFF;
//     border-color:white;
//     font-family: 'Montserrat', sans-serif;
//     align-items: center;
//     display:flex;
//     justify-content: center;
//     margin:25px;
//     margin-top:30px;
// `

export function TwoMinButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push('/relax_twomin')}>
        2-min
    </BlueButton>
}    

export function FiveMinButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push('/relax_fivemin')}>
        5-min
    </BlueButton>
}    

export function TenMinButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push('/relax_tenmin')}>
        10-min
    </BlueButton>
}


export function StartButton(){
    const r = useRouter();
    return <GreenButton onClick={
        ()=>r.push("/questions")}>
        Start
    </GreenButton>
}    


export function ChangeMusicButton(){
    const r = useRouter();
    return <GreenButtonChangeMusic onClick={()=>
    {r.push("/start_relax");
    var audio = document.getElementById('ai');
    audio.pause()}
    }>
        Change Music
    </GreenButtonChangeMusic>
}  


// export function StartButtonWithIcon(){

//     const animation = (event) => {
//         // event.target.classList.add('breathingcircle');
//         //innertext = "Pause";
//         console.log("click");
//     }

//     return <GreenButton 
//         onClick={animation}
//     >
//         Start
//         <img src="/play.png" alt="play icon" />  
//     </GreenButton>
// }


export function NextButton(){
    const r = useRouter();
    return <BlueButton onClick={
        ()=>r.push("/start_relax")}>
        Next
    </BlueButton>
}

export function NatureButton(){
    const r = useRouter();
    return <BlueButton2 onClick={
        ()=>r.push("/nature")}>
        Natural
    </BlueButton2>
}

export function MusicButton(){
    const r = useRouter();
    return <BlueButton2 onClick={
        ()=>r.push("/music")}>
        Instrumental
    </BlueButton2>
}

export function GetTip(){
    const r = useRouter();
    return <GetTipButton onClick={
        ()=>r.push("/tips")}>
        Get Tips
    </GetTipButton>
}

export function LeftArrow(){
    const r = useRouter();
    return <Arrow onClick={
        ()=> r.back()}>
        <img src="/leftarrow.png" alt="back icon" /> 
    </Arrow>
}
export function LeftArrowForMusic(){
    const r = useRouter();
    return <Arrow onClick={
        ()=> {r.back(); 
        var audio = document.getElementById('ai');
        audio.pause()}}>
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

// export function SmallBtn(){

//     const r = useRouter();
//     return <SmallButton3 onClick={
//         ()=>r.push("/questionB")}>
//             Next
//     </SmallButton3>
// }
// export function SmallBtn2(){
//     const r = useRouter();
//     return <SmallButton3 onClick={
//         ()=>r.push("/questionA")}>
//             Previous
//     </SmallButton3>
// }
// export function SmallBtn3(){

//     const r = useRouter();
//     return <SmallButton3 onClick={
//         ()=>r.push("/questionC")}>
//             Next
//     </SmallButton3>
// }

// export function SmallBtn4(){
//     const r = useRouter();
//     return <SmallButton3 onClick={
//         ()=>r.push("/questionD")}>
//             Next
//     </SmallButton3>
// }

// export function SmallBtn5(){
//     const r = useRouter();
//     return <SmallButton3 onClick={
//         ()=>r.push("/relax_duration")}>
//             Next
//     </SmallButton3>
// }
