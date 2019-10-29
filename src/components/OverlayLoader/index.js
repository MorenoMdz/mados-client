import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';
import { Container } from './styles';

const OverlayLoader = ({ loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <>
      {loading && (
        <Container>
          <PacmanLoader
            css={override}
            sizeUnit="px"
            size={30}
            color="#36C6AB"
            loading={loading}
          />
        </Container>
      )}
    </>
  );
};

OverlayLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default OverlayLoader;
