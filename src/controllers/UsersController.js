import AuthLogin from '../services/authLogin'
import UsersModel from '../models/UsersModel'

export default class UsersController {
  #user

  constructor () {
    this.usersModel = new UsersModel()
    this.authlogin = new AuthLogin()
  }

  #setUser (user) {
    this.#user = user
  }

  getUser () {
    return this.#user
  }

  getUsers () {
    return async (req, res) => {
      console.log("GET /users")

      // 3º method:
      this.#setUser(await this.usersModel.findOne()
        .then(r => {
            console.log(r.dataValues)
            return r.dataValues
          })
        .catch(err => err))

      res.status(200).json(this.getUser())


      // 2º method:
      // this.usersModel.findOne()
      //   .then(r => {
      //     return res.json(r)
      //   })
      //   .catch(err => res.json(err))
      

      // 1º method:
      // const [ results, metadata ] = await this.usersModel.cadUser.sequelize.query("SELECT LOGIN, administrador, setor FROM CAD_USER WHERE LOGIN = 'admin' AND SENHA = 'underline'")
      // console.log(results[0])
      // return res.status(200).json(results[0])
    }
  }
}


// Test:
const usercontroller = new UsersController()
const user = usercontroller.getUsers()
console.log(user)