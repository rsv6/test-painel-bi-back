import UsersModel from '../models/UsersModel'


export default class UsersController {
  #usersModel

  constructor() {
    this.#usersModel = new UsersModel()
  }

  getUsers() {

    return (req, res) => {
      console.log("GET /users")
      return res.status(200).json(this.#usersModel.start())
    }
  }
}