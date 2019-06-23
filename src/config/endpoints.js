import AppConfig from './config';

const HOST = `${AppConfig.app.apiProtocol}://${AppConfig.app.apiHost}`;
// const HOST = `http://127.0.0.1:3000`;
const API_HOST = `${HOST}/${AppConfig.app.apiVersion}`;

module.exports = {
  baseURL: `${HOST}`,
  oauth: `${HOST}/api/v1/o/token`,
  profile: `${HOST}/api/v1/accounts/profile/me/`,
  listKardex: `${API_HOST}/accounts/kardex/`,

  listEmployees: `${API_HOST}/catalogs/employees/`,
  retrieveEmployee: `${API_HOST}/catalogs/employees/`,

  listPromotions: `${API_HOST}/accounts/promotions/`,

  listReceipts: `${API_HOST}/accounts/recibos/`,

  listClientKardex: `${API_HOST}/catalogs/kardex-sum/`,

  listHeadCount: `${API_HOST}/catalogs/headcount/`,

  listPeriodSpending: `${API_HOST}/api/v1/catalogs/cost/`,

  gathered: `${API_HOST}/accounts/acumulados/`,

};
