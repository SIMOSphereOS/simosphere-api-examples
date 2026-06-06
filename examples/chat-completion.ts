import { SIMOSphereClient } from '@simosphere/sdk';

const client = new SIMOSphereClient({
  apiKey: process.env.SIMOSPHERE_API_KEY!,
});

async function main() {
  const response = await client.chat({
    model: 'mistral-large-2',
    messages: [
      { role: 'system', content: 'You are a helpful assistant for a German manufacturing company.' },
      { role: 'user', content: 'Fasse den Quartalsbericht zusammen und identifiziere die Top-3-Risiken.' },
    ],
  });

  console.log(response.choices[0].message.content);
}

main().catch(console.error);
