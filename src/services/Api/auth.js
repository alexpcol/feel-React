import Http from '../../lib/http';
import { oauth } from '../../config/endpoints';

function getAccessToken() {
  return Http.post(
    oauth,
    {
      username: '56c35f0211a94a46a581fc78506eeb47',
      password: '196ae915f25044d7afc1688ce2463812',
      grant_type: 'client_credentials',
    },
    {
      auth: true,
    },
  );
}

export default {
  getAccessToken,
}
