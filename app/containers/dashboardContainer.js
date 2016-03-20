import Dashboard from '../components/Dashboard';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    //items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch({
        type: 'CLICKED_ACTION',
        id
      })
    }
  }
}

const VisibleDashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default VisibleDashboard