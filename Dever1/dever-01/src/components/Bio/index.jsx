import './styles.css'

function Bio(props) {
    return (
        <div className="bio">
            <h1>{props.nome}</h1>
            <button>SAIBA MAIS</button>
        </div>
    )
}

export default Bio