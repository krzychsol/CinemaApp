import { User } from "./user.model";

export interface ResponseMessage {
  validationMessages: string[],
  token: string,
  data: any,
}