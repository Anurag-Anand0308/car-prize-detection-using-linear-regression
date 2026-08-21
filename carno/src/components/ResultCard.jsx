function ResultCard({ price }) {
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Number(price))
  return <div className="result-card"><div><p className="eyebrow"><span className="eyebrow-line" /> Estimated market value</p><strong>{formattedPrice}</strong><p className="result-note">Use this as a confident starting point for your next step.</p></div><span className="result-seal">CARNO<br />INDEX</span></div>
}

export default ResultCard
