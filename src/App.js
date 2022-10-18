import { useState } from 'react'
import './App.css'

import Links from './components/links'
import Home from './components/home'
import Services from './components/services'
import ToDo from './components/todo'

export default function App() {

  const [page, setPage] = useState('home')
  let pageJS

  switch (page) {
    case 'home':
      pageJS = <Home setPage={setPage} />
      break
    case 'services':
      pageJS = <Services setPage={setPage} />
      break
    case 'todo':
      pageJS = <ToDo setPage={setPage} />
      break
    default:
      <Home setPage={setPage} />
  }

  return (
    <div className="App">
      <header className="App-header">
        <Links setPage={setPage} />
        {pageJS}
      </header>
    </div>
  )
}
