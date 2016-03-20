import React from 'react';

export default class Posts extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="posts">
          <h3>Here is Posts Component</h3>
            { this.props.children }
        </div>
    );
  }
};


