type FetchApiType = {
  path: RequestInfo | URL;
  init?: RequestInit;
};

const defaultPath = 'http://3.35.194.197:8000';

const fetchApi = async <T>({path, init}: FetchApiType) => {
  const endPoint = `${defaultPath}/${path}`;
  const response = await fetch(endPoint, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...init,
  });
  if (response.ok && response.status !== 204) {
    const data: T = await response.json();
    return data;
  }
};

export default fetchApi;
