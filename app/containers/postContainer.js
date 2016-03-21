import Post from '../components/Post';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import * as remoteItemActionHandler from '../actions/remoteItem';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    selectedRemoteItem: state.selectedRemoteItem
  }
};

const mapDispatchToProps = (dispatch) => {
  let handler =  bindActionCreators(remoteItemActionHandler, dispatch);
  return {
    fetchRemoteItem: handler.fetchRemoteItem
  };
};

class PostContainer extends React.Component {
  static fetchData(dispatch, params){
    return dispatch(remoteItemActionHandler.fetchRemoteItem(params.postId));
  }

  componentDidMount() {
    let item = this.props.selectedRemoteItem;
    if(!item || !item.userId){
      this.props.fetchRemoteItem(this.props.params.postId);
    }
  }

  constructor() {
    super();
  }

  render() {
    return (
      <Post post={this.props.selectedRemoteItem}/>
    );
  }
};

PostContainer.propTypes = {
  selectedRemoteItem: PropTypes.object.isRequired,
  fetchRemoteItem: PropTypes.func.isRequired
};

const Connector = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContainer);

export default Connector