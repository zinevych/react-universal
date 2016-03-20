import StaticContent from '../components/StaticContent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    staticItems: state.staticItems
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({
        type: 'GET_STATIC_DATA'
      })
    }
  }
};

const staticContentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StaticContent);

export default staticContentContainer