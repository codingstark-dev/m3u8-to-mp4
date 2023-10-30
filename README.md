/**
 * This script creates a server using the Oak framework and listens on port 3000.
 * When a GET request is made to the "/convert" endpoint with a "url" query parameter,
 * the script downloads the video from the URL, converts it to an MP4 file using FFmpeg,
 * and sends the MP4 file as a response with the "Content-Disposition" header set to
 * "attachment; filename="video.mp4"".
 *
 * @requires import { Application, Router } from "https://deno.land/x/oak/mod.ts"
 * @requires import { exec } from "https://deno.land/x/exec/mod.ts"
 */
