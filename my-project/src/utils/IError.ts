export interface IError {
  message?: string;
  response: {
    status: number;
    data: any;
  }
}
