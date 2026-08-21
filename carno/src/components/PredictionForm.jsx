import { useState } from 'react'
import axios from 'axios'
import ResultCard from './ResultCard'

const initialForm = { Age: '', 'Engine HP': '', 'Engine Cylinders': '', 'Transmission Type': '', Driven_Wheels: '' }
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function PredictionForm() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setResult(null)
    setLoading(true)
    try {
      const payload = { ...form, Age: Number(form.Age), 'Engine HP': Number(form['Engine HP']), 'Engine Cylinders': Number(form['Engine Cylinders']) }
      const response = await axios.post(`${apiUrl}/predict`, payload)
      setResult(response.data.predicted_price)
    } catch (requestError) {
      setError(requestError.response?.data?.error || 'We could not reach the valuation model. Check your API and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="prediction-page section-pad">
      <div className="container prediction-layout">
        <div className="prediction-intro"><p className="eyebrow"><span className="eyebrow-line" /> The quick valuation</p><h1>Let&apos;s put a number<br />on <em>your drive.</em></h1><p>Tell us the essentials. No account, no noise, just a market estimate built to get you moving.</p><div className="model-note"><span className="model-pulse" /><span><strong>Model online</strong><small>Ready for a new valuation</small></span></div></div>
        <div className="form-shell">
          <div className="form-header"><span>CAR DETAILS</span><span>01 / 01</span></div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>Car age <span>years</span><input type="number" name="Age" min="0" max="100" step="1" value={form.Age} onChange={updateField} placeholder="e.g. 5" required /></label>
              <label>Engine power <span>HP</span><input type="number" name="Engine HP" min="0" max="3000" step="1" value={form['Engine HP']} onChange={updateField} placeholder="e.g. 180" required /></label>
              <label>Engine cylinders <span>count</span><select name="Engine Cylinders" value={form['Engine Cylinders']} onChange={updateField} required><option value="">Select count</option>{[3, 4, 5, 6, 8, 10, 12].map((value) => <option key={value} value={value}>{value} cylinders</option>)}</select></label>
              <label>Transmission <span>type</span><select name="Transmission Type" value={form['Transmission Type']} onChange={updateField} required><option value="">Select type</option><option>Automatic</option><option>Manual</option><option>Automated_manual</option><option>Direct_drive</option></select></label>
              <label className="full-field">Driven wheels <span>layout</span><select name="Driven_Wheels" value={form.Driven_Wheels} onChange={updateField} required><option value="">Select layout</option><option>front wheel drive</option><option>rear wheel drive</option><option>all wheel drive</option><option>four wheel drive</option></select></label>
            </div>
            {error && <p className="form-error" role="alert">{error}</p>}
            <button className="button button-submit" type="submit" disabled={loading}>{loading ? <><span className="spinner" /> Calculating...</> : <>Predict my price <span aria-hidden="true">↗</span></>}</button>
          </form>
          {result !== null && <ResultCard price={result} />}
        </div>
      </div>
    </section>
  )
}

export default PredictionForm
