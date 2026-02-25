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
        <Route path="/qa" element={<QAPage />} />
        <Route path="/software" element={<SoftwarePage />} />
      </Routes>
    </>
  )
}
