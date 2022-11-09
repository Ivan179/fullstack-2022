export function ajaxService(url, params) {
  return fetch('http://localhost:8000/api' + url, params).then((data) => {
    return data.json();
  });
}
