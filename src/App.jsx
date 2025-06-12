import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Testimonials from './pages/Testimonials'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Courses from './pages/Courses'
import WhyChoosing from './pages/ChoosingUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/choosingUs" element={<WhyChoosing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
