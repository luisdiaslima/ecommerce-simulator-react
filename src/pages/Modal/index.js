/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web';
import { Modal } from './style';
import checkImg from '../../img/conf.json';

export default function ModalCheck({ check }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: checkImg,
    });
  });
  if (!check) return <></>;
  return (
    <Modal>
      <div>
        <div className="container" ref={container} />
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
