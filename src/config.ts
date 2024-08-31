import "dotenv/config";
import { env } from "node:process";

import type { AtpAgentLoginOpts } from "@atproto/api";

if (!env.BSKY_HANDLE) {
  throw new Error("the BSKY_HANDLE field cannot be empty ");
}

if (!env.BSKY_PASSWORD) {
  throw new Error("the BSKY_PASSWORD field cannot be empty");
}

const bskyAccount: AtpAgentLoginOpts = {
  identifier: env.BSKY_HANDLE,
  password: env.BSKY_PASSWORD,
};

export { bskyAccount };
