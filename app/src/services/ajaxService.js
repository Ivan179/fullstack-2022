export function ajaxService(url, params = {}) {
  let accessToken = window.localStorage.getItem('ACCESS');
  let newParams = params;
  if (accessToken) {
    newParams = {
      ...params,
      headers: { ...params.headers, Authorization: `Bearer ${accessToken}` },
    };
  }
  return fetch('http://localhost:8000/api' + url, newParams).then((data) => {
    if (data.status === 401 && window.localStorage.getItem('REFRESH')) {
      ajaxAuthService('/token/refresh/', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          refresh: window.localStorage.getItem('REFRESH'),
        }),
      }).then((data) => {
        window.localStorage.setItem('ACCESS', data.access);
        newParams = {
          ...params,
          headers: {
            ...params.headers,
            Authorization: `Bearer ${data.access}`,
          },
        };

        fetch('http://localhost:8000/api' + url, newParams).then((data) => {
          if (data.ok) {
            return data.json();
          }

          throw Error();
        });
      });
    }
    if (data.ok) {
      return data.json();
    }

    throw Error();
  });
}

export function ajaxAuthService(url, params = {}) {
  return fetch('http://localhost:8000/api' + url, params).then((data) => {
    if (data.ok) {
      return data.json();
    }

    throw Error();
  });
}
