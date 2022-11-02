import { useParams, useLocation } from "react-router-dom"
import { Link } from "react-router-dom" 

const ContatoDetalhes = () => {
    const { id } = useParams();
    const { state } = useLocation();

    console.log(state.id);
    console.log(state.nome);
    console.log(state.email);

    console.log(typeof id)

    const redenrizaNome = () => {
        switch(id){
            case "1":
                return "João Felipe"
                // break;
            case "2":
                return "José Pedro"
                // break;
            case "3": 
            return "Poema Maria"
                // break;
            default:
                return "DESCONHECIDO"
                // break
        }
    }

    //Renderização condicional Através do IF
    // if (id == '1'){
    //     return <h1>Contato: João que veio do if</h1>
    // }

    // == - valor
    // === (é identico) - valor e tipo 

    return (

        <>
        <div>
            <h1>{state.nome}</h1>
        </div>
        <div>
            <h1>{state.email}</h1>
        </div>
        <div>
        <h2><Link to='/contatos'>VOLTAR PARA CONTATOS</Link></h2>
        </div>
        </>

        // <h1>
        //     {/*Renderização condicional com operador lógico*/}
        //     {/* {id == '2' && "Contato: José Pedro que veio do &&"} */}

        //     {/* Contato: {redenrizaNome()} */}
            
        //     {/*Renderização condicional com operador Ternário*/}
        //     {/* {id == 3 ? "Poema do Operador ternário" : null} */}
        // </h1>
    )
}

export default ContatoDetalhes 