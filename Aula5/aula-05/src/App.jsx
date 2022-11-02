import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contato from './componentes/Contato'
import Professor from './componentes/Professor'

function App() {
  const [count, setCount] = useState(0)

  const nome = "João"
  const nome2 = "Carlos"
  const nome3 = "Amanda"

  const nomes = ["João", "Carlos", "Amanda"]

  // nomes.forEach((item, index) => {
  //   // if (index > 1) return 
  //   console.log(index)
  //   console.log(item)
  // })

  const novoArray = nomes.map( (nome, index) => {
    if (index > 1) return
    console.log(nome)
    return <h1>nome</h1>
  })

  console.log("novoArray", novoArray)


  const coisas = ["Pedro", null, true]
  const arrayDeObjetos = [
    { nome: "João", id: 1, materia: ["WEB", "Mobile"] },
    { nome: "Carlos", id: 2 },
    { nome: "Amanda", id: 3 },
  ]

  // console.log(nomes)
  // console.log(nomes.length)
  // console.log(nomes[0])

  // console.log(arrayDeObjetos);
  // console.log(arrayDeObjetos[0].nome);
  // console.log(arrayDeObjetos[0].materia);

  const arrayDeContatos = [
    { nome: "João Felipe", id: 1,  email: "joao@serratec.com"},
    { nome: "José Pedro", id: 2, email: "jose@serratec.com"},
    { nome: "Poema Maria", id: 3, email: "poema@serratec.com"},
  ]

  const arrayDeProfessores = [
    { nome: "João Felipe", id: 1,materia: ["WEB", "Mobile"]},
    { nome: "José Pedro", id: 2, materia: ["POO", "API"]},
    { nome: "Poema Maria", id: 3,materia: ["Banco", "FrondEnd"]},
  ]

  const renderizaNomes = () => {
    nomes.map( (item, index) => {
      return <h1 key={index}>{item}</h1>
    })
  }

  return (
    <>
      {/* <h1>Trabalhando com Arrays e Objetos</h1> */}
      {/* {nomes.map( (item, index) => {
        return <h1 key={index}>  {item}</h1>
      })} */}

      {/* {renderizaNomes()} */}

      {arrayDeContatos.map((item, index) => {
        return <Contato key={index} contato={item} />
      })}
      {/* <Contato contato={arrayDeContatos[0]}/> */}

      <br /><br /><br />

      {arrayDeProfessores.map((item, index) => {
        return <Professor key={index} professor={item} />
      })}
    </>
  )
}

export default App
