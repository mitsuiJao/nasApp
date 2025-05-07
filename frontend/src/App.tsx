import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import List from './pages/FileList'
import Upload from './pages/FileUpload'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  )
}

export default App

