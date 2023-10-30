import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { exec } from "https://deno.land/x/exec/mod.ts";
const app = new Application();
const router = new Router();
router.get("/convert", async (context) => {
  const { request, response } = context;
  const url = request.url.searchParams.get("url");
  console.log(url);

  const tempFileName = `temp_${Date.now()}.mp4`;

  const cmd = `ffmpeg -i ${url} -c copy ${tempFileName}`;
  await exec(cmd);

  const mp4Buffer = await Deno.readFile(tempFileName);

  response.headers.set("Content-Type", "video/mp4");
  response.headers.set(
    "Content-Disposition",
    'attachment; filename="video.mp4"',
  );

  response.body = mp4Buffer;

  await Deno.remove(tempFileName);
});
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
