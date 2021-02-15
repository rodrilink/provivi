const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = express.Router()
const path = require('path')
const PORT = process.env.PORT || 5000
const ENV = process.env.NODE_ENV === 'local' ? 'public' : 'build'
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require(path.join(__dirname, ENV + '/swagger.json'))
let resultList = []

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, ENV)))

app.use('/v1', router)

router.get("/dashboard", (req, res) => {
  return res.status(200).send({
    success: "true",
    message: "results",
    results: resultList,
  })
})

router.post("/getASum", (req, res) => {
  if (!req.body.x) {
    return res.status(400).send({
      success: "false",
      message: "value x is required",
    })
  }

  if (!req.body.y) {
    return res.status(400).send({
      success: "false",
      message: "value y is required",
    })
  }

  const x = parseInt(req.body.x, 10)
  const y = parseInt(req.body.y, 10)
  const result = x + y

  if (!Number.isInteger(result)) {
    return res.status(400).send({
      success: "false",
      message: "invalid result",
    })
  }

  resultList.push({
    id: resultList.length + 1,
    date: new Date(Date.now()).toDateString(),
    name: 'add',
    operation: `${x} + ${y}`,
    result: result
  })

  return res.status(201).send({
    success: "true",
    message: "Result successfully",
    result,
  })
})

router.get("/getAProduct/:a", (req, res) => {

  if (!req.params.a) {
    return res.status(400).send({
      success: "false",
      message: "value a is required",
    })
  }

  const a = parseInt(req.params.a, 10)
  const result = a * 2

  if (!Number.isInteger(result)) {
    return res.status(400).send({
      success: "false",
      message: "invalid result",
    })
  }

  resultList.push({
    id: resultList.length + 1,
    date: new Date(Date.now()).toDateString(),
    name: 'multiply',
    operation: `${a} * 2`,
    result: result
  })

  return res.status(200).send({
    success: "true",
    message: "Result successfully",
    result
  })
})

router.get("/getAPower/:s", (req, res) => {

  if (!req.params.s) {
    return res.status(400).send({
      success: "false",
      message: "value s is required",
    })
  }

  const s = parseInt(req.params.s, 10)
  const result = Math.pow(s, 2)

  if (!Number.isInteger(result)) {
    return res.status(400).send({
      success: "false",
      message: "invalid result",
    })
  }

  resultList.push({
    id: resultList.length + 1,
    date: new Date(Date.now()).toDateString(),
    name: 'secondPower',
    operation: `${s} ^ 2`,
    result: result
  })

  return res.status(200).send({
    success: "true",
    message: "Result successfully",
    result,
  })
})

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('*', (req, res) => res.sendFile(path.resolve(ENV, 'index.html')))
app.listen(PORT, () => console.log(`Provivi server listening on ${PORT}`))
