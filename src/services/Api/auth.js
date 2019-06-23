import Http from '../../lib/http';
import { oauth } from '../../config/endpoints';

function getAccessToken(username, password) {
  return Http.post(
    oauth,
    {
      client_id: 'pbxZwGcHno7XB5lIUz8aOVY3lPUDMqfANM8KmGaC',
      client_secret: 'AB5Ke2ZucwXevnHU7f11BbNeHNVACyQEQloru4w06PK86IMvuiZOxaB37uJC7gEdiEeigWbhQl2ij4GNVn7hVsd220xs3mM18SzrYSXZgau9ryyVlJWCnJCo6lvDLR4h',
      grant_type: 'password',
      username,
      password,
    },
    {
      form: true,
      auth: true,
    },
  );
}

function refreshAccessToken(refreshToken) {
  return Http.post(
    oauth,
    {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    {
      auth: {
        username: 'app-client',
        password: 'app-secret',
      },
      form: true,
    },
  );
}

export default {
  getAccessToken,
  refreshAccessToken,
}
