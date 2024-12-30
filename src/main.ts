import { server } from "./app.module";
import ConfigModule from "./config.module";
import { logger } from "./lib/logger";

(() => {
  try {
    server.listen(ConfigModule.getOrThrow("port"), () => {
      logger.info(` Server running on port ${ConfigModule.getOrThrow("port")}`);
    });
  } catch (error: any) {
    logger.error(error);
    process.exit(1);
  }
})();
