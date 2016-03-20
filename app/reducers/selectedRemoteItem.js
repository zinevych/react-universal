const selectedRemoteItem = (state = {
  isFetching: false,
  item: {}
}, action) => {
  switch (action.type) {
    case 'REQUEST_POST':
      return Object.assign({}, state, {
        isFetching: true,
        item: {}
      });
    case 'RECEIVE_POST':
      return Object.assign({}, state, {
        isFetching: false,
        item: action.item
      });
    default:
      return state
  }
};

export default selectedRemoteItem