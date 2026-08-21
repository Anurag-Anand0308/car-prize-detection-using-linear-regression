const features = [
  ['◈', 'Machine-led', 'Gradient boosting trained on real-world car data.'],
  ['↯', 'Instant clarity', 'A useful estimate arrives in moments, not days.'],
  ['⌁', 'Effortless input', 'A focused experience built around five details.'],
  ['◎', 'Built for decisions', 'A starting point for your next smart move.'],
]

function FeaturesSection() {
  return (
    <section className="features section-pad">
      <div className="container">
        <div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> What you get</p><h2>Simple on the surface.<br /><span>Serious underneath.</span></h2></div>
        <div className="feature-grid">{features.map(([icon, title, text]) => <article className="feature-card" key={title}><span className="feature-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  )
}

export default FeaturesSection
