function counterReducer(state = {counter: 0}, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER': {
        return {
          ...state,
          counter: counter + 1
        };
    }
    default: {
      return state;
    }

  }
}

export default counterReducer;
