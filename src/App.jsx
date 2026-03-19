import { LoginPage } from './loginpage.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ListPage } from './listpage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/listitems" element={<ListPage />}/>
        <Route path="/listitems/:id" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
