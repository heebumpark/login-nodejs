"use strict";

class UserStorage {
  static #users = {
    id: ["baaams", "bodymind", "starjieun"],
    psword: ["1234", "123456", "12345678"],
    name: ["박희범", "박우상", "이지은"],
  };
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }
}

module.exports = UserStorage;
