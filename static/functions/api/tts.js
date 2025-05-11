export async function onRequest(context) {
    const request = context.request;
    const body = await request.text();
    const response = await fetch("https://voice.lam.io.vn/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    });
  
    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "application/octet-stream"
      }
    });
  }
  