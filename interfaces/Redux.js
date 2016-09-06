// Need to use types instead of interfaces with Maybe types due to https://github.com/facebook/flow/issues/2167

declare type Action = {
  type?: string,
  username?: ?string,
  repositories?: Array<Repository>,
  error?: ?string
}

declare type State = {
  isFetching: boolean,
  username: ?string,
  repositories: Array<Repository>,
  error: ?string
}
