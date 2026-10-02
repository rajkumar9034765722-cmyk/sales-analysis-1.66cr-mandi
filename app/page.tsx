"use client"
export default function Home() {
  return (
    <div style={{minHeight:"100vh", background:"#f8f9f3", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <img src="/logo.png" alt="DataMind AI" style={{width:"380px", maxWidth:"90%", height:"auto"}} />
      <h1 style={{fontSize:"42px", fontWeight:"900", color:"#0f3923", marginTop:"20px", fontFamily:"sans-serif"}}>DataMind AI</h1>
      <p style={{letterSpacing:"6px", color:"#b89b4e", marginTop:"4px"}}>Mandi Intelligence</p>
      <p style={{marginTop:"30px", fontSize:"12px", color:"#888"}}>Powered by DataMind AI • Mandi Dabwali</p>
    </div>
  )
}
