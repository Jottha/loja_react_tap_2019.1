import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemLivro(props) {
  let { comprar } = useContext(LojaContext);

  return (
    <Col xs={3}>
      <Card className="text-center">
        <Card.Header as="h5">{props.livro.nome}</Card.Header>
        <Card.Img variant="top" src={props.livro.foto} />
        <Card.Body>
          <Card.Title><FormataMoeda valor={props.livro.preco}/></Card.Title>
          <Button variant="outline-primary" block onClick={() => comprar(props.livro)}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemLivro;