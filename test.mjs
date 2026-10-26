import{test}from'node:test';import assert from'node:assert/strict';import{readFile}from'node:fs/promises';import{CSP}from'./server.mjs';
test('instrument separates evidence channels and units explicitly',async()=>{const h=await readFile(new URL('index.html',import.meta.url),'utf8');for(const s of ['LOCAL CRYPTO','LOCAL SDK HOST','LIVE NETWORK','Ed25519 only on P29','not NIST certification'])assert.ok(h.includes(s),s)});
test('local frontend proxy retains strict script and framing policy',()=>{assert.match(CSP,/script-src 'self'/);assert.match(CSP,/frame-ancestors 'none'/)});
