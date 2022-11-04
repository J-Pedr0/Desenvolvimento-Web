function Professor(props) {
    return (
        <>
            <div style={{background: "lightgray", color: "blue", padding:10, marginBottom: 5}}>
            <h1>Id: {props.professor.id}</h1>    
            <h1>Nome: {props.professor.nome}</h1>
            <h1>Matéria: {props.professor.materia.map(item => `, ${item}`)}</h1>
            </div>
        </>
    )
}

export default Professor