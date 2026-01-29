import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import ComingSoon from '@/pages/ComingSoon'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/accommodation" element={<ComingSoon />} />
        <Route path="/login" element={<ComingSoon />} />
        <Route path="/register" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
