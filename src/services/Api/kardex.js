import Http from '../../lib/http';
import Endpoints from '../../config/endpoints';

function listKardex() {
  return Http.get(Endpoints.listKardex);
}

function listClientKardex(year, month) {
  return Http.get(Endpoints.listClientKardex + "?year=" + year + "&month=" + month);
}

export default {
  listKardex,
  listClientKardex,
};
