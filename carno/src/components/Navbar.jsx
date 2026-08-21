function Navbar({ activeTab, onChange }) {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <button className="brand" onClick={() => onChange('home')} aria-label="Carno home">
          <span className="brand-mark">C</span>
          <span>carno<span className="brand-dot">.</span></span>
        </button>
        <nav className="nav-links" aria-label="Primary navigation">
          <button className={activeTab === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => onChange('home')}>Overview</button>
          <button className={activeTab === 'get-price' ? 'nav-link active' : 'nav-link'} onClick={() => onChange('get-price')}>Get your estimate</button>
        </nav>
        <button className="nav-cta" onClick={() => onChange('get-price')}>Start valuation <span aria-hidden="true">↗</span></button>
      </div>
    </header>
  )
}

export default Navbar
