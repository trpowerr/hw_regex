export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    if (this.userName.search(/(^[a-z+A-Z]+)([\w-]*)([a-z+A-Z]$)/) || (/\d{4}/).test(this.userName)) {
      throw new Error('Wrong user name!');
    } else {
      return true;
    }
  }
}
