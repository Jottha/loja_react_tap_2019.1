import React, { useState } from 'react';

export const LojaContext = React.createContext();

export function LojaProvider(props) {
  const [livrosBackend, setLivrosBackend] = useState([]);
  const [livros, setLivros] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);

  const buscar = (termo) => {
    setLivros(livrosBackend.filter((l) => {
      return l.nome.toLowerCase().includes(termo.toLowerCase());
    }));
  };

  const comprar = (livro) => {
    setCarrinho([...carrinho, livro]);
  };

  const remover = (indice) => {
    setCarrinho([...carrinho.slice(0, indice), ...carrinho.slice(indice + 1)]);
  };

  return (
    <LojaContext.Provider value={{
        state: { livros, carrinho, carrinhoVisivel},
        setLivrosBackend: (livros) => {
          setLivrosBackend(livros);
          setLivros(livros);
        },
        buscar,
        comprar,
        remover,
        setCarrinhoVisivel
    }}>
      {props.children}
    </LojaContext.Provider>
  );
}
