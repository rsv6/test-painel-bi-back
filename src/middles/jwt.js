import 'dotenv/config'
import jsonwebtoken from 'jsonwebtoken'
import RepoEnv from "../services/RepoEnv.js"

export default class JWT {
  
  constructor () {
    this.jwt = jsonwebtoken
    this.repoenv = new RepoEnv()
    // this.authLogin = new AuthLogin()
    this.secrets = this.repoenv.getTknSecrects()
    
    // this.secretsTkn.push(this.repoenv.getTknSecrects())
    this.login = "Ola"
  }

  // Sign Jwt:
  sign () {
    console.log(this.secrets)
    console.log(Object.values((Object.keys(this.secrets))))


  }
}

const user = new JWT()
console.log(user.sign())


/*
const jwt = new JWT()
// console.log(jwt.authLogin.validLogin({login: 'rafael', senha: '123456'}))
const login = jwt.authLogin.validLogin({login: 'rafel', senha: '123456'})
// console.log(jwt.secretsTkn)
console.log(login)

jwt.secretsTkn.some(s => {
  console.log(s) 
  console.log(Object.keys(s))
  // console.log(Object.values(login))




  let obj = Object.values(login).filter(f => f === Object.keys(s) ? f : null) ? s : {}
  return obj
})
*/
