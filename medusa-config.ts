// medusa-config.ts
import { loadEnv, defineConfig, Modules } from "@medusajs/framework/utils"

loadEnv(process.env.NODE_ENV || "development", process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    workerMode:
      (process.env.WORKER_MODE as "shared" | "server" | "worker") || "shared",
    redisUrl: process.env.REDIS_URL,
  },

  admin: {
    disable: process.env.ADMIN_DISABLED === "true" || false,
    backendUrl: process.env.MEDUSA_BACKEND_URL,
  },

  modules: {
    [Modules.EVENT_BUS]: {
      resolve: "@medusajs/event-bus-redis",
      options: { redisUrl: process.env.EVENTS_REDIS_URL },
    },
    [Modules.FILE]: {
      resolve: "@medusajs/file",
      options: {
        providers: [
          {
            resolve: "@medusajs/file-s3",
            id: "s3",
            options: {
              file_url: process.env.S3_FILE_URL,
              access_key_id: process.env.S3_ACCESS_KEY_ID,
              secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
              region: process.env.S3_REGION || "auto",
              bucket: process.env.S3_BUCKET,
              endpoint: process.env.S3_ENDPOINT,
              additional_client_config: { forcePathStyle: true },
            },
          },
        ],
      },
    },
  },

  plugins: [],
})

