function AboutSection() {
  return (
    <section className="about section-pad">
      <div className="container about-grid">
        <p className="eyebrow"><span className="eyebrow-line" /> Why Carno</p>
        <div>
          <h2>A better starting point for your next <span>conversation.</span></h2>
          <p className="body-copy">Selling, buying, or just curious? Carno gives you a useful market signal before you make a decision. Add the essentials, and our model does the heavy lifting in seconds.</p>
          <div className="process-list">
            <div><span>01</span><strong>Tell us about the car</strong><p>Share five details that shape a vehicle&apos;s value.</p></div>
            <div><span>02</span><strong>Let the model work</strong><p>Our trained algorithm reads the patterns in the market.</p></div>
            <div><span>03</span><strong>Move with clarity</strong><p>Get a grounded estimate you can use right away.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
