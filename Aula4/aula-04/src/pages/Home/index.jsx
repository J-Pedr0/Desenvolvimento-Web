import { Link } from "react-router-dom" 

const Home = () => {
    return (
        // <a href="/contatos">Contatos</a>
        <>
        <h1>Home 🏡</h1>
        <ul>
            <li><h2><Link to='/contatos'>CONTATOS</Link></h2></li>
            <li><h2><Link to='/galeria'>GALERIA</Link></h2></li>
        </ul>
        </>
    )
}

export default Home