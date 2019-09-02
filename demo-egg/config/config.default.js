exports.keys = "123321";

exports.mysql = {
    client: {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "12345678",
        database: "sys"
    },
    app: true,
    agent: false
};
exports.view={
    defaultViewEngine:"nunjucks",
    mapping:{
        ".html":"nunjucks"
    }
}