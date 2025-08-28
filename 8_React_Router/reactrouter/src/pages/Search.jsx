import { useParams, Link, useSearchParams} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {

const [searchParams] = useSearchParams();

const url = "http://localhost:3000/products?" + searchParams;

const {data: items, httpconfig, loading, error} = useFetch(url)

  return (
    <div>   
        <h1>Resultados Diponiveis</h1>
        <ul className="products">
        {items && items.map((product) => (
          <li key={product.id}>
            <h1>{product.nome}</h1>
            <p>R${product.price}</p>
            <Link to={`/products/${product.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search