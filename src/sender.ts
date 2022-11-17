
import { start } from "repl"
import { create, Whatsapp, Message, SocketState } from "venom-bot"
import parsePhoneNumber, { isValidPhoneNumber, PhoneNumber } from "libphonenumber-js"

class Sender {
    private client: Whatsapp
    constructor() {
        this.initialize()

    }

    async sendText(to: string, body: string) {

        if (!isValidPhoneNumber(to, "BR")) {
            throw new Error("Número inválido")
        }
        let phoneNumber = parsePhoneNumber(to, "BR")?.format("E.164").replace("+", "") as string
        phoneNumber = phoneNumber.includes("@c.us")
            ? phoneNumber
            : `${phoneNumber}@c.us`

        await this.client.sendText(phoneNumber, body)

    }

    private initialize() {
        const qr = (base64Qrimg: string) => {
            console.log()
        }

        const status = (statusSession: string) => {
        }

        const start = (client: Whatsapp) => {
            this.client = client

        }


        create('suporte', qr, status)
            .then((client) => start(client))
            .catch((error) => console.error(error))
    }
}
export default Sender