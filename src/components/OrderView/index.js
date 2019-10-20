import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
  OrderHeader,
  OrderBody,
  CardBody,
  TextDiv,
  TextAreaDiv,
  DiagAreaDiv,
} from './styles';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const OrderView = ({ orderId, expand, fetchServiceOrderRequest }) => {
  useEffect(() => {
    if (orderId) fetchServiceOrderRequest(orderId);
  }, []);
  // TODO Text Field / TextArea field components
  return (
    <Container expand={expand}>
      {orderId ? (
        <>
          {/* TODO Header Full grid block */}
          <OrderHeader>Ordem de Serviço</OrderHeader>
          <OrderBody>
            <CardBody>
              <h5>Cliente</h5>
              <div>
                <TextDiv>
                  <small>Nome: </small>
                  <strong>Tony</strong>
                </TextDiv>
                <TextDiv>
                  <small>Telefone 1: </small>
                  <strong>133 133 133 133</strong>
                </TextDiv>
              </div>
              <div>
                <TextDiv>
                  <small>CPF: </small>
                  <strong>133 133 133 133</strong>
                </TextDiv>
                <TextDiv>
                  <small>Telefone 2: </small>
                  <strong>133 133 133 133</strong>
                </TextDiv>
              </div>
              <TextDiv>
                <small>Email: </small>
                <strong>tony@tony.com</strong>
              </TextDiv>
              <TextDiv>
                <small>Endereço: </small>
                <strong>aaaaaaaaaaa</strong>
              </TextDiv>
              <TextAreaDiv>
                <small>Obs:</small>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam laborum incidunt, beatae soluta fugit ratione. Sed et
                  eius veritatis soluta, unde cupiditate nesciunt voluptas
                  voluptatem. Molestiae optio nihil blanditiis quam?
                </p>
              </TextAreaDiv>
            </CardBody>

            <CardBody>
              <h5>Equipamento</h5>
              <div>
                <TextDiv>
                  <small>Aparelho: </small>
                  <strong>Ps4</strong>
                </TextDiv>
                <TextDiv>
                  <small>Modelo 1: </small>
                  <strong>Pro</strong>
                </TextDiv>
              </div>
              <div>
                <TextDiv>
                  <small>Serial: </small>
                  <strong>aaaaaaaaaaa</strong>
                </TextDiv>
              </div>
              <TextDiv>
                <small>Acessórios: </small>
                <strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, sequi.
                </strong>
              </TextDiv>
              <TextDiv>
                <small>Detalhes: </small>
                <strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, deserunt!
                </strong>
              </TextDiv>
              <TextAreaDiv>
                <small>Obs:</small>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam laborum incidunt, beatae soluta fugit ratione. Sed et
                  eius veritatis soluta, unde cupiditate nesciunt voluptas
                  voluptatem. Molestiae optio nihil blanditiis quam?
                </p>
              </TextAreaDiv>
            </CardBody>
          </OrderBody>

          {/* TODO Expand One and Compact two, vice versa */}
          {/* Expanded height for all texts in expanded mode */}
          <OrderHeader>Serviço</OrderHeader>
          <OrderBody>
            <CardBody>
              <h5>Serviço</h5>
              <DiagAreaDiv>
                <span>
                  Lorem ispanum dolor sit amet consectetur, adipisicing elit.
                  Numquam laborum incidunt, beatae soluta fugit ratione. Sed et
                  eius veritatis soluta, unde cupiditate nesciunt voluptas
                  voluptatem. Molestiae optio nihil blanditiis quam?
                </span>
              </DiagAreaDiv>
              <div>
                <TextDiv>
                  <small>Contatado dia: </small>
                  <span>11/11/2011</span>
                </TextDiv>
                <TextDiv>
                  <small>Prazo </small>
                  <span>13/11/2011</span>
                </TextDiv>
              </div>
              <div>
                <button>aprovar</button>
                <button>negar</button>
                <TextDiv>
                  <small>Total </small>
                  <strong>1337,00</strong>
                </TextDiv>
              </div>
            </CardBody>

            <CardBody>
              <h5>Reparo</h5>
              <DiagAreaDiv>
                <span>
                  Lorem ispanum dolor sit amet consectetur, adipisicing elit.
                  Numquam laborum incidunt, beatae soluta fugit ratione. Sed et
                  eius veritatis soluta, unde cupiditate nesciunt voluptas
                  voluptatem. Molestiae optio nihil blanditiis quam?
                </span>
              </DiagAreaDiv>
              <div>
                <TextDiv>
                  <small>Efetuado: </small>
                  <span>11/11/2011</span>
                </TextDiv>
                <TextDiv>
                  <small>Total </small>
                  <strong>1337,00</strong>
                </TextDiv>
              </div>
            </CardBody>
          </OrderBody>
          {/* TODO Bottom card with images and payment */}
        </>
      ) : (
        <>
          <OrderHeader>Order View</OrderHeader>
          <OrderBody>
            <span>No Order Requested</span>
          </OrderBody>
        </>
      )}
    </Container>
  );
};

OrderView.propTypes = {
  orderId: PropTypes.number,
  expand: PropTypes.bool.isRequired,
  fetchServiceOrderRequest: PropTypes.func.isRequired,
};

OrderView.defaultProps = {
  orderId: '',
};

const mapStateToProps = state => ({
  serviceOrder: state.serviceOrder,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceOrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderView);
