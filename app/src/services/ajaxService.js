export function ajaxService(url, params) {
  return fetch('http://localhost:5000' + url, params).then((data) => {
    return data.json();
  });
}
