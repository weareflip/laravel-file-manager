export class Api {

  static get(path: string) {
    return Api.call(path);
  }

  static post(path: string, data: Object) {
    return Api.call(path, 'POST', data);
  }

  static patch(path: string, data: Object) {
    return Api.call(path, 'POST', Object.assign(data, {'_method': 'PATCH'}));
  }

  static put(path: string, data: Object) {
    return Api.call(path, 'POST', Object.assign(data, {'_method': 'PUT'}));
  }

  static destroy(path: string, data: Object) {
    return Api.call(path, 'POST', Object.assign(data, {'_method': 'DELETE'}));
  }

  static call(path: string, method: string = 'GET', data: Object = {}) {
    let host = process.env.API_LOCATION + path;
    let headers = Object.assign({
      type: 'cors',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, {
      method: method,
      body: JSON.stringify(data)
    });

    return fetch(host, headers)
      .then((res) => Promise.all([res, res.json()]))
      .then(([res, json]) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error(json.message);
        }

        return json;
      });
  }
}
