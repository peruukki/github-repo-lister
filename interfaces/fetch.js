declare interface FetchErrorResponse {
  status: number,
  statusText?: string
};

declare interface FetchError {
  response?: FetchErrorResponse,
  toString: () => string
};
