import './App.css'
import { Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import Landing from './views/Landing'
import Catalog from './views/Catalog'
import NotFound from './views/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
