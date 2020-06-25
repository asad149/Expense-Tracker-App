const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return [action.payload, ...state];
    }

    case "DELETE_TRANSACTION": {
      const newState = state.filter((trans) => trans.id !== action.payload.id);

      return newState;
    }

    default:
      return state;
  }
};

export default TransactionReducer;
