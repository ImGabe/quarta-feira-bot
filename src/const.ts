import type { AppBskyFeedPost } from "@atproto/api";

type ImageEmbed = AppBskyFeedPost.Record["embed"];

function createImageEmbed(imageLink: string, mimeType: string, size: number, altText: string): ImageEmbed {
  return {
    $type: "app.bsky.embed.images",
    images: [
      {
        image: {
          $type: "blob",
          ref: { $link: imageLink },
          mimeType: mimeType,
          size: size,
        },
        alt: altText,
      },
    ],
  };
}

type PostRecord = AppBskyFeedPost.Record;

function createPostRecord(text: string, embed: ImageEmbed): PostRecord {
  return {
    $type: "app.bsky.feed.post",
    langs: ["pt-BR"],
    text: text,
    embed: embed,
    createdAt: new Date().toISOString(),
  };
}

const embed = createImageEmbed(
  "bafkreifna5h5qvbtgszf2ip56zdflyppssiba3ftlwwukg6xro5tkuhe3e",
  "image/png",
  202248,
  'Sapo fazendo hangloose e texto escrito "é quarta-feira meus bacanos"'
);

const postRecord = createPostRecord("É quarta feira meus bacanos!", embed);

export { postRecord };
