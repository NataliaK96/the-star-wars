export const baseUrl = 'https://swapi.dev';
const getHeaders = () => {
    const headers: { [key: string]: string } = {};
    return headers;
  };
const CONNECTION_TIMEOUT = 60000;
const timeout = (ms: number, promise: Promise<any>): Promise<Response> => {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('TIMEOUT'));
      }, ms);
  
      promise
        .then((value) => {
          clearTimeout(timer);
          resolve(value);
        })
        .catch((reason) => {
          clearTimeout(timer);
          reject(reason);
        });
    });
  };
export const request = async (path: string, params: any) => {
    const url = baseUrl + path;
    try {
      const response = await timeout(
        CONNECTION_TIMEOUT,
        fetch(url, {
          ...params,
          headers: getHeaders(),
        }),
      );
  
      if (/^2[0-9]{2}$/.test(response.status.toString())) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const data = await response.json();
          return data;
        } else {
          return Promise.resolve();
        }
      } else {
        throw new Error(response.statusText);
      }
    } catch (e) {
      console.error(e);
      return Promise.reject(e);
    }
  };