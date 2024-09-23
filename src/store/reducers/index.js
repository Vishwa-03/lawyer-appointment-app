import { combineReducers } from 'redux';
import lawyerReducer from './lawyerReducer';
import appointmentReducer from './appointmentReducer';

export default combineReducers({
  lawyers: lawyerReducer,
  appointments: appointmentReducer
});
