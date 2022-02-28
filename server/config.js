import 'dotenv/config'
import RepoEnv from '../src/services/RepoEnv'

export default {
  dbArq(){
    return {
      database: process.env.DB_BASE_ARQ,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT
    }
  },
  server() {
    return {
      port: process.env.PORT,
      secrets: new RepoEnv().getTknSecrects()
    }
  }
}
