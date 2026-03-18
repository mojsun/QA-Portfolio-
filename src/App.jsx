import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import QAPage from './pages/QAPage'
import SoftwarePage from './pages/SoftwarePage'

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        {/* QA projects – new recruiter-friendly URL, old path kept for compatibility */}
        <Route path="/qa" element={<QAPage />} />
        <Route path="/qa-projects" element={<QAPage />} />
        {/* Software projects – new recruiter-friendly URL, old path kept for compatibility */}
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/software-projects" element={<SoftwarePage />} />
      </Routes>
    </>
  )
}
