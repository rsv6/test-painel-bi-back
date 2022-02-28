import 'dotenv/config'
import express from "express";
import RepoEnv from '../src/services/RepoEnv';
import Routes from "../src/routes/Routes";

export default class Server {
  routes
  app

  constructor() {
    this.app = express()

    this.repoenv = new RepoEnv()
    this.routes = new Routes()
    this.PORT = this.repoenv.getPortApi() || 3000
    this.jwt = this.repoenv.getTknSecrects()

    this.app.use(this.routes.start())
    this.app.listen(this.PORT, () => {
      console.log(`Listen Port ${this.PORT}`)
    
      })
  }
  
  start() {
    return this.app
  }
}
