import api from "@/api";
import { cache } from "react";
import { normalizeApiError } from "@/api/errors";
import type { TApiResult } from "@/types/api";
import type { TCategory, TProduct } from "@/types/product";
import { isProduct } from "./index.validation";

export const getProducts = async (): Promise<TApiResult<TProduct[]>> => {
  if (!process.env.FAKESTORE_API_BASE_URL) return { success: false, error: { code: "configuration" } };
  try {
    const { data } = await api.get<unknown>("/products");
    if (!Array.isArray(data) || !data.every(isProduct)) return { success: false, error: { code: "invalidResponse" } };

    return { success: true, data };
  } catch (error) {
    return { success: false, error: normalizeApiError(error) };
  }
};

export const getCategories = cache(async (): Promise<TApiResult<TCategory[]>> => {
  if (!process.env.FAKESTORE_API_BASE_URL) return { success: false, error: { code: "configuration" } };
  try {
    const { data } = await api.get<unknown>("/products/categories");
    if (!Array.isArray(data) || !data.every((item): item is string => typeof item === "string")) return { success: false, error: { code: "invalidResponse" } };

    return { success: true, data };
  } catch (error) {
    return { success: false, error: normalizeApiError(error) };
  }
});
import "server-only";
