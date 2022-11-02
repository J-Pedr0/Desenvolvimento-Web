function Contato(props) {
    return (
        <>
            <div style={{background: "lightgray", color: "blue", padding:10, marginBottom: 5}}>
            <h1>Id: {props.contato.id}</h1>    
            <h1>Nome: {props.contato.nome}</h1>
            <h1>Email: {props.contato.email}</h1>
            </div>
        </>
    )
}

export default Contato