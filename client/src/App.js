import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Catalog from './views/Catalog'
import NotFound from './views/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
