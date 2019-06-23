import {
    LIST_PROMOTIONS,
    LIST_PROMOTIONS_ERROR,
} from './types';
import Api from '../services/Api';

/*
 * getProfile - Retrieve user profile.
 */
export function listPromotions() {
    return async (dispatch) => {
        try {
            const data = await Api.promotions.listPromotions();
            dispatch({
                type: LIST_PROMOTIONS,
                payload: data,
            });
            return data;
        } catch (e) {
            Api.handleError(LIST_PROMOTIONS_ERROR, dispatch);
        }
    };
}
