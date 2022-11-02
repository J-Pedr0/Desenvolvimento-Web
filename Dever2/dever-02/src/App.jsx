import { useState } from 'react'
import './App.css'

//Taldo para sempre ❤

function App() {
  const [numero, setNumero] = useState(0)
  const [quantidadeMl, setQuantidadeMl] = useState(0)
  const [quantidade, setQuantidade] = useState(0)
  const [meta, setMeta] = useState(0)
  const [mensagem, setMensagem] = useState("")
  const [historico, setHistorico] = useState("")
  const date = new Date().toLocaleString();
  

  function clique() {
    if(quantidadeMl > 0 && meta > 2) {
      setNumero(numero + 1)
      calcular()
      metaDoDia()
      setHistorico(historico + " || " + "Copo: " + (parseInt(numero) + 1) + " - " + date+"\n")
    } else {
      alert("Valores inválidos\nA quantidade de ml deve se maior que 0 e meta maior que 2")
    }
  }
  function zera() {
    setNumero(0)
    setQuantidadeMl(0)
    setQuantidade(0)
    setHistorico("")
    setMensagem("")
  }
  function calcular() {
    setQuantidade(quantidade + parseFloat(quantidadeMl))
  }
  function metaDoDia() {
    if ((quantidade + parseFloat(quantidadeMl) >= (meta) && (numero > 1)) ){
      setMensagem("Você atingiu a meta!!!")
    } else {
      setMensagem("")
    }
  } 

  return (
    <>
      <h2>Meta do dia: {meta} copo(s)</h2>
      <h2>Copos de água bebidos:</h2>
      <h1>{numero}</h1>
      <div>
      <h3>Informe a qunatidade de ml:</h3>
      <input 
        type='number'
        placeholder='QUANTIDADE DE ML'
        onChange={(e) => setQuantidadeMl(e.target.value)}/>
      </div>
      <div>
      <h3>Informe a meta de copos:</h3>
      <input 
        type='number'
        placeholder='QUANTIDADE DE ML'
        onChange={(e) => setMeta(e.target.value)}/>
      </div>
      <br/>
      <div>
      <button onClick={clique}>Beber copo de água</button>
      <button onClick={zera}>Zerar</button>
      </div>
      <div>
        <h2>Total de ml bebidos:</h2>
        <h1>{quantidade}</h1>
      </div>
      <div>
        <h2>{mensagem}</h2>
        <h2>Histórico: {historico}</h2>
      </div>
    </>
  )
}

export default App
