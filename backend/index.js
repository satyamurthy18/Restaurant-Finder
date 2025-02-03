import express from 'express'

const app = express();

app.listen(3000, () => {
    console.log("port is running at 3000")
})

export default app;