import Http from '../../lib/http';
import Endpoints from '../../config/endpoints';

function gathered() {
    return Http.get(Endpoints.gathered);
}

export default {
    gathered,
};
