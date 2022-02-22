import HomeController from "../controllers/HomeController";
import UsersController from "../controllers/UsersController";
import express from "express";

export default class Routes {
  router
  home
  user

  constructor() {
    this.router = express.Router()
    this.home = new HomeController()
    this.user = new UsersController()
  }

  start() {
    return this.router
      .get('/', this.home.getHome())
      .get('/conteudo', this.home.getConteudo())
      .get('/users', this.user.getUsers())
  }
}