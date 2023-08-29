const counterReducer = (
  state = {
    count1: 0,
    count2: 0,
    length: 10,
    break: 0,
  },
  action
) => {
  switch (action.type) {
    case 'INCREMENT_COUNT1':
      return {
        ...state,
        count1: state.count1 + 1,
      };
    case 'DECREMENT_COUNT1':
      return {
        ...state,
        count1: state.count1 - 1,
      };
    case 'INCREMENT_COUNT2':
      return {
        ...state,
        count2: state.count2 + 1,
      };
    case 'DECREMENT_COUNT2':
      return {
        ...state,
        count2: state.count2 - 1,
      };
    case 'INCREMENT_LENGTH':
      return {
        ...state,
        length: state.length + 1,
      };
    case 'DECREMENT_LENGTH':
      return {
        ...state,
        length: state.length - 1,
      };
    case 'INCREMENT_BREAK':
      return {
        ...state,
        break: state.break + 1,
      };
    case 'DECREMENT_BREAK':
      return {
        ...state,
        break: state.break - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
