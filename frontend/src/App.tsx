import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import List from './pages/filelist'
import Upload from './pages/fileupload'
import Header from './components/header'

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

