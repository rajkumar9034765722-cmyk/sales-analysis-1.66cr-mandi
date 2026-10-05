"use client";
import { useState, useMemo } from "react";
import Papa from "papaparse";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [fileName, setFileName] = useState("");

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => setData(results.data as any[]),
    });
  };

  const stats = useMemo(() => {
    if (!data.length) return null;
    // Try to find amount/sales column automatically
    const keys = Object.keys(data[0] || {});
    const amountKey = keys.find(k => /amount|sale|total|price|rate|value/i.test(k)) || keys[1];
    const customerKey = keys.find(k => /customer|party|name|client/i.test(k)) || keys[0];

    let total = 0;
    const customerMap: any = {};
    data.forEach((row:any) => {
      const val = parseFloat((row[amountKey] || "0").toString().replace(/[^0-9.-]/g,"")) || 0;
      total += val;
      const cust = row[customerKey] || "Unknown";
      customerMap[cust] = (customerMap[cust] || 0) + val;
    });

    const topCustomers = Object.entries(customerMap).sort((a:any,b:any)=>b[1]-a[1]).slice(0,5);
    return { total, amountKey, customerKey, topCustomers, keys, count: data.length };
  }, [data]);

  return (
    <div style={{minHeight:"100vh", background:"#f8fafc", fontFamily:"Inter, sans-serif", color:"#1e293b"}}>
      <div style={{maxWidth:"1100px", margin:"0 auto", padding:"30px 20px"}}>

        {/* Header */}
        <div style={{textAlign:"center", marginBottom:"30px"}}>
          <div style={{fontSize:"50px"}}>🧠</div>
          <h1 style={{fontSize:"36px", fontWeight:"800", margin:"10px 0 0"}}>DataMind AI</h1>
          <p style={{letterSpacing:"6px", color:"#64748b", fontSize:"12px", marginTop:"5px"}}>MANDI INTELLIGENCE</p>
        </div>

        {/* Upload Card */}
        <div style={{background:"white", borderRadius:"16px", padding:"24px", boxShadow:"0 4px 20px rgba(0,0,0,0.06)", border:"1px solid #e2e8f0"}}>
          <h2 style={{fontSize:"18px", fontWeight:"700"}}>66cr Mandi Sales Upload</h2>
          <p style={{fontSize:"13px", color:"#64748b"}}>CSV file upload karo - auto analysis ho jayega</p>

          <label style={{marginTop:"15px", display:"block", border:"2px dashed #cbd5e1", borderRadius:"12px", padding:"20px", textAlign:"center", cursor:"pointer", background:"#f8fafc"}}>
            <input type="file" accept=".csv" onChange={handleFile} style={{display:"none"}} />
            <div style={{fontWeight:"600"}}>{fileName? `✅ ${fileName}` : "Choose File"}</div>
            <div style={{fontSize:"12px", color:"#94a3b8", marginTop:"4px"}}>{fileName? `${data.length} rows loaded` : "No file chosen - CSV only"}</div>
          </label>

          {stats && (
            <>
              {/* Stats Grid */}
              <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:"15px", marginTop:"25px"}}>
                <div style={{background:"#0f172a", color:"white", borderRadius:"12px", padding:"18px"}}>
                  <div style={{fontSize:"12px", opacity:0.7}}>TOTAL SALES</div>
                  <div style={{fontSize:"26px", fontWeight:"800", marginTop:"5px"}}>₹ {(stats.total/10000000).toFixed(2)} Cr</div>
                  <div style={{fontSize:"12px", opacity:0.7, marginTop:"4px"}}>₹ {stats.total.toLocaleString("en-IN")} • {stats.count} bills</div>
                </div>
                <div style={{background:"#ecfdf5", borderRadius:"12px", padding:"18px", border:"1px solid #a7f3d0"}}>
                  <div style={{fontSize:"12px", color:"#065f46"}}>AVG BILL</div>
                  <div style={{fontSize:"22px", fontWeight:"800", color:"#047857"}}>₹ {(stats.total/stats.count).toLocaleString("en-IN", {maximumFractionDigits:0})}</div>
                  <div style={{fontSize:"12px", color:"#065f46", marginTop:"4px"}}>Detected: {stats.amountKey}</div>
                </div>
                <div style={{background:"#eff6ff", borderRadius:"12px", padding:"18px", border:"1px solid #bfdbfe"}}>
                  <div style={{fontSize:"12px", color:"#1e40af"}}>PROGRESS TO 66CR</div>
                  <div style={{fontSize:"22px", fontWeight:"800", color:"#1d4ed8"}}>{((stats.total/660000000)*100).toFixed(1)}%</div>
                  <div style={{height:"6px", background:"#dbeafe", borderRadius:"10px", marginTop:"8px"}}>
                    <div style={{height:"100%", width:`${Math.min(100,(stats.total/660000000)*100)}%`, background:"#2563eb", borderRadius:"10px"}}></div>
                  </div>
                </div>
              </div>

              {/* Top Customers */}
              <div style={{marginTop:"25px"}}>
                <h3 style={{fontSize:"15px", fontWeight:"700"}}>Top 5 Customers ({stats.customerKey})</h3>
                <div style={{marginTop:"10px"}}>
                  {stats.topCustomers.map(([name, amt]:any, i:number) => (
                    <div key={i} style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #f1f5f9", fontSize:"14px"}}>
                      <span><b>#{i+1}</b> {name}</span>
                      <span style={{fontWeight:"700"}}>₹ {Number(amt).toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table Preview */}
              <div style={{marginTop:"25px"}}>
                <h3 style={{fontSize:"15px", fontWeight:"700"}}>Data Preview (20 rows)</h3>
                <div style={{overflow:"auto", maxHeight:"400px", marginTop:"10px", border:"1px solid #e2e8f0", borderRadius:"8px"}}>
                  <table style={{width:"100%", fontSize:"12px", borderCollapse:"collapse"}}>
                    <thead style={{position:"sticky", top:0, background:"#f8fafc"}}>
                      <tr>{stats.keys.map((k:string)=><th key={k} style={{padding:"10px", textAlign:"left", borderBottom:"1px solid #e2e8f0"}}>{k}</th>)}</tr>
                    </thead>
                    <tbody>
                      {data.slice(0,20).map((row:any,i:number)=><tr key={i} style={{background:i%2?"white":"#f8fafc"}}>{stats.keys.map((k:string)=><td key={k} style={{padding:"8px", borderBottom:"1px solid #f1f5f9"}}>{row[k]}</td>)}</tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>

        <p style={{textAlign:"center", marginTop:"30px", fontSize:"11px", color:"#94a3b8"}}>Powered by DataMind AI • Mandi Dabwali • 66Cr Target</p>
      </div>
    </div>
  );
}
