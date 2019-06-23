import {
  LIST_PERIOD_SPENDING,
  LIST_PERIOD_SPENDING_ERROR,
} from './types';
import Api from '../services/Api';

/*
 * listPeriodSpending - List Period Spending
 */
export function listPeriodSpending(year, month) {
  return async (dispatch) => {
    try {
      const data = await Api.periodSpending.listPeriodSpending(year, month);
      dispatch({
        type: LIST_PERIOD_SPENDING,
        payload: data,
      });
      return data;
    } catch (e) {
      Api.handleError(LIST_PERIOD_SPENDING_ERROR, dispatch);
    }
  };
}