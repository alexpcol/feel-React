import Http from '../../lib/http';
import Endpoints from '../../config/endpoints';

function listPromotions() {
    return Http.get(Endpoints.listPromotions);
}

export default {
    listPromotions,
};
