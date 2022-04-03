
const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    async login(){
        const { id, psword } = await UserStorage.getUserInfo(this.body.id);

        if(id) {
            if(id === this.body.id && psword === this.body.psword) {
               return { success: true };
           }
           return { success: false, msg: '비밀번호가 틀렸습니다.'};
        }
        return { success: false, msg: '존재하지 않는 아이디입니다.'}
    }

    async register() {
        const result = await UserStorage.saveUser(this.body);
        return result;
    }
}

module.exports = User;