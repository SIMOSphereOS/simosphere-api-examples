// SSE streaming with SIMOSphere AI
const response = await fetch('https://api.simosphereai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.SIMOSPHERE_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'auto',
    messages: [{ role: 'user', content: 'Explain GDPR Article 25 in simple terms.' }],
    stream: true,
  }),
});

const reader = response.body!.getReader();
const decoder = new TextDecoder();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  const chunk = decoder.decode(value);
  process.stdout.write(chunk);
}
