import {
  LIST_EMPLOYEES,
  LIST_EMPLOYEES_ERROR,
  RETRIEVE_EMPLOYEE,
  RETRIEVE_EMPLOYEE_ERROR,
} from './types';
import Api from '../services/Api';

/*
 * listEmployees - List employees.
 * @param {string} employeeId
 */
export function listEmployees() {
  return async (dispatch) => {
    try {
      const data = await Api.employees.listEmployees();
      dispatch({
        type: LIST_EMPLOYEES,
        payload: data,
      });
      return data;
    } catch(e) {
      Api.handleError(LIST_EMPLOYEES_ERROR, dispatch);
    }
  };
}


/*
 * retrieveEmployee - Retrieve employee profile.
 * @param {string} employeeId
 */
export function retrieveEmployee(employeeId) {
  return async (dispatch) => {
    try {
      const data = await Api.employees.retrieveEmployee(employeeId);
      dispatch({
        type: RETRIEVE_EMPLOYEE,
        payload: data,
      });
      return data;
    } catch(e) {
      Api.handleError(RETRIEVE_EMPLOYEE_ERROR, dispatch);
    }
  };
}
