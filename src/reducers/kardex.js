import { RESET, LIST_KARDEX, LIST_CLIENT_KARDEX } from '../actions/types';

const INITIAL_STATE = {
  clientKardex: [],
  kardex: null,
  dates: null,
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case LIST_KARDEX:
      return {
        ...state,
        kardex: payload,
        dates: Object.assign({}, ...(payload.map(item => ({ [item.fecha]: { type: item.marca } }) ))),
      };

    case LIST_CLIENT_KARDEX:
      return {
        ...state,
        clientKardex: Object.values(payload).map(item => ({ key: item.clave, description: item.descripcion, x: item.clave, y: item.total })),
      };
    
    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};
