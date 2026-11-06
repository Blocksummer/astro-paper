import type { APIRoute } from "astro";
import sharp from "sharp";
import cover from "../../public/summer-og.svg?raw";

// A local cover keeps builds independent of external font providers.
export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(cover)).png().toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
