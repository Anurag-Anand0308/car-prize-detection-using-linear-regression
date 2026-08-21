import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import PredictionForm from './components/PredictionForm'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const changeTab = (tab) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <div className="app-shell">
    <Navbar activeTab={activeTab} onChange={changeTab} />
    <main>{activeTab === 'home' ? <><Hero onTryNow={() => changeTab('get-price')} /><AboutSection /><FeaturesSection /></> : <PredictionForm />}</main>
    <Footer />
  </div>
}

export default App