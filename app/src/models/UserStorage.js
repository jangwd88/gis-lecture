"use strict"

class UserStorage {
    static #users = {
        id: ["wonder", "chang", "jangwd88"],
        passwd: ["1234", "12345", "123456", ],
        name: ["원더", "췡", "jangwd88", ],
    };

    static getUsers(...fileds){
        const users = this.#users;
        const newUsers = fileds.reduce((newUsers, filed) => {
            if(users.hasOwnProperty(filed)){
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
