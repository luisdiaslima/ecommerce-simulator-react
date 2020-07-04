/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from './style';
import checkImg from '../../img/check.svg';

export default function ModalCheck({ check }) {
  if (!check) return <></>;
  return (
    <Modal>
      <div>
        <img src={checkImg} />
        <h1>Pagamento concluído</h1>
      </div>
    </Modal>
  );
}

ModalCheck.defaultProps = {
  check: false,
};

ModalCheck.propTypes = {
  check: PropTypes.bool,
};
