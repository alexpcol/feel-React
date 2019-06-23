import {
    LIST_RECEIPTS,
    LIST_RECEIPTS_ERROR,
} from './types';
import Api from '../services/Api';

/*
 * getProfile - Retrieve user profile.
 */
export function listReceipts() {
    return async (dispatch) => {
        try {
            const data = await Api.receipts.listReceipts();
            dispatch({
                type: LIST_RECEIPTS,
                payload: data,
            });
            return data;
        } catch (e) {
            Api.handleError(LIST_RECEIPTS_ERROR, dispatch);
        }
    };
}
