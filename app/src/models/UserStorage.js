
class UserStorage {
    static #users = {
        id: ['smartmon','hello2166','honkvvv'],
        psword: ['n1234','61234','v1234'],
        name: ['Jeong', 'Eui', 'Cheol'],
    }
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newU, fld)=>{
            if(users.hasOwnProperty(fld)) {
                newU[fld] = users[fld];
                return newU;
            }
        }, {});
        return newUsers;
    }

    static getUserInfo(id_p) {
        const users =this.#users;
        const idx = users.id.indexOf(id_p);
        const userKeys = Object.keys(users);

        const userInfo = userKeys.reduce((userIn, key) => {
            userIn[key] = users[key][idx];
            return userIn;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;