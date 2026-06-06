# AGENTS.md — SIMOSphere AI

## Project
SIMOSphere AI — European AI orchestration platform for enterprises.
OpenAI-compatible REST API hosted in Germany (EU data residency).

## Main APIs
- REST API: https://api.simosphereai.com (OpenAPI: https://api.simosphereai.com/openapi.json)
- MCP Server: https://simosphereai.com/.well-known/mcp (Streamable HTTP)

## Authentication
- API Key: Bearer token in Authorization header
- Get a key: https://onboarding.simosphereai.com/register

## SDK
- npm: `npm install @simosphere/sdk`
- CLI: `npm install -g @simosphere/cli`

## Quick Start
```typescript
import OpenAI from "openai";
const client = new OpenAI({
  baseURL: "https://api.simosphereai.com/v1",
  apiKey: process.env.SIMO_API_KEY,
});
const res = await client.chat.completions.create({
  model: "qwen/qwen3-8b",
  messages: [{ role: "user", content: "Hello" }],
});
```

## MCP Tools
- search_documents, query_database, create_record, send_notification

## Default Model
`qwen/qwen3-8b` — use `qwen/qwen3-30b` for premium reasoning.

## Rate Limits
Read `X-RateLimit-Remaining` header. Honour `Retry-After` on 429.

## Data Residency
EU only (Germany). GDPR-compliant. EU AI Act-ready.

## Resources
- Developer docs: https://simosphereai.com/en/docs
- llms.txt: https://simosphereai.com/llms.txt
- llms-full.txt: https://onboarding.simosphereai.com/llms-full.txt
- OpenAPI: https://onboarding.simosphereai.com/openapi.json

## Operator
SIMO GmbH, Wuerzburger Str. 152, 63743 Aschaffenburg, Germany
