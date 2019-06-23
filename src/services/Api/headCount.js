import Http from '../../lib/http';
import Endpoints from '../../config/endpoints';

function listHeadCount() {
  return Http.get(Endpoints.listHeadCount);
}

export default {
  listHeadCount,
};
