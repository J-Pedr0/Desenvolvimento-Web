import { Link } from "react-router-dom" 

export function Galeria() {
    return (
        <>
        <h1>Galeria 🌆</h1>
        <ul>
            <li><h2><Link to='/'>HOME</Link></h2></li>
            <li><h2><Link to='/contatos'>CONTATOS</Link></h2></li>
        </ul>
        </>
    )
}
