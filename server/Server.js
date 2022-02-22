import 'dotenv/config'
import express from "express";
import Routes from "../src/routes/Routes";

export default class Server {
  routes
  app

  constructor() {
    this.app = express()
    this.PORT = process.env.PORT
    this.routes = new Routes()
    this.app.use(this.routes.start())
    this.app.listen(this.PORT, console.log(`Listen Port ${this.PORT}`))
  }
  
  start() {
    return this.app
  }
}
