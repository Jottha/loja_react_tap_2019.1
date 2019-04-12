import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import ItemCarrinho from './ItemCarrinho';
import FormataMoeda from './FormataMoeda';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function CarrinhoDeCompras() {
  let { state: {carrinho, carrinhoVisivel}, setCarrinhoVisivel } = useContext(LojaContext);

  const renderLivro = (l, i) => (<ItemCarrinho livro={l} index={i} key={i} />);

  const renderCabecalho = () => {
    return (
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Produto</th>
          <th>Valor</th>
          <th>Ação</th>
        </tr>
      </thead>
    );
  };

  const renderRodape = () => {
    let total = carrinho.reduce((acc, l) => acc + l.preco, 0);
  
    return (
      <tfoot>
        <tr>
          <th>&nbsp;</th>
          <th>Total</th>
          <th><FormataMoeda valor={total}/></th>
          <th>&nbsp;</th>
        </tr>
      </tfoot>
    );
  };

  return (
    <Modal show={carrinhoVisivel} centered onHide={() => setCarrinhoVisivel(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          {renderCabecalho()}
          <tbody>
            {carrinho.map(renderLivro)}
          </tbody>
          {renderRodape()}
        </Table>
      </Modal.Body>
    </Modal>
  );
}

export default CarrinhoDeCompras;