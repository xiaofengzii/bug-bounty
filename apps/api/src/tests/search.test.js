import test from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../app.js";

test("GET /api/search with valid query returns 200", async () => {
  const app = createApp();
  const server = app.listen(0);

  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/api/search?q=javascript`);

  assert.equal(response.status, 200);

  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("GET /api/search with empty query returns 400", async () => {
  const app = createApp();
  const server = app.listen(0);

  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/api/search?q=`);

  assert.equal(response.status, 400);

  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("GET /api/search with single character query returns 400", async () => {
  const app = createApp();
  const server = app.listen(0);

  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/api/search?q=a`);

  assert.equal(response.status, 400);

  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("GET /api/search without query parameter returns 400", async () => {
  const app = createApp();
  const server = app.listen(0);

  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/api/search`);

  assert.equal(response.status, 400);

  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("GET /api/search with two character query returns 200", async () => {
  const app = createApp();
  const server = app.listen(0);

  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/api/search?q=ab`);

  assert.equal(response.status, 200);

  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});
