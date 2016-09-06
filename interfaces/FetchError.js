declare interface FetchErrorResponse {
  status: number
};

declare interface FetchError {
  response?: FetchErrorResponse,
  toString: () => string
};
