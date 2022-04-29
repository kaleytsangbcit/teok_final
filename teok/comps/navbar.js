import styled from "styled-components"
import { Router, useRouter } from 'next/router';


const TeokNav = styled.nav`

`
 
export function NavBar(){
    const r = useRouter();
    return <TeokNav onClick={
        ()=>r.push("/start_relax")}>
        <img src="/HomeBtn.png" alt="home"/>
    </TeokNav>
}