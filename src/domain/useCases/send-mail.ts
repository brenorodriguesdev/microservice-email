import { SendMailModel } from "../models/send-mail";

export interface SendMailUseCase {
    send: (data: SendMailModel) => Promise<void>
}