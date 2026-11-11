import axios from "axios";
import type { TApiError } from "@/types/api";

export const normalizeApiError = (error: unknown): TApiError => {
  if (axios.isAxiosError(error)) {
    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") return { code: "timeout" };
    if (error.response) return { code: "http", status: error.response.status };

    return { code: "network" };
  }

  return { code: "unknown" };
};
