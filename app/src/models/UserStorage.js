
const fs = require('fs').promises;

class UserStorage {

    static getUsers(...fields) {
        return fs.readFile('./src/data/users.json')
        .then((data) => {
            const users = JSON.parse(data);
            const newUsers = fields.reduce((newU, fld)=>{
                if(users.hasOwnProperty(fld)) {
                    newU[fld] = users[fld];
                    return newU;
                }
            }, {});
            return newUsers;

        })
        .catch(console.error)
    }

    static getUserInfo(id_p) {

        return fs.readFile('./src/data/users.json')
        .then((data) => {
            const users = JSON.parse(data);
            const idx = users.id.indexOf(id_p);
            const userKeys = Object.keys(users);
    
            const userInfo = userKeys.reduce((userIn, key) => {
                userIn[key] = users[key][idx];
                return userIn;
            }, {});

            return userInfo;
        })
        .catch(console.error)
    }

    static async saveUser(userInfo) {
        const users = await this.getUsers('id', 'psword', 'name');
        if (users.id.includes(userInfo.id)) {
            // return new Error("이미 존재하는 아이디입니다");
            return { success: false, msg: "이미 존재하는 아이디입니다" };
        }
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        fs.writeFile('./src/data/users.json', JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;