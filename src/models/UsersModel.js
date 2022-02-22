import dbusers from '../dao/'


export default class UsersModel {

  start(){
    return JSON.parse(dbusers)
  }
}