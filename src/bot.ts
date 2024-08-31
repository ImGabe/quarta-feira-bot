import { BskyAgent } from "@atproto/api";

import type {
  AtpAgentLoginOpts,
  AppBskyFeedPost,
} from "@atproto/api";

const bot = async (LoginOpts: AtpAgentLoginOpts, BskyFeedPost: AppBskyFeedPost.Record) => {
  const agent = new BskyAgent({ service: "https://bsky.social/" });

  await agent.login(LoginOpts);
  await agent.post(BskyFeedPost);
};

export { bot }
