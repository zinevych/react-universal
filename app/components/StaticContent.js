import React, { PropTypes } from 'react';
import StaticContentContainer from '../containers/staticContentContainer';
import IndicatorContainer from '../containers/indicatorContainer'

const StaticContent = ({ staticItems, onClick }) => (
<div className="static-content">
  <h3>Example of handling static data</h3>
  <div className="static-items-button col-md-2">
    <button type="button" className="btn btn-primary" onClick={onClick}>Update Data</button>
    <IndicatorContainer />
  </div>
  <div className="col-md-10">
    <div className="static-items-container">
      {staticItems.map((staticItem, index) =>
              <div key={index}>{staticItem.text}</div>
      )}
    </div>
  </div>
  <div className="col-md-12">
    <hr />
  </div>
</div>
);

StaticContent.propTypes = {
  staticItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired
};

export default StaticContent