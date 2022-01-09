import { SendMailModel } from "../../domain/models/send-mail";
import { SendMailUseCase } from "../../domain/useCases/send-mail";
import { MailProvider } from "../contracts/mail-provider";

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export class SendMailService implements SendMailUseCase {
    constructor (private readonly mailProvider: MailProvider) {}
    async send(data: SendMailModel): Promise<void> {
        await this.mailProvider.sendMail({
            to: {
                email: data.to,
                name: data.to
            },
            from: {
                email: process.env.EMAIL,
                name: process.env.NAME
            },
            subject: data.subject,
            body: data.body,
        })
        await sleep(Number(process.env.SEND_PER_SECONDS) * 1000)
    }
}