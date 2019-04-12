import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import ItemLivro from './ItemLivro';
import Toolkit from '../util/Toolkit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const LIVROS_POR_LINHA = 4;

function ListaDeLivros() {
  let { state: {livros} } = useContext(LojaContext);

  let renderLivro = (linha, i) => {
    return (
      <Row key={i}>
        {linha.map((l, j) => (<ItemLivro livro={l} key={j}/>))}
      </Row>
    );
  }
  
  return (
    <Container>
      {Toolkit.splitArray(livros, LIVROS_POR_LINHA).map(renderLivro)}
    </Container>
  );
}

export default ListaDeLivros;