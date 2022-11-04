import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import api from './services/api'
import Idade from './components/Gatinho/gatinho'

function App() {
  const [nome, setNome] = useState("José Pedro")
  const [idade, setIdade] = useState(20)
  // const [cat, setCat] = useState([])

  //Só é executado após o componete for renderizado
  useEffect(() => {
    // console.log("Estou dentro do UseEffect")
  }, [nome, idade])

  const asyncRequest = async () => {
    console.log("Primeito")
    // await - faz a execução
    // for (let index = 0; index < 100; index++) {console.log(index)}
    console.log("Segundo")
    console.log("Terceiro")
  }

  //async function funcao
  //FEICH API
  //AXITOS para fazer requisições HTTP - crud

  // const getCat = async() => {
  //   const { data } = await api.get("/images/search")
  //   setCat(data)
  //   console.log(data)
  // }
  // useEffect(() => {
  //   getCat();
  // },[])

  //Função assincrona dentro do useEffect
  // useEffect(() => {

  //   const getCat = async() => {
  //     const { data } = await api.get("/images/search")
  //     console.log(data)
  //   }
  //   getCat();
  // },[])

  return (
    <>
      <h1>Use Effect</h1>
      <Idade/>
    </>
  );
}

export default App;