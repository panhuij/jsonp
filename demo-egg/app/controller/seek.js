const Controller = require("egg").Controller;

class SeekController extends Controller {
    async index(ctx) {
       await ctx.render("seek.html")
    }
}

module.exports = SeekController;
