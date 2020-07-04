import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from './style';
import checkImg from '../../img/check.svg';
import Payment from '../Payment';

export default function PaymentCheck({ inPayment }) {
  if (!inPayment) return <></>;
  return (
    <Modal>
      <Payment />
    </Modal>
  );
}

PaymentCheck.defaultProps = {
  inPayment: false,
};

PaymentCheck.propTypes = {
  inPayment: PropTypes.bool,
};
