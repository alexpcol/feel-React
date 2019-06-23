export default class RequestError extends Error {
  constructor(message, args = {}) {
    super();

    Error.captureStackTrace(this, RequestError);

    this.message = message;
    this.type = args.type || 'GenericError';
    if (args.status) this.status = args.status;
    if (args.message) this.message = args.message;
    if (args.code) this.code = args.code;
    if (args.appError) this.appError = args.appError;
  }
}
