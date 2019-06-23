import { RESET, GATHERED } from '../actions/types';

const INITIAL_STATE = {
    finance: {
        banco: '',
        cuenta: 0,
        cuenta_clave: 0,
        lugar_pago: '',
        cuenta_vales: 0,
        cta_despensa: 0,
        cta_restaurante: 0,
        cta_gas: 0,
        eden_despensa: 0,
        eden_restaurante: 0,
        eden_gas: 0
    },
    totals_concept: []
};

export default (state = INITIAL_STATE, { type, payload } = {}) => {
    switch (type) {
        case GATHERED:
            return {
                ...state,
                finance: payload.finance,
                totals_concept: payload.totals_concept,
            };

        case RESET:
            return INITIAL_STATE;

        default:
            return state;
    }
};
