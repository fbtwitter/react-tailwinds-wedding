import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
