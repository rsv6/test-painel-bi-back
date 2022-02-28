import bcrypt from 'bcrypt'

export default class PassHash {
  #pass1

  setPass1(pass) {
    this.#pass1 = this.generateHash(pass)
  }

  getPass1() {
    return this.#pass1
  }

  generateHash(password) {
    return bcrypt.hashSync(password, 10)
  }

  compareHash(password) {
    if (bcrypt.compareSync(password, this.getPass1())) {
      return true
    }

    return false
  }

}

const user = new PassHash()
console.log(user.generateHash('comprasacalazulgigante'))


// console.log(user.getPass1())
// console.log(user.compareHash('underline'))

// const pass1 = new PassHas().generateHash('underline')
// const 

// const passwordHash = bcrypt.hashSync('underline', 10)
// const verified = bcrypt.compareSync('underline2', passwordHash);

// console.log(verified)