declare module 'marklogic' {

  export interface ResultProvider<R> extends NodeJS.ReadWriteStream {
    result<U>(onFulfilled:  (value: R) => Promise<U>, onRejected:  (error: any) => Promise<U>, onProgress?: (note: any) => any): Promise<U>;
    result<U>(onFulfilled:  (value: R) => Promise<U>, onRejected?: (error: any) => U,          onProgress?: (note: any) => any): Promise<U>;
    result<U>(onFulfilled:  (value: R) => U,          onRejected:  (error: any) => Promise<U>, onProgress?: (note: any) => any): Promise<U>;
    result<U>(onFulfilled?: (value: R) => U,          onRejected?: (error: any) => U,          onProgress?: (note: any) => any): Promise<U>;
  }

  export interface DatabaseClient {
    release: () => void;
    xqueryEval: <U>(query: string, variables?: Variables) => ResultProvider<U>;
    eval: <U>(query: string, variables?: Variables) => ResultProvider<U>;
    invoke: <U>(path: string, variables?: Variables) => ResultProvider<U>;
    read: (uri: string) => ResultProvider<string[]>;
    writeCollection: (collection: string, documents: Record<string, unknown>) => ResultProvider<string[]>;
    removeCollection: (collection: string) => ResultProvider<string>;
  }

  export interface ConnectionParams {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
    authType: string;
    ssl: boolean;
    ca: string;
    rejectUnauthorized: boolean;
  }

  export interface Variables {
    [name: string]: number|string|boolean;
  }

  export function createDatabaseClient(connectionParams: ConnectionParams): DatabaseClient

  export interface DocumentDescriptor {
      uri: string;
      content?: string | Buffer | Record<string, unknown>;
      collections?: string[];
  }
}
