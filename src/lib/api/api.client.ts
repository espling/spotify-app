export interface IApiClient {
  //   post<TRequest, TResponse>(
  //     path: string,
  //     object: TRequest,
  //     config?: RequestInfo
  //   ): Promise<TResponse>;
  //   patch<TRequest, TResponse>(
  //     path: string,
  //     object: TRequest
  //   ): Promise<TResponse>;
  //   put<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse>;
  get<TResponse>(
    path: RequestInfo | URL,
    config?: RequestInit
  ): Promise<TResponse>;
}

export default class ApiClient implements IApiClient {
  private client: typeof fetch;

  constructor() {
    this.client = fetch;
  }

  async get<TResponse>(
    path: RequestInfo | URL,
    config?: RequestInit
  ): Promise<TResponse> {
    try {
      const response = await this.client(path, config);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
    return {} as TResponse;
  }
}

function settlePromise(promise: Promise<any>) {
  return Promise.allSettled([promise]).then(function (result) {
    const [{ status }] = result;
    if (status === "fulfilled") {
      const [{ value }] = result as PromiseFulfilledResult<any>[];
      return { data: value, error: undefined };
    } else {
      const [{ reason }] = result as PromiseRejectedResult[];
      return { data: undefined, error: reason };
    }
  });
}
