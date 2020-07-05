import React from 'react';
import PropTypes from 'prop-types';
import { LoaderBar } from './style';

export default function LoaderHead({ isLoading }) {
  if (!isLoading) return <></>;

  return (
    <LoaderBar>
      <div />
    </LoaderBar>
  );
}

LoaderHead.defaultProps = {
  isLoading: false,
};

LoaderHead.propTypes = {
  isLoading: PropTypes.bool,
};
