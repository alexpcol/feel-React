import { RESET, LIST_PERIOD_SPENDING } from '../actions/types';

const INITIAL_STATE = {
  periodSpending: [],
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case LIST_PERIOD_SPENDING:
    //console.log("saving", payload)
      return {
        ...state,
        periodSpending: payload.map(data => ({ x: data.descripcion, y: parseFloat(data.total_importe) }))
      };

    case RESET:
      return INITIAL_STATE;
      
    default:
      return state;
  }
};