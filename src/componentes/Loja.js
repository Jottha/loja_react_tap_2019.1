import React, { Component } from 'react';
import {LojaProvider} from '../context/LojaContext';
import BarraDeBusca from './BarraDeBusca';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';

class Loja extends Component {
  render() {
    return (
      <LojaProvider>
        <BarraDeBusca/>
        <div className="text-center"><h1>Melhores Livros do Mundo</h1></div>
        <ListaDeProdutos/>
        <CarrinhoDeCompras/>
      </LojaProvider>
    );
  }
}

export default Loja;