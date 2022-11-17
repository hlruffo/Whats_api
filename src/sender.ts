import { start } from "repl"
import { create, Whatsapp, Message, SocketState } from "venom-bot"

class Sender {
    private client: Whatsapp
    constructor() {
        this.initialize()

    }

    async sendText(to: string, body: string) {
        //formato do to -> 5521982222126@c.us
        //this.sendText("5521994880549@c.us", "Teste de bot feito por mim ")

        await this.client.sendText(to, body)

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