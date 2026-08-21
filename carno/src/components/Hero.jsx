function Hero({ onTryNow }) {
  return (
    <section className="hero section-pad">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Data-informed valuations</p>
          <h1>Know what your car is <em>really</em> worth.</h1>
          <p className="hero-lede">A clearer way to price your next move. Carno uses a gradient boosting model trained on real-world listings to turn a few details into a confident estimate.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={onTryNow}>Get your estimate <span aria-hidden="true">↗</span></button>
            <span className="trust-note"><strong>01</strong> Five inputs. One clear answer.</span>
          </div>
        </div>
        <div className="hero-visual reveal reveal-delay">
          <div className="visual-tag">THE CARNO INDEX <span>● LIVE MODEL</span></div>
          <div className="car-art" aria-label="Illustration of a modern car" role="img">
            <div className="road-line" />
            <div className="car-body"><div className="car-window" /><div className="car-hood" /></div>
            <div className="wheel wheel-left" /><div className="wheel wheel-right" />
          </div>
          <div className="visual-stat"><span>MODEL CONFIDENCE</span><strong>94.8%</strong><small>Gradient Boosting · v2.4</small></div>
        </div>
      </div>
      <div className="container hero-meta"><span>USED CAR VALUATION / 2026</span><span>Scroll to explore ↓</span></div>
    </section>
  )
}

export default Hero
