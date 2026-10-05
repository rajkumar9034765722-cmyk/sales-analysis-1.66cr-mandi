"use client"
import { useState } from "react"
import Papa from "papaparse"

export default function Home() {
  const [data, setData] = useState<any[]>([])
  const [fileName, setFileName] = useState("")

  const handleFile = (e: any) => {
    const file = e.target.files[0]
    if (!file) return
    setFileName(file.name)
    Papa.parse(file, {
      header: true,
      complete: (results: any) => {
        setData(results.data.slice(0, 50))
      }
    })
  }

  return (
    <div style={{minHeight:"100vh", background:"#f8f9f3", fontFamily:"sans-serif"}}>
      {/* Header */}
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"30px 20px 10px"}}>
        <img src="/logo.png" alt="DataMind AI" style={{width:"280px", maxWidth:"80%", height:"auto"}} />
        <h1 style={{fontSize:"38px", fontWeight:"900", color:"#0f3923", marginTop:"10px"}}>DataMind AI</h1>
        <p style={{letterSpacing:"6px", color:"#b89b4e", fontSize:"12px"}}>MANDI INTELLIGENCE</p>
      </div>

      {/* Upload Box */}
      <div style={{maxWidth:"700px", margin:"30px auto", background:"white", padding:"24px", borderRadius:"16px", boxShadow:"0 4px 20px rgba(0,0,0,0.06)", border:"1px solid #e8e8e8"}}>
        <h2 style={{fontSize:"18px", fontWeight:"700", color:"#0f3923", marginBottom:"12px"}}>66cr Mandi Sales Upload</h2>
        <input type="file" accept=".csv" onChange={handleFile} style={{width:"100%", padding:"10px", border:"1px dashed #b89b4e", borderRadius:"8px", background:"#fffef5"}} />
        {fileName && <p style={{marginTop:"10px", fontSize:"13px", color:"#0f3923"}}>File: {fileName} | Rows: {data.length}</p>}
      </div>

      {/* Table Preview */}
      {data.length > 0 && (
        <div style={{maxWidth:"900px", margin:"0 auto 40px", background:"white", borderRadius:"16px", overflow:"hidden", boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%", borderCollapse:"collapse", fontSize:"13px"}}>
              <thead style={{background:"#0f3923", color:"white"}}>
                <tr>
                  {Object.keys(data[0] || {}).map((k) => <th key={k} style={{padding:"10px", textAlign:"left", whiteSpace:"nowrap"}}>{k}</th>)}
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i} style={{borderBottom:"1px solid #eee", background: i%2==0? "#fff" : "#f8f9f3"}}>
                    {Object.values(row).map((v: any, j) => <td key={j} style={{padding:"8px 10px"}}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <p style={{textAlign:"center", marginBottom:"30px", fontSize:"11px", color:"#999"}}>Powered by DataMind AI • Mandi Dabwali</p>
    </div>
  )
}
