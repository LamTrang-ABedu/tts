export async function onRequest(context) {
    const response = await fetch("https://voice.lam.io.vn/api/voices");
    return new Response(await response.text(), {
      status: response.status,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  