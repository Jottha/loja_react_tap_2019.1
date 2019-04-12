import React, { useEffect, useContext } from "react";
import { LojaContext } from "../context/LojaContext";
import BarraDeBusca from "./BarraDeBusca";
import ListaDeLivros from "./ListaDeLivros";
import CarrinhoDeCompras from "./CarrinhoDeCompras";
import BancoDeDados from "../bd/BancoDeDados";

function Loja() {
  let { setLivrosBackend } = useContext(LojaContext);

  useEffect(() => {
    BancoDeDados.getLivros()
      .then(livros => setLivrosBackend(livros))
      .catch(err => console.log(err));
  }, []); 

  return (
    <>
      <BarraDeBusca />
      <ListaDeLivros />
      <CarrinhoDeCompras />
    </>
  );
}

export default Loja;
