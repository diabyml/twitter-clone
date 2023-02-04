import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import { COOKIE_NAME, __prod__ } from "../constants";

// so req.session works properly
declare module "express-session" {
  interface SessionData {
    userId: number;
  }
}

const RedisStore = connectRedis(session);
const redis = __prod__
  ? new Redis(process.env.REDIS_URL as string)
  : new Redis();

export const mySession = session({
  name: COOKIE_NAME,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
    httpOnly: true,
    sameSite: __prod__ ? "lax" : "none", //csref
    secure: __prod__, // cookie only works in https
    domain: __prod__ ? ".domain.com" : undefined,
  },
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  store: new RedisStore({
    client: redis,
    disableTouch: true,
  }),
});
