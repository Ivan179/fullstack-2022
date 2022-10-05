export function ajaxService(url) {
  return fetch('http://localhost:5000' + url).then((data) => {
    return data.json();
  });
}
