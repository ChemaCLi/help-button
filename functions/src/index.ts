import * as functions from "firebase-functions";

export const testFunction = functions.https.onRequest(async (req, res) => {
  res.send({ status: 200 })
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
