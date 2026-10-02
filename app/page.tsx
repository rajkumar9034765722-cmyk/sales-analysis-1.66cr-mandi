export default function Page() {
  return (
    <div style={{background:'#0f1115', minHeight:'100vh', color:'white', padding:'24px', fontFamily:'system-ui'}}>
      <h1 style={{fontSize:'32px', fontWeight:'bold'}}>🌾 Mandi Dabwali Sales Pulse</h1>
      <p style={{opacity:0.7, marginTop:'8px'}}>FY 2023-24 | Rs. 1.66Cr Turnover | 52 Dealers | 97.2% Collection</p>
      
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'16px', marginTop:'24px'}}>
        <div style={{background:'#1a1d24', padding:'20px', borderRadius:'16px', border:'1px solid #2a2d36'}}>
          <div style={{opacity:0.5, fontSize:'12px'}}>REALIZED SALES</div>
          <div style={{fontSize:'28px', fontWeight:'bold', marginTop:'8px'}}>Rs. 166.00L</div>
          <div style={{color:'#22c55e', fontSize:'14px'}}>92.2% of Target</div>
        </div>
        <div style={{background:'#1a1d24', padding:'20px', borderRadius:'16px', border:'1px solid #2a2d36'}}>
          <div style={{opacity:0.5, fontSize:'12px'}}>TOTAL ORDERS</div>
          <div style={{fontSize:'28px', fontWeight:'bold', marginTop:'8px'}}>1,660</div>
          <div style={{opacity:0.7, fontSize:'14px'}}>Avg Rs. 90k</div>
        </div>
        <div style={{background:'#1a1d24', padding:'20px', borderRadius:'16px', border:'1px solid #2a2d36'}}>
          <div style={{opacity:0.5, fontSize:'12px'}}>THIS MONTH</div>
          <div style={{fontSize:'28px', fontWeight:'bold', marginTop:'8px'}}>1.59</div>
          <div style={{opacity:0.7, fontSize:'14px'}}>Rs. 10.14k YTD</div>
        </div>
        <div style={{background:'#1a1d24', padding:'20px', borderRadius:'16px', border:'1px solid #2a2d36'}}>
          <div style={{opacity:0.5, fontSize:'12px'}}>GROSS MARGIN</div>
          <div style={{fontSize:'28px', fontWeight:'bold', marginTop:'8px'}}>41.2%</div>
          <div style={{opacity:0.7, fontSize:'14px'}}>Product Margin</div>
        </div>
      </div>

      <div style={{background:'#1a1d24', padding:'20px', borderRadius:'16px', border:'1px solid #2a2d36', marginTop:'16px'}}>
        <div style={{fontWeight:'bold'}}>Product Split: Mustard 52L (31%) | Cotton 44.5L (27%) | Agro Inputs 35.2L (21%) | Kinnow Grading 22.3L (13%) | Hydraulics 12L (7%)</div>
        <div style={{fontWeight:'bold', marginTop:'16px', opacity:0.8}}>Geography: Mandi Dabwali 49% | Chautala-Sangaria 28% | GT Road 23%</div>
      </div>

      <div style={{textAlign:'center', marginTop:'32px', opacity:0.5, fontSize:'12px'}}>Northstar ERP Verified • Mandi Dabwali • Vercel Live</div>
    </div>
  )
}
