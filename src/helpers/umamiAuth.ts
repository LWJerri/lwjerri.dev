import { UMAMI_PASSWORD, UMAMI_USERNAME } from "$env/static/private";

export async function umamiAuth(apiUrl: string): Promise<{ token: string; isOk: boolean }> {
  const umamiAuthRequest = await fetch(`${apiUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: UMAMI_USERNAME, password: UMAMI_PASSWORD }),
  });

  let receivedToken: string = "";
  let isOk = umamiAuthRequest.status === 200;

  if (isOk) {
    const { token } = await umamiAuthRequest.json();

    receivedToken = token;
  }

  return { token: receivedToken, isOk };
}
