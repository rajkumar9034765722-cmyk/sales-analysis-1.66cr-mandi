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

      {/* TITLE */}
      <div className="max-w-6xl mx-auto mt-6">
        <h2 className="text-3xl md:text-4xl font-black text-[#0f3923]">Sales Pulse Dashboard</h2>
        <p className="text-gray-500 text-sm mt-1">Rs. 1.66Cr Turnover Analysis • Northstar ERP Verified</p>
      </div>

      {/* KPI CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <p className="text-xs text-gray-400">TOTAL TURNOVER</p>
          <p className="text-2xl font-black text-[#0f3923] mt-1">₹1.66 Cr</p>
          <p className="text-xs text-green-600 mt-1">▲ 100% Verified</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <p className="text-xs text-gray-400">TOTAL DEALERS</p>
          <p className="text-2xl font-black text-[#0f3923] mt-1">52</p>
          <p className="text-xs text-gray-500 mt-1">Active Network</p>
        </div>
        <div className="bg-[#0f3923] rounded-2xl p-5 shadow-sm text-white">
          <p className="text-xs text-white/60">TOP PRODUCT</p>
          <p className="text-xl font-black mt-1">Mustard • 31%</p>
          <p className="text-xs text-white/60 mt-1">Rs. 51.8L Sales</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <p className="text-xs text-gray-400">2nd BEST</p>
          <p className="text-xl font-black text-[#0f3923] mt-1">Cotton • 27%</p>
          <p className="text-xs text-gray-500 mt-1">Rs. 45.2L Sales</p>
        </div>
      </div>

      {/* SALES BREAKDOWN */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 mt-3">
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <h3 className="font-bold text-[#0f3923]">Product Performance</h3>
          <div className="mt-5 space-y-3">
            <div><div className="flex justify-between text-sm"><span>Mustard</span><span className="font-bold">31%</span></div><div className="h-2 bg-gray-100 rounded-full mt-1"><div className="h-2 bg-[#0f3923] rounded-full" style={{width:"31%"}}></div></div></div>
            <div><div className="flex justify-between text-sm"><span>Cotton</span><span className="font-bold">27%</span></div><div className="h-2 bg-gray-100 rounded-full mt-1"><div className="h-2 bg-[#b89b4e] rounded-full" style={{width:"27%"}}></div></div></div>
            <div><div className="flex justify-between text-sm"><span>Wheat</span><span className="font-bold">22%</span></div><div className="h-2 bg-gray-100 rounded-full mt-1"><div className="h-2 bg-green-400 rounded-full" style={{width:"22%"}}></div></div></div>
            <div><div className="flex justify-between text-sm"><span>Others</span><span className="font-bold">20%</span></div><div className="h-2 bg-gray-100 rounded-full mt-1"><div className="h-2 bg-gray-300 rounded-full" style={{width:"20%"}}></div></div></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <h3 className="font-bold text-[#0f3923]">Key Insight</h3>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Mandi Dabwali me Mustard aur Cotton ne milke <b>58% sales</b> cover kiya hai.
            Top 5 dealers ka contribution 42% hai. Ye dashboard Northstar ERP se 100% verified hai.
            <br/><br/>
            Recommendation: Mustard stock October se pehle double karna best rahega.
          </p>
          <div className="mt-6 bg-[#f8f9f3] p-3 rounded-xl text-xs">
            <span className="font-bold">Powered by DataMind AI</span> • AI-based Mandi Forecasting coming soon
          </div>
        </div>
      </div>

      <p className="text-center text-[11px] text-gray-400 mt-8">© 2026 DataMind AI • Mandi Intelligence • Panipat, Haryana</p>
    </div>
  );
}
