// Task: Create a mapped type PartialWithExceptions<T, K> such that all properties in T are optional except those in union K, which stay required.
 
//  Example:
//  interface Config {
//    host: string;
//    port: number;
//    timeout: number;
//  }
//  type PartialConfig = PartialWithExceptions<Config, 'host'>;
//  // host must be present; port and timeout are optional
 
type PartialWithExceptions<T, K extends keyof T> = {
    Partial<T> & Pick<T, K>
}
