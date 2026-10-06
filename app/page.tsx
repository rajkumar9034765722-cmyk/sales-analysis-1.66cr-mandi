"use client";
import { useState } from "react";
import Papa from "papaparse";

export default function Home(){
  const [total,setTotal]=useState(0);
  const [count,setCount]=useState(0);

  const onFile=(e:any)=>{
    const f=e.target.files[0];
    if(!f) return;
    Papa.parse(f,{header:true,complete:(res:any)=>{
      let t=0;
      res.data.forEach((r:any)=>{
        const v=Object.values(r)[1];
        t+=parseFloat(String(v).replace(/[^0-9.-]/g,""))||0;
      });
      setTotal(t); setCount(res.data.length);
    }});
  }

  return(
    <div style={{background:"#f1f5f9", minHeight:"100vh", padding:"20px"}}>
      <h1 style={{textAlign:"center"}}>DataMind AI<br/><span style={{fontSize:"12px", letterSpacing:"5px"}}>MANDI INTELLIGENCE</span></h1>
      <div style={{background:"white", maxWidth:"600px", margin:"20px auto", padding:"20px", borderRadius:"12px"}}>
        <h3>66cr Mandi Sales Upload</h3>
        <p style={{fontSize:"12px", color:"gray"}}>CSV upload karo - auto analysis</p>
        <input type="file" accept=".csv" onChange={onFile} style={{marginTop:"15px"}} />
        {count>0 && <div style={{marginTop:"20px", background:"#0f172a", color:"white", padding:"15px", borderRadius:"10px"}}>
          <div>Total: ₹{(total/10000000).toFixed(2)} Cr</div>
          <div>{count} bills | {((total/660000000)*100).toFixed(1)}% of 66Cr</div>
        </div>}
      </div>
    </div>
  )
}
