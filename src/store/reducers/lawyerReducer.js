const initialState = [
    { id: 1, name: 'John Doe', specialty: 'Divorce Lawyer', availability: ['9:00', '9:30', '10:00'], cost: 100 },
    { id: 2, name: 'Jane Smith', specialty: 'Criminal Lawyer', availability: ['10:00', '10:30', '11:00'], cost: 150 }
  ];
  
  const lawyerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BOOK_APPOINTMENT':
        return state.map(lawyer =>
          lawyer.id === action.payload.lawyerId
            ? {
                ...lawyer,
                availability: lawyer.availability.filter(time => time !== action.payload.time)
              }
            : lawyer
        );
      default:
        return state;
    }
  };
  
  export default lawyerReducer;
  
