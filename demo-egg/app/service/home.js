const Service = require("egg").Service;

class UserController extends Service {
    async find(id) {
        const user=await this.app.mysql.get("user",{id:`${id}`})
        return user
    }
}

module.exports = UserController;
