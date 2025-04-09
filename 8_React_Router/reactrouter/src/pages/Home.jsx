import { Link } from "react-router-dom"
import { useFetch} from '../hooks/useFetch'

//CSS
import './Home.css' 


const Home = () => {
  //3 - Carregamento de Dados
  
  const url = "http://localhost:3000/products";
  const {data: items, httpConfig, loading, error} = useFetch(url)

  return (
    <div>
      <h1>Products</h1>
      <ul className="products">
        {items && items.map((product) => (
          <li key={product.id}>
            <h1>{product.nome}</h1>
            <p>R${product.price}</p>
            {/*4 - Rotas dinâmicas */}
            <Link to={`/products/${product.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home