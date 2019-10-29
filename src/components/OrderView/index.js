import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  OrderContainer,
  OrderHeader,
  OrderBody,
  CardBody,
  TextDiv,
  TextAreaDiv,
  DiagAreaDiv,
  DiagCard,
  BottomCard,
  FooterCard,
  FooterHeader,
  ActionButton,
} from './styles';

import ServiceOrdersActions from '../../store/ducks/serviceOrders';

const OrderView = ({
  orderId,
  expand,
  serviceOrder,
  fetchServiceOrderRequest,
  updateServiceOrderRequest,
}) => {
  const [loading, setLoading] = useState(true);
  const {
    client,
    // creator,
    // diagStatus,
    // diagnostics,
    equipment,
    // osStatus,
    // paymentStatus,
    // priority,
    // repairStatus,
    // repairs,
    // store,
  } = serviceOrder;

  useEffect(() => {
    fetchServiceOrderRequest(orderId);
    setLoading(false);
  }, [fetchServiceOrderRequest, orderId]);

  const updateStatus = (statusId, statusType) => {
    // console.log(status, statusType);
    updateServiceOrderRequest({ statusId, statusType, orderId });
  };
  console.log(serviceOrder.diag_status_id);
  return (
    <Container expand={expand}>
      {loading ? (
        <>
          <OrderHeader>Order View</OrderHeader>
          <OrderBody>
            <span>Loading...</span>
          </OrderBody>
        </>
      ) : (
        <OrderContainer>
          <OrderHeader>Ordem de Serviço {serviceOrder.created_at}</OrderHeader>
          <OrderBody>
            <CardBody>
              <h5>Cliente</h5>
              <div>
                <TextDiv>
                  <small>Nome: </small>
                  <strong>{client && client.name}</strong>
                </TextDiv>
                <TextDiv>
                  <small>Telefone 1: </small>
                  <strong>{client && client.phone1}</strong>
                </TextDiv>
              </div>
              <div>
                <TextDiv>
                  <small>CPF: </small>
                  <strong>{client && client.cpf}</strong>
                </TextDiv>
                <TextDiv>
                  <small>Telefone 2: </small>
                  <strong>{client && client.phone2}</strong>
                </TextDiv>
              </div>
              <TextDiv>
                <small>Email: </small>
                <strong>{client && client.email}</strong>
              </TextDiv>
              <TextDiv>
                <small>Endereço: </small>
                <strong>aaaaaaaaaaa</strong>
              </TextDiv>
              <TextAreaDiv>
                <small>Obs:</small>
                <p>{serviceOrder.observation}</p>
              </TextAreaDiv>
            </CardBody>

            <CardBody>
              <h5>Equipamento</h5>
              <div>
                <TextDiv>
                  <small>Aparelho: </small>
                  <strong>{equipment && equipment.name}</strong>
                </TextDiv>
                <TextDiv>
                  <small>Modelo 1: </small>
                  <strong>{serviceOrder.equipment_model}</strong>
                </TextDiv>
              </div>
              <div>
                <TextDiv>
                  <small>Serial: </small>
                  <strong>{serviceOrder.serial_number}</strong>
                </TextDiv>
              </div>
              <TextDiv>
                <small>Acessórios: </small>
                <strong>{serviceOrder.accessories}</strong>
              </TextDiv>
              <TextDiv>
                <small>Detalhes: </small>
                <strong>{serviceOrder.details}</strong>
              </TextDiv>
              <TextAreaDiv>
                <small>Defeito</small>
                <p>{serviceOrder.problem_description}</p>
              </TextAreaDiv>
            </CardBody>
          </OrderBody>
          <OrderHeader>Serviço</OrderHeader>
          <OrderBody>
            <CardBody>
              <h5>Diagnóstico</h5>
              <DiagAreaDiv>
                <span>
                  Lorem ispanum dolor sit amet consectetur, adipisicing elit.
                  Numquam laborum incidunt, beatae soluta fugit ratione. Sed et
                  eius veritatis soluta, unde cupiditate nesciunt voluptas
                  voluptatem. Molestiae optio nihil blanditiis quam?
                </span>
              </DiagAreaDiv>
              <DiagCard>
                <TextDiv>
                  <small>Contatado dia: </small>
                  <span>11/11/2011</span>
                </TextDiv>
                <TextDiv>
                  <small>Prazo </small>
                  <span>13/11/2011</span>
                </TextDiv>
              </DiagCard>
              <DiagCard>
                {/*
              1) If waiting approval = show buttons
              2) If approved show only green
              3) If denied show only red
               */}
                {serviceOrder.diag_status_id === 2 ? (
                  <>
                    <ActionButton
                      color="#26C89F"
                      width="40%"
                      onClick={() => updateStatus(3, 'diag_status')}
                    >
                      <b>Aprovar</b>
                    </ActionButton>
                    <ActionButton
                      color="#FF5370"
                      width="40%"
                      onClick={() => updateStatus(4, 'diag_status')}
                    >
                      <b>Negar</b>
                    </ActionButton>
                  </>
                ) : (
                  <ActionButton width="200px" disabled>
                    {serviceOrder.diagStatus && serviceOrder.diagStatus.title}
                  </ActionButton>
                )}

                <TextDiv>
                  <small>Total </small>
                  <strong>1337,00</strong>
                </TextDiv>
              </DiagCard>
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
        </OrderContainer>
      )}
      <BottomCard expand={expand}>
        <FooterCard>
          <>
            <ActionButton
              color="#26C89F"
              width="40%"
              onClick={() => updateStatus(3, 'diag_status')}
            >
              <b>1</b>
            </ActionButton>
            <ActionButton
              color="#FF5370"
              width="40%"
              onClick={() => updateStatus(2, 'diag_status')}
            >
              <b>2</b>
            </ActionButton>
          </>
        </FooterCard>
        {/* Payment Info & Delivery card */}
        <FooterCard>
          <div>
            <FooterHeader>Pagamento</FooterHeader>
            {serviceOrder.payment_date && (
              <>
                <span>
                  Efetuado: <b>{serviceOrder.payment_date}</b>
                </span>

                <span>
                  Tipo: <b>{serviceOrder.payment_type}</b>
                </span>

                <span>
                  Valor Total: <b>{serviceOrder.paid_value}</b>
                </span>

                <ActionButton color="#26C89F">
                  <b>Estado pagamento</b>
                </ActionButton>
              </>
            )}
          </div>
          <div>
            <FooterHeader>Saída</FooterHeader>
            {serviceOrder.delivery_date && (
              <>
                <span>
                  Entregue: <b>{serviceOrder.delivery_date}</b>
                </span>

                <span>
                  Garantia até: <b>{serviceOrder.warranty_expiration}</b>
                </span>

                <span>
                  Recebido por: <b>{serviceOrder.received_by}</b>
                </span>

                <ActionButton color="#26C89F">
                  <b>Estado entrega</b>
                </ActionButton>
              </>
            )}
          </div>
        </FooterCard>
      </BottomCard>
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
  serviceOrder: state.serviceOrders.order,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceOrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderView);
