const url = "http://localhost:3001/api/photos"

export const createPhoto = async (photo) => {
  const headers = new Headers({
    "Content-Type": "application/json"
  })

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(photo),
    headers,
  })

  let body = null;
  const contentType = response.headers.get('Content-Type');
  if (contentType.includes("application/json")) {
    body = await response.json();
  }

  if (response.ok) {
    return body;
  }

  throw new Error(response, body);
}