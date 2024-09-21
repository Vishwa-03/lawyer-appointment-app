// src/store/actions/appointmentActions.js
export const bookAppointment = (lawyerId, time, clientName) => {
    return {
      type: 'BOOK_APPOINTMENT',
      payload: { lawyerId, time, clientName }
    };
  };
  