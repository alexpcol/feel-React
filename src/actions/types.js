export const RESET = 'reset';

// App Actions
export const SET_CONNECTION_STATUS = 'set_connection_status';
export const LOADING = 'loading';

// Request errors
export const NETWORK_ERROR = 'network_error'; // Offline or expensive network
export const REQUEST_ERROR = 'request_error'; // Error on request it self (eg. req config)
export const SERVER_ERROR = 'server_error';

// Auth Actions
export const LOGIN_USER = 'login_user'; // login
export const LOGOUT_USER = 'logout_user'; // logout
export const AUTHORIZATION_ERROR = 'authorization_error';

// Customer
export const RETRIEVE_USER = 'retrieve_user';
export const RETRIEVE_USER_ERROR = 'retrieve_user_error';

// Kardex
export const LIST_KARDEX = 'list_kardex';
export const LIST_KARDEX_ERROR = 'list_kardex_error';
export const LIST_CLIENT_KARDEX = 'list_client_kardex';
export const LIST_CLIENT_KARDEX_ERROR = 'list_client_kardex_error';

// Employee
export const LIST_EMPLOYEES = 'list_employees';
export const LIST_EMPLOYEES_ERROR = 'list_employees_error';
export const RETRIEVE_EMPLOYEE = 'retrieve_employee';
export const RETRIEVE_EMPLOYEE_ERROR = 'retrieve_employee_error';

// Promotions
export const LIST_PROMOTIONS = 'list_promotions';
export const LIST_PROMOTIONS_ERROR = 'list_promotions_error';

// Receipts
export const LIST_RECEIPTS = 'list_receipts';
export const LIST_RECEIPTS_ERROR = 'list_receipts_error';

// Head Count
export const LIST_HEAD_COUNT = 'list_head_count';
export const LIST_HEAD_COUNT_ERROR = 'list_head_count_error';

// Period Spending
export const LIST_PERIOD_SPENDING = 'period_spending';
export const LIST_PERIOD_SPENDING_ERROR = 'period_spending_error';

// Acumulados
export const GATHERED = 'gathered';
export const GATHERED_ERROR = 'gathered_error';