const remoteItems = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return Object.assign({}, state, {
        isFetching: true,
        items: []
      });
    case 'RECEIVE_DATA':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state
  }
};

export default remoteItems