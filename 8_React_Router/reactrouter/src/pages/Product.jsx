import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';



const Product = () => {
  //Rota Dinâmica
  const {id} = useParams();

  const url = "http://localhost:3000/products/" + id; 

  //4- Carregamento Dinâmico
  const {data: product, loading, error} = useFetch(url)
  
  return (
    <>
      <p>ID do produto {id}</p>
        {error && <p>Erro no carregamento de dados</p>}
          {loading && <p>Carregando Dados</p>}
          {product && (
            <div>
            <h1>Products</h1>
            <p>{product.id}</p>
            <p>{product.nome}</p>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}/info`}>Ver mais informações</Link>
          </div>
          )} 
          {/* 6- Nested Routes*/}
    </>
  )
}

export default Product