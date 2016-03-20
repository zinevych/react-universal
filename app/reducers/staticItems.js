const staticItems = (state = [], action) => {
  switch (action.type) {
    case 'GET_STATIC_DATA':
      return [
        ...state,
        {
          text: 'staticItem' + (state.length + 1)
        },
        {
          text: 'staticItem' + (state.length + 2)
        }
      ];
    default:
      return state
  }
};

export default staticItems