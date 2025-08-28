import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data: items, httpconfig, loading, error } = useFetch(url);

  //Lista de produtos
  const nomeSelecionado = searchParams.get("nome");

  const nomeFiltrados = items?.filter((item) => item.nome === nomeSelecionado);

  return <div>
    <h1>Produto da Categoria:{nomeSelecionado}</h1>

    <ul>
        {nomeFiltrados?.map((product) => (
            <li key={product.id}>
            <h1>{product.nome}</h1>
            <p>R${product.price}</p>
            <Link to={`/products/${product.id}`}>Detalhes</Link>
            </li>
        ))}
    </ul>
  </div>;
};
export default SearchPage;
