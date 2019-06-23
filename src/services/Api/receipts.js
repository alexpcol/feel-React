import Http from '../../lib/http';
import Endpoints from '../../config/endpoints';

function listReceipts() {
    return Http.get(Endpoints.listReceipts);
}

export default {
    listReceipts,
};
