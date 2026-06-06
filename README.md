# SIMOSphere AI API Examples

Code examples for the [SIMOSphere AI](https://simosphereai.com) platform — European AI orchestration with GDPR compliance.

## Quick Start

```bash
npm install @simosphere/sdk
```

```typescript
import { SIMOSphereClient } from '@simosphere/sdk';

const client = new SIMOSphereClient({
  apiKey: process.env.SIMOSPHERE_API_KEY!,
});

const response = await client.chat({
  messages: [{ role: 'user', content: 'Summarize this quarterly report' }],
});
console.log(response.choices[0].message.content);
```

## Examples

- [Chat Completions](examples/chat-completion.ts) — OpenAI-compatible chat API
- [Streaming](examples/streaming.ts) — Server-sent events streaming
- [Function Calling](examples/function-calling.ts) — Tool use with typed schemas
- [Multi-Model Routing](examples/multi-model.ts) — Route to Mistral, OpenAI, or Anthropic
- [PII Redaction](examples/pii-redaction.ts) — Automatic PII removal before model calls

## Resources

- **API Docs**: https://simosphereai.com/de/developers
- **OpenAPI Spec**: https://api.simosphereai.com/openapi.json
- **SDK**: https://www.npmjs.com/package/@simosphere/sdk
- **CLI**: https://www.npmjs.com/package/@simosphere/cli
- **MCP Server**: https://mcp.simosphereai.com
- **llms.txt**: https://simosphereai.com/llms.txt

## License

MIT — Engineered at SIMO GmbH · Aschaffenburg, Germany
