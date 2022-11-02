// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

// import { useState } from 'react'

// // let nome = "José"
// // nome = "Carlitos"

// // const constante = "Eu não mudo"




// function App() {
//   const [outroNome, setOutroNome] = useState("Outro nome")

//   function clique() {
//     // nome = "Juliana"
//     // console.log(nome)

//     setOutroNome("Juliana")
//   }

//   return (
//     <>
//       <h1>{outroNome}</h1>
//       {/* <h1>{constante}</h1> */}
//       <button onClick={clique}>CLIQUE AQUI</button>
//     </>
//   )
// }

// export default App

import { useState } from 'react'

function App() {
  const [numero, setNumero] = useState(0)

  function clique() {
    setNumero(numero + 1)

    //ERRO NO VALOR - PROBLEMAS NA FILA DE EXECUÇÃO
    // setContador(contador + 1)
    // setContador(contador + 1)
    // setContador(contador + 1)

    // Assim funciona =)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)
  }
  function zera() {
    setNumero(0)
  }

  return (
    <>
      <h1>Contador: {numero}</h1>
      {/* <h1>{constante}</h1> */}
      <button onClick={clique}>Insere mais um</button>
      <button onClick={zera}>Zera</button>
    </>
  )
}

export default App