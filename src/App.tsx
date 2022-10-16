import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import BrandPage from './pages/BrandPage/BrandPage'
import HomePage from './pages/HomePage/HomePage'
import './styles/main.scss'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands/:brand" element={<BrandPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
