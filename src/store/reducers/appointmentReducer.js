const initialState = [];

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_APPOINTMENT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default appointmentReducer;
