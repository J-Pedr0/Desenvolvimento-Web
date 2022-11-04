import { useState, useEffect } from 'react'
import api from '../../services/api';
import imgTaldo from '../../assets/taldo.jpeg'
import imgCachorro from '../../assets/cachorro.jpeg'

const Gatinho = () => {
    const [cat, setCat] = useState([])

    const getCat = async() => {
        const { data } = await api.get("/images/search")
        setCat(data)
        console.log(data)
      }
      useEffect(() => {
        getCat();
      },[])

    return (
        <>
        <img src={imgCachorro} alt="Taldo" />
            <h1>{cat.length > 0 && cat[0].url}</h1>
      {cat.length > 0 ? (
        <img src={cat[0].url} alt="Gatinho" className='img-gatinho'/>
      ) : (
        <h1>Sem Imagem no momento</h1>
      )}
      <div>
      <button onClick={() => getCat()}>Trocar de gatinho</button>
      </div>
        </>
    );
};

export default Gatinho;