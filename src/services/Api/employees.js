import Http from '../../lib/http';
import Endpoints from '../../config/endpoints';

function listEmployees() {
  return Http.get(Endpoints.listEmployees);
}

function retrieveEmployee(employeeId) {
  return Http.get(`${Endpoints.retrieveEmployee}/${employeeId}`);
}

export default {
  listEmployees,
  retrieveEmployee,
};
