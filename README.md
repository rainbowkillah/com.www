# RAINBOWSMOKEOFFICIAL.com

Full-stack Next.js app deployed to Cloudflare Workers via [vinext](https://vinext.dev/).

## Stack

- Next.js (App Router, TypeScript, Tailwind CSS)
- [vinext](https://vinext.dev/) — Vite plugin that runs the Next.js API surface on Cloudflare Workers
- Cloudflare Workers (Worker name: `com-rainbowsmokeofficial`)
- Bindings: KV (`VINEXT_KV_CACHE`), Images

## Development

This project targets Node.js via WSL (Ubuntu). From the repo root inside WSL:

```bash
npm install
npm run dev      # start the vinext dev server
npm run build    # build the Cloudflare Worker output
npm run start    # run the built Worker locally with Wrangler
npm run deploy   # deploy to Cloudflare Workers
```

## Cloudflare setup

Before the first deploy:

1. Create the KV namespace:
   ```bash
   npx wrangler kv namespace create VINEXT_KV_CACHE
   ```
2. Copy the returned namespace `id` into `wrangler.jsonc` under `kv_namespaces`.
3. Authenticate Wrangler (`npx wrangler login`, or set `CLOUDFLARE_API_TOKEN`) — this is separate from any Cloudflare MCP connector authorization used by an AI assistant.
