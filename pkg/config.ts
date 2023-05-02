import {RedisConfigNodejs} from "@upstash/redis";

export const redisConfig: RedisConfigNodejs = {
  url: process.env.UPSTASH_REST_API_URL!,
  token: process.env.UPSTASH_REST_API_TOKEN!
}

export default redisConfig;