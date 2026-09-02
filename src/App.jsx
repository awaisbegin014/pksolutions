import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import JobDetail from './pages/JobDetail'
import Contact from './pages/Contact'
import JobApply from './pages/JobApply'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/careers/:slug/apply" element={<JobApply />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
