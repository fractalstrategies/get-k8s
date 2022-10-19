import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/layout"

import Home from './pages/home'
import Services from './pages/services'
import Calculator from './pages/calculator'
import ToDo from './pages/todo'
import NoPage from "./pages/nopage"

import './App.css'

export default function App() {

  return (
    <div className="App" style={{
      minHeight: '100vh',
      backgroundColor: '#282c34',
      color: 'white',
      textAlign: 'center',
    }}>
      <BrowserRouter>
      {/* <BrowserRouter basename='/get-k8s'> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="todo" element={<ToDo />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
