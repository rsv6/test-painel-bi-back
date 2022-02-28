import AuthLogin from '../services/authLogin'
import UsersModel from '../models/UsersModel'
import RepoEnv from '../services/RepoEnv'

export default class UsersController {
  #user
  #secrets
  #secret = []

  constructor () {
    this.usersModel = new UsersModel()
    this.#setSecrets(new RepoEnv().getTknSecrects())
    

    // this.authlogin = new AuthLogin()
  }

  // Secrets:
  #setSecrets (secrets) {
    this.#secrets = secrets
  }

  getSecrets () {
    return this.#secrets
  }


  // Users:
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
      await this.#setUser(await this.usersModel.findOne()
        .then(r => {
            console.log(r.dataValues)
            return r.dataValues
          })
        .catch(err => err))
     
      this.#secret.push(this.getSecrets())
      this.#secret.filter(s => {

        Object.entries(this.getUser()).forEach(([key, value]) => {

          
          console.log(Object.keys(s))
          Object.keys(s).map(set => (key === "setor" ? key : null) == (set ? Object.values(s) : null))

          // console.log((key === "setor" ? key : null) ==  Object.keys(s).map())
        })



        
        // for (let key in this.getUser()) {
          // console.log(Object.keys(s) +" - "+ this.getUser()["setor"])

          // console.log(`${key === "setor" ? key : null} - ${this.getUser().setor}`)
        // }
        // Object.keys(s) === this.getUser().filter(u => u.setor)

      } )
      

      // await this.getSecrets().map(s => this.#secret = Object.keys(s) )


      return res.status(200).json(this.getUser())
      // return res.status(200).json(this.getSecrets())

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
const user = usercontroller.getSecrets()
console.log(user)