import type { PersistStorage } from "zustand/middleware";
import readCartItems from "./index.validation";
import type { TPersistedCart } from "./index.types";

const cartStorage: PersistStorage<TPersistedCart> = {
  getItem: (name) => {
    try {
      const raw = localStorage.getItem(name);
      if (!raw) return null;
      const value: unknown = JSON.parse(raw);
      if (
        !value ||
        typeof value !== "object" ||
        !("version" in value) ||
        value.version !== 1 ||
        !("state" in value)
      )
        return null;

      return { version: 1, state: { items: readCartItems(value.state) } };
    } catch {
      return null;
    }
  },
  setItem: (name, value) => {
    try {
      localStorage.setItem(name, JSON.stringify(value));
    } catch {}
  },
  removeItem: (name) => {
    try {
      localStorage.removeItem(name);
    } catch {}
  },
};

export default cartStorage;
