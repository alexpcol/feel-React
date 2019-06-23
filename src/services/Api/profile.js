import Http from '../../lib/http';
import Endpoints from '../../config/endpoints';

function retrieveUser() {
  return Http.get(Endpoints.profile);
}

export default {
  retrieveUser,
};
