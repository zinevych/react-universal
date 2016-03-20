import React, { PropTypes } from 'react';
import StaticContentContainer from '../containers/staticContentContainer';
import RemoteContentContainer from '../containers/remoteContentContainer';

const Dashboard = ({ items, onTodoClick }) => (
    <div>
      <StaticContentContainer />
      <RemoteContentContainer />
    </div>
);

Dashboard.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Dashboard