import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  server: {
    SUMSUB_APP_TOKEN: z.string(),
    SUMSUB_SECRET_KEY: z.string(),
  },
  runtimeEnv: {
    SUMSUB_APP_TOKEN: process.env.SUMSUB_APP_TOKEN,
    SUMSUB_SECRET_KEY: process.env.SUMSUB_SECRET_KEY,
  },
  skipValidation:
    process.env.SKIP_ENV_VALIDATION === "true" ||
    process.env.SKIP_ENV_VALIDATION === "1",
});
