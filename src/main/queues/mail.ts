import { adaptQueue } from "../adapters/amqp-controller";
import { makeSendMailController } from "../factories/controllers/send-mail";

export default (channel: any): void => {
    channel.consume('send-mail', adaptQueue(channel, makeSendMailController()));
}