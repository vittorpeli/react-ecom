const storage = "sparrow-photography";

export function getStorage() {
  const data = sessionStorage.getItem(storage);
  return data && JSON.parse(data);
}

export function setStorage(data) {
  sessionStorage.setItem(storage, JSON.stringify(data));
}