import styled from "styled-components"
import { Router, useRouter } from 'next/router';
import React, { useEffect } from "react";


const TeokNav = styled.nav`

`
 
export function NavBar(){
    const r = useRouter()
    var audio = document.getElementById('ai')
    return <TeokNav onClick={()=>
        {r.push("/start_relax");
        audio.pause()}
        }>
        <img src="/HomeBtn.png" alt="home"/>
    </TeokNav>
}