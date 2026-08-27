# MY TODO FILE
8/26:
- setup up connection to Cloudfare Via Terminal — done via Cloudflare MCP connector (authorized)

8/27:
- [x] Scaffold Next.js app with vinext, targeting Cloudflare Workers (Worker: com-rainbowsmokeofficial)
- [x] Create KV namespace (VINEXT_KV_CACHE) and paste its id into wrangler.jsonc
- [x] `npx wrangler login` (or set CLOUDFLARE_API_TOKEN) for CLI deploys — logged in as dfox@rainbowsmokeofficial.com
- [x] Run `npm install` + `npm run build` in WSL to verify build works
- [x] `npm run dev` to check it locally in a browser
- [x] First deploy: `npm run deploy` — live as Worker `com-rainbowsmokeofficial`
- [ ] Point custom domain (rainbowsmokeofficial.com) at the Worker

@Rainbowsmoke - the human
- [ ] Plan with @Claude, @Codex, @Copilot the web site/app for rainbowsmokeofficial.com (redesign current live app)
 - [ ] Reference ([BrandKit](https://dash.cloudflare.com/7fde695caf9cc41efca391316eb71003/rainbowsmokeofficial.com))
 - [x] Design Home/Landing Page (Phase) — built on brand kit tokens (Pride/Royalty/Cotton Candy palettes, Typekit fonts), with Header/Footer nav, Hero, platform cards (Twitch/YouTube/TikTok), community teaser. Verified: build passes, dev server renders correctly, fonts load, mobile nav works, no console errors. Not yet deployed (`npm run deploy` pending explicit go-ahead).
 - [ ] include pages- About, Contact, Privacy Policy, Terms and Conditions (Phase) — routes exist as "coming soon" placeholders (app/about, app/gallery, app/contact, app/members), real content still needed. Gallery placeholder also added (was missing from this list but is in the nav).
 - [ ]Create Members Only Portal (Phase)
- [ ] move brandkit to R2 (cdn  use)
- [ ] user database (d1)
- [ ] assest database (d1) for music, cover art, lyrics, etc