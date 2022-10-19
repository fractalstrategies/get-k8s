import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/layout"

import Home from './pages/home'
import Services from './pages/services'
import ToDo from './pages/todo'
import NoPage from "./pages/nopage"

import './App.css'

export default function App() {

  return (
    <div className="App" style={{
      height: '100vh',
      backgroundColor: '#282c34',
      color: 'white',
      textAlign: 'center',
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="todo" element={<ToDo />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
