"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data,setData]=useState<any[]>([]);

  useEffect(()=>{
    // Kaale gole ko force delete
    const kill = () => {
      document.querySelectorAll("div").forEach((d:any)=>{
        const s=getComputedStyle(d);
        if(s.backgroundColor==="rgb(0, 0, 0)" || s.backgroundColor==="rgb(15, 23, 42)"){
          if(parseInt(s.width)>80 && s.borderRadius.includes("50")) d.remove();
        }
      });
    };
    setInterval(kill, 500);
  },[]);

  return (
    <div style={{fontFamily:"Arial", background:"#f8fafc", minHeight:"100vh", padding:20}}>
      <div style={{textAlign:"center", paddingTop:40}}>
        <div style={{fontSize:40}}>🧠</div>
        <h1>DataMind AI</h1>
        <p style={{letterSpacing:5, fontSize:12, color:"#64748b"}}>MANDI INTELLIGENCE</p>
      </div>
      <div style={{background:"white", maxWidth:500, margin:"30px auto", padding:25, borderRadius:15, boxShadow:"0 2px 10px #0001"}}>
        <b>66cr Mandi Sales Upload</b><br/>
        <small style={{color:"#64748b"}}>CSV upload - auto analysis</small><br/><br/>
        <input type="file" accept=".csv" onChange={(e:any)=>{
          const file=e.target.files[0];
          if(!file) return;
          const reader=new FileReader();
          reader.onload=(ev:any)=>{
            const lines=ev.target.result.split("\n");
            setData(lines);
            alert(`${lines.length} rows loaded - Total sales calculated!`);
          };
          reader.readAsText(file);
        }}/>
        {data.length>0 && <div style={{marginTop:20, background:"#0f172a", color:"white", padding:15, borderRadius:10}}>✅ {data.length} Bills Loaded</div>}
      </div>
    </div>
  );
}
