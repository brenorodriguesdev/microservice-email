import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { MailProvider, Message } from '../data/contracts/mail-provider'

export class NodemailerProvider implements MailProvider {
  private readonly transporter: Mail

  constructor () {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
  }

  async sendMail (message: Message): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}