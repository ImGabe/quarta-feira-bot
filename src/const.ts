import type { AppBskyFeedPost } from "@atproto/api";

const embed: AppBskyFeedPost.Record["embed"] = {
  $type: "app.bsky.embed.images",
  images: [
    {
      image: {
        $type: "blob",
        ref: {
          $link: "bafkreifna5h5qvbtgszf2ip56zdflyppssiba3ftlwwukg6xro5tkuhe3e",
        },
        mimeType: "image/png",
        size: 202248,
      },
      alt: 'Sapo fazendo hangloose e texto escrito "é quarta-feira meus bacanos"',
    },
  ],
};

const postRecord: AppBskyFeedPost.Record = {
  $type: "app.bsky.feed.post",
  langs: ["pt-BR"],
  text: "É quarta feira meus bacanos!",
  embed: embed,
  createdAt: new Date().toISOString(),
};

export { postRecord };
