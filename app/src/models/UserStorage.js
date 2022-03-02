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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); 
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;
