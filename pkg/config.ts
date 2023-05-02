import {RedisConfigNodejs} from "@upstash/redis";

export const redisConfig: RedisConfigNodejs = {
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!
}

export default redisConfig;