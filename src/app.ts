import express, { Request, Response } from "express"
import Sender from "./sender"


const sender = new Sender()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/status', (req: Request, res: Response) => {
    //
})
// para monetização ideal é ser get, mas qlqr metodo pode ser usado 
app.post("/send", async (req: Request, res: Response) => {
    const { number, message } = req.body
    try {
        //validação do número


        await sender.sendText(number, message)

        return res.status(200).json()

    } catch (error) {
        console.error("error", error)
        res.status(500).json({ status: "error", message: error })
    };

})

app.listen(3000, () => {
    console.log("Server on")
})