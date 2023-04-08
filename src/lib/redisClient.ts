import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, REDIS_USERNAME } from "$env/static/private";
import { Redis } from "ioredis";

const redisClient = new Redis({
  username: REDIS_USERNAME,
  password: REDIS_PASSWORD,
  host: REDIS_HOST,
  port: parseInt(REDIS_PORT),
});

export default redisClient;
