import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row className='containerPublicPromotion'>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Desconto por tempo <strong>Limitado</strong>
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <div className='publicPromotion'>
            <strong className="me-auto">PARABÉNS ! </strong> 
              Você ganhou 20% de desconto em sua primeira reserva conosco. 
              <a className='' 
                 href="https://wa.me/message/FZ3T42J3PJ5NH1"
                 target="_blank"
                 rel="noreferrer"> Clique aqui </a> e saiba mais!
              </div>
            <small>1 min ago</small>
          </Toast.Header>
          <Toast.Body>Desconto para Hospedagem</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default DismissibleExample;