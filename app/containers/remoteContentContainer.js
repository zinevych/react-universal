import RemoteContent from '../components/RemoteContent';
import { connect } from 'react-redux';
import * as fetchRemoteItems from '../actions/remoteItems';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    remoteItems: state.remoteItems
  }
};

const mapDispatchToProps = (dispatch) => {
  let handler =  bindActionCreators(fetchRemoteItems, dispatch);
  return {
    onClick: handler.fetchRemoteItems
  };
};

const remoteContentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RemoteContent);

export default remoteContentContainer