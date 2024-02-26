import proxy from "@fastify/http-proxy";
import Fastify from "fastify";
import { readFile, writeFile } from "fs/promises";

const server = Fastify();

server.get<{ Params: { thing: string } }>(
  "/api/data/:thing",
  async (request) => {
    return JSON.parse(
      await readFile(
        `${process.cwd()}/src/server/data/${request.params.thing}.json`,
        "utf8",
      ),
    );
  },
);

server.post<{ Params: { thing: string }; Body: {} }>(
  "/api/data/:thing",
  async (request) => {
    await writeFile(
      `${process.cwd()}/src/server/data/${request.params.thing}.json`,
      JSON.stringify(request.body),
    );
  },
);

server.register(proxy, {
  upstream: "http://localhost:9001",
});

server.listen({ port: 9000 });
