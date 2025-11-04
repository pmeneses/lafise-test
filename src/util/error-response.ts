export enum HttpStatusErrorCode {
  // 4xx Client Errors
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  GONE = 410,
  UNPROCESSABLE_ENTITY = 422,

  // 5xx Server Errors
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

export const errorResponse = (error: any, httpCode = HttpStatusErrorCode.INTERNAL_SERVER_ERROR) => {
  let data: { [key: string]: any } = {};
  if (typeof error === 'string') data['message'] = error;
  else data = { ...error };

  const headers = new Headers({
    Expires: '0',
    Pragma: 'no-cache',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Surrogate-Control': 'no-store',
  });

  return new Response(JSON.stringify(data), {
    status: httpCode,
    headers: headers,
  });
};
