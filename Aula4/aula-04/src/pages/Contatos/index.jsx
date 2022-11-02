import { Link } from "react-router-dom" 

export const Contatos = () => {

    const contato = {
        id: 1,
        nome: "João Felipe",
        email: "joao@serratec.com"
    }
    const contato2 = {
        id: 2,
        nome: "José Pedro",
        email: "jose@serratec.com"
    }
    const contato3 = {
        id: 3,
        nome: "Poema Maria",
        email: "poema@serratec.com"
    }

    return (
        <>
        <h1>Contatos 📠</h1>
        <ul>
            <li><h2><Link to='/'>HOME</Link></h2></li>
            <li><h2><Link to='/galeria'>GALERIA</Link></h2></li>
        </ul>
        <ol>
            <li><Link to={`/contatos/${contato.id}`} state={{ id: contato.id , nome: contato.nome, email: contato.email}}>João Felipe</Link></li>
            <li><Link to={`/contatos/${contato2.id}`} state={{id: contato2.id, nome: contato2.nome, email: contato2.email}}>José Pedro</Link></li>
            <li><Link to={`/contatos/${contato3.id}`} state={{id: contato3.id, nome: contato3.nome, email: contato3.email}}>Poema Maria</Link></li>
        </ol>
        </>
    )
}
