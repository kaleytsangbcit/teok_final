import styled from "styled-components"
import { Router, useRouter } from 'next/router';
import React, { useEffect } from "react";


const TeokNav = styled.nav`

`
 
export function NavBar(){
    const r = useRouter()
    return <TeokNav onClick={()=>
        {r.push("/start_relax");
        var audio = document.getElementById('ai')
        audio.pause()}
        }>
        <img src="/HomeBtn.png" alt="home"/>
    </TeokNav>
}