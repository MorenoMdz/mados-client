import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from './styles';

const SearchInput = ({ expand, width }) => {
  return (
    <Form>
      <Input placeholder="buscar" expand={expand} width={width} />
    </Form>
  );
};

SearchInput.propTypes = {
  expand: PropTypes.bool,
  width: PropTypes.string,
};

SearchInput.defaultProps = {
  expand: false,
  width: '500px',
};

export default SearchInput;
