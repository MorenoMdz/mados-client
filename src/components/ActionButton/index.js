import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function ActionButton({ children, width, color, onClick }) {
  return (
    <Button width={width} color={color} onClick={onClick}>
      {children}
    </Button>
  );
}

ActionButton.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  onClick: () => {},
};
