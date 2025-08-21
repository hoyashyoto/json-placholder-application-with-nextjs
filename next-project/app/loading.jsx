'use client';

import { useEffect, useState } from "react";

export default function loading(){
    const [dots,setDots] = useState(1)
    useEffect(()=>{
        let adding = setTimeout(()=>{
            setDots(p=>p+1)
        },250)
    })
    return(
        <div style={{height:'100%',textAlign:"center"}}>
                    <h1 style={{fontSize:'64px'}}>Loading{'.'.repeat(dots)}</h1>
        </div>    
    )
}