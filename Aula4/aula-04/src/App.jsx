import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import { Galeria } from './pages/Galeria'
import { Contatos } from './pages/Contatos'
import ContatoDetalhes from './pages/ContatoDetalhes'


function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/galeria" element={<Galeria/>}/>
        <Route path="/contatos" element={<Contatos/>}/>
        <Route path="/contatos/:id" element={<ContatoDetalhes/>}/>

        <Route path="*" element={<h1>Erro 404 - Página não Encontrada</h1>}/>
      </Routes>
  )
}

export default App
