import "./styles.css";
import { useState } from "react";

const Idade = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [recado, setRecado] = useState("");

    const handleVerificar = () => {
        if (idade > 17) {
            setRecado(`Olá ${nome}, você é maior de idade`)
        } else {
            setRecado(`Olá ${nome}, você é menor de idade`)
        } 
    }

    return (
        <div>
            <h1>Teste de idade</h1>

            <h2>Nome</h2>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <h2>Idade</h2>
            <input
                type="text"
                placeholder="Digite sua idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />

            <div style={{ marginTop: 20 }}>
                <input type="button" value="Enviar" onClick={handleVerificar} />
            </div>

            <h2>{recado}</h2>
        </div>
    );
};

export default Idade;