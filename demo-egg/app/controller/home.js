const Controller = require("egg").Controller;

class HomeController extends Controller {
    async api(ctx) {
        console.log(ctx.query)
        let { id } = ctx.query;
        const user = await ctx.service.home.find(id);
        ctx.body = {
            ...user
        };
    }
}

module.exports = HomeController;
