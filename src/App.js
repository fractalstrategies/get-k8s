import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Layout from "./pages/layout"
import NoPage from "./pages/nopage"

import Home from './pages/home'
import Services from './pages/services'
import ToDo from './pages/todo'

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  )
}
