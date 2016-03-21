import React, { PropTypes } from 'react';
import StaticContentContainer from '../containers/staticContentContainer';
import RemoteContentContainer from '../containers/remoteContentContainer';

const Dashboard = () => (
    <div>
      <StaticContentContainer />
      <RemoteContentContainer />
    </div>
);

export default Dashboard