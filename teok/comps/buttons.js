import styled from 'styled-components';

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

export function TwoMinButton(){
    return <BlueButton>
        2-min
    </BlueButton>
}    

export function FiveMinButton(){
    return <BlueButton>
        5-min
    </BlueButton>
}    

export function TenMinButton(){
    return <BlueButton>
        10-min
    </BlueButton>
}


export function StartButton(){
    return <GreenButton>
        Start
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