import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // 4- Método GET
  const [data, setData] = useState(null);

  // 5 - Refatorando Post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callfetch, setCallFetch] = useState(false);

  //6- Loading
  const [loading, setLoading] = useState(false);

  //7- Tratativas de erros
  const [error, setError] = useState(null);

  //8 - Delete

  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: { "Content-Type": "application/json" },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchRequest = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Aguarde erro no back-end");
      }

      setLoading(false);
    };
    fetchRequest();
  }, [url, callfetch]);

  useEffect(() => {
    const httpRequest = async () => {
      let json = null;
  
      try {
        if (method === "POST") {
          setLoading("POST", true);
  
          const res = await fetch(url, config);
  
          if (!res.ok) {
            throw new Error(`Erro ao criar: ${res.status} ${res.statusText}`);
          }
  
          json = await res.json();
          setLoading("POST", false);
        } 
        
        else if (method === "DELETE") {
          const deleteURL = `${url}/${itemId}`;
  
          const res = await fetch(deleteURL, config);
  
          if (!res) {
            throw new Error("A resposta do servidor está indefinida.");
          }
  
          if (!res.ok) {
            throw new Error(`Erro ao deletar: ${res.status} ${res.statusText}`);
          }
  
          if (res.status !== 204) { // 204 significa que não tem JSON
            json = await res.json();
          }
        }
        
        setCallFetch(json);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };
  
    httpRequest();
  }, [config, url, method]);

  return { data, httpConfig, loading, error};
};
