export default function Home() {
  const cards = [
    { label: 'REALIZED SALES', val: '₹166.00L', sub: '92.2% of Target', color: '#22c55e' },
    { label: 'TOTAL ORDERS', val: '1,660', sub: 'Avg ₹90k', color: '#a1a1aa' },
    { label: 'THIS MONTH', val: '1.59', sub: '$10.14k YTD', color: '#a1a1aa' },
    { label: 'GROSS MARGIN', val: '41.2%', sub: 'Product Margin', color: '#a1a1aa' },
  ];
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', padding: '24px', fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>🌾 Mandi Dabwali Sales Pulse</h1>
      <p style={{ color: '#a1a1aa', marginTop: '4px' }}>FY 2023-24 | ₹1.66Cr Turnover | 52 Dealers | 97.2% Collection</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginTop: '20px' }}>
        {cards.map((c) => (
          <div key={c.label} style={{ background: '#18181b', padding: '16px', borderRadius: '14px', border: '1px solid #27272a' }}>
            <div style={{ fontSize: '11px', color: '#71717a' }}>{c.label}</div>
            <div style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '6px' }}>{c.val}</div>
            <div style={{ color: c.color, fontSize: '12px', marginTop: '4px' }}>{c.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ background: '#18181b', padding: '18px', borderRadius: '14px', border: '1px solid #27272a', marginTop: '16px', lineHeight: '1.6' }}>
        <b>Product Split (₹166L):</b> Tractor ₹52L (31%) | Cotton ₹44.5L (27%) | Agro Inputs ₹35.2L (21%) | Kinnow Grading ₹22.3L (13%) | Hydraulics ₹12L (7%)<br/><br/>
        <b>Geography:</b> Malout-Bathinda 35% | Chautala-Sangaria 28% | GT Road 23%
      </div>

      <p style={{ textAlign: 'center', color: '#52525b', fontSize: '11px', marginTop: '24px' }}>Northstar ERP Verified • Mandi Dabwali • Vercel Live</p>
    </main>
  );
}
