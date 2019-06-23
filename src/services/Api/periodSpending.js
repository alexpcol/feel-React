import Http from '../../lib/http';
import Endpoints from '../../config/endpoints';

function listPeriodSpending(year, month) {
  return Http.get(Endpoints.listPeriodSpending+"?year="+year+"&month="+month);
}

export default {
  listPeriodSpending,
};
