<div align="center">

# SIMOSphere AI API Examples

**Code examples for the SIMOSphere AI platform -- European AI orchestration with GDPR compliance.**

[![npm](https://img.shields.io/npm/v/@simosphere/sdk)](https://www.npmjs.com/package/@simosphere/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[English](#english) | [Deutsch](#deutsch)

</div>

---

## English

### Overview

Production-ready code examples for the [SIMOSphere AI](https://simosphereai.com) platform. Each example demonstrates a specific integration pattern using the official [`@simosphere/sdk`](https://www.npmjs.com/package/@simosphere/sdk).

Built by [SIMO GmbH](https://simo-online.com). EU-hosted, GDPR-compliant inference.

### Quick Start

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

### Examples

| Example | Description |
| ------- | ----------- |
| [Chat Completions](examples/chat-completion.ts) | OpenAI-compatible chat API |
| [Streaming](examples/streaming.ts) | Server-sent events streaming |
| [Function Calling](examples/function-calling.ts) | Tool use with typed schemas |
| [Multi-Model Routing](examples/multi-model.ts) | Route to Mistral, OpenAI, or Anthropic |
| [PII Redaction](examples/pii-redaction.ts) | Automatic PII removal before model calls |

### Resources

- **API Documentation:** [simosphereai.com/de/developers](https://simosphereai.com/de/developers)
- **OpenAPI Spec:** [api.simosphereai.com/openapi.json](https://api.simosphereai.com/openapi.json)
- **SDK:** [@simosphere/sdk on npm](https://www.npmjs.com/package/@simosphere/sdk)
- **CLI:** [@simosphere/cli on npm](https://www.npmjs.com/package/@simosphere/cli)
- **MCP Server:** [mcp.simosphereai.com](https://mcp.simosphereai.com)
- **llms.txt:** [simosphereai.com/llms.txt](https://simosphereai.com/llms.txt)

---

## Deutsch

### Ueberblick

Produktionsreife Codebeispiele fuer die [SIMOSphere AI](https://simosphereai.com)-Plattform. Jedes Beispiel veranschaulicht ein konkretes Integrationsmuster mit dem offiziellen [`@simosphere/sdk`](https://www.npmjs.com/package/@simosphere/sdk).

Entwickelt von [SIMO GmbH](https://simo-online.com). EU-Hosting, DSGVO-konform.

### Schnelleinstieg

```bash
npm install @simosphere/sdk
```

```typescript
import { SIMOSphereClient } from '@simosphere/sdk';

const client = new SIMOSphereClient({
  apiKey: process.env.SIMOSPHERE_API_KEY!,
});

const response = await client.chat({
  messages: [{ role: 'user', content: 'Fasse diesen Quartalsbericht zusammen' }],
});
console.log(response.choices[0].message.content);
```

### Beispiele

| Beispiel | Beschreibung |
| -------- | ------------ |
| [Chat Completions](examples/chat-completion.ts) | OpenAI-kompatible Chat-API |
| [Streaming](examples/streaming.ts) | Server-Sent-Events-Streaming |
| [Function Calling](examples/function-calling.ts) | Tool-Nutzung mit typisierten Schemas |
| [Multi-Model Routing](examples/multi-model.ts) | Routing zu Mistral, OpenAI oder Anthropic |
| [PII Redaction](examples/pii-redaction.ts) | Automatische PII-Entfernung vor Modellaufrufen |

### Ressourcen

- **API-Dokumentation:** [simosphereai.com/de/developers](https://simosphereai.com/de/developers)
- **OpenAPI-Spezifikation:** [api.simosphereai.com/openapi.json](https://api.simosphereai.com/openapi.json)
- **SDK:** [@simosphere/sdk auf npm](https://www.npmjs.com/package/@simosphere/sdk)
- **CLI:** [@simosphere/cli auf npm](https://www.npmjs.com/package/@simosphere/cli)
- **MCP-Server:** [mcp.simosphereai.com](https://mcp.simosphereai.com)
- **llms.txt:** [simosphereai.com/llms.txt](https://simosphereai.com/llms.txt)

---

## License / Lizenz

MIT -- Engineered at SIMO GmbH · Aschaffenburg, Germany
