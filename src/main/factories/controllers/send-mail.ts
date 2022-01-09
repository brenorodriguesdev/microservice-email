import { SendMailService } from "../../../data/services/send-mail"
import { NodemailerProvider } from "../../../infra/nodemailer-provider"
import { SendMailController } from "../../../presentation/controllers/send-mail"
import { makeSendMailValidator } from "../validators/send-mail"

export const makeSendMailController = (): SendMailController => {
    const nodemailerProvider = new NodemailerProvider()
    const sendMailService = new SendMailService(nodemailerProvider)
    return new SendMailController(makeSendMailValidator(), sendMailService)
}