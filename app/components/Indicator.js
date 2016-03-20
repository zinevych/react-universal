import React, { PropTypes } from 'react';
import StaticContentContainer from '../containers/indicatorContainer';

const Indicator = ({ staticItems }) => (
  <div>Current length is: {staticItems.length}</div>
);

Indicator.propTypes = {
  staticItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
};

export default Indicator