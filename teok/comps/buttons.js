import styled from 'styled-components';

const BlueButton = styled.button`
    background:#69A5CA;
    text-align:center;
    font-size:24px;
    // display: flex;
    // justify-content: center;
    padding-right:5px;
    width:160px;
    height:60px;
    border-radius:50px;
    color:white;
    border-color:white;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
`
export function RelaxButton(){
    return <BlueButton>
        Relaxation
    </BlueButton>
}    

export function JournalButton(){
    return <BlueButton>
        Journal
    </BlueButton>
}    