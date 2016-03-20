import React, { PropTypes } from 'react';

class Post extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="post">
        <div className="form-group">
          <label className="col-sm-2 control-label">User Id</label>
          <div className="col-sm-10">
            <p className="form-control-static">{this.props.post.item.userId}</p>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Id</label>
          <div className="col-sm-10">
            <p className="form-control-static">{this.props.post.item.id}</p>
          </div>
        </div>


      </div>
    );
  }
};

Post.propTypes = {
  post: PropTypes.object
};

export default Post;

