import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Subscribe from './pages/Subscribe'
import Unsubscribe from './pages/Unsubscribe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
