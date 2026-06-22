import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  client: {
    EXPO_PUBLIC_SERVICE_ENDPOINT: z.string(),
  },
  runtimeEnv: {
    EXPO_PUBLIC_SERVICE_ENDPOINT: process.env.EXPO_PUBLIC_SERVICE_ENDPOINT,
  },
  clientPrefix: "EXPO_PUBLIC_",
  emptyStringAsUndefined: true,
});
