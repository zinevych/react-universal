import Indicator from '../components/Indicator';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    staticItems: state.staticItems
  }
};

const indicatorContainer = connect(
    mapStateToProps
)(Indicator);

export default indicatorContainer