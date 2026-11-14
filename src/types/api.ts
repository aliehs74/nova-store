export type TApiErrorCode =
  | "configuration"
  | "timeout"
  | "network"
  | "http"
  | "invalidResponse"
  | "unknown";

export type TApiError = { code: TApiErrorCode; status?: number };

export type TApiResult<T> =
  { success: true; data: T } | { success: false; error: TApiError };
