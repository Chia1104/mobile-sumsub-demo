import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import type { PersistQueryClientOptions } from "@tanstack/react-query-persist-client";
import { createMMKV } from "react-native-mmkv";

export const kv = createMMKV({ id: "query" });

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

export const queryPersister = createAsyncStoragePersister({
  storage: {
    getItem: (key) => kv.getString(key),
    setItem: (key, value) => {
      kv.set(key, value);
    },
    removeItem: (key) => {
      kv.remove(key);
    },
  },
});

export const persistOptions: Omit<PersistQueryClientOptions, "queryClient"> = {
  persister: queryPersister,
  maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
};
