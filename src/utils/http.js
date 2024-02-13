export const create = (url, body) => {
  return request(url, {
    method: "POST",
    body: body,
    headers: { 'Content-Type': 'application/json' }
  })
}

export const edit = (url, body, id) => {
  return request(`${url}/${id}`, {
    method: "PUT",
    body: body,
    headers: { 'Content-Type': 'application/json' }
  })
}

export const destroy = (url, id) => {
  return request(`${url}/${id}`, {
    method: "DELETE"
  })
}

async function request(path, options) {
  const headers = new Headers()

  if(options.body) {
    headers.append('Content-Type', 'application/json')
  }

  if (options.headers) {
    Object.entries(options.headers).forEach(({name, value}) => {
      headers.append(name, value)
    });
  }

  const response = await fetch(path, {
    method: options.method,
    body: JSON.stringify(options.body),
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

// export default new Http(url);