import { SendMailUseCase } from "../../domain/useCases/send-mail"
import { Validator } from "../../validation/contracts/validator"
import { Controller } from "../contracts/controller"
import { AMQPRequest } from "../contracts/amqp"

export class SendMailController implements Controller {
    constructor(private readonly validator: Validator, private readonly sendMailUseCase: SendMailUseCase) { }
    async handle(AMQPRequest: AMQPRequest): Promise<any> {
        const error = this.validator.validate(AMQPRequest.payload)
        if (error) {
            throw error
        }
        const { to, subject, body } = AMQPRequest.payload
        await this.sendMailUseCase.send({
            to,
            subject,
            body
        })
    }
}