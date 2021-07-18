import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import axios from 'axios'

// give us the possibility of manage request properly
const app = express()

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))

// our single entry point for every message
app.get('/:chat_id', async (req, res) => {
  try {
    const chat_id = req.params.chat_id

    const result = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id,
        text: `La abuelita necesita ayuda...`
      }
    )
  
    return res.status(200).send({
      method: 'sendMessage',
      chat_id,
      result: result.data,
    })
  } catch (e) {
    return res.status(500).send({ error: e.message || e })
  }
})

// this is the only function it will be published in firebase
export const router = functions.https.onRequest(app)
