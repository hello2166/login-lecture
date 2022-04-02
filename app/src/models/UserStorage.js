
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
}

module.exports = UserStorage;