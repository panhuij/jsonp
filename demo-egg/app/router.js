module.exports = app => {
    const { router, controller } = app;
    const jsonp=app.jsonp()
    router.get("/", controller.seek.index);
    router.get("/api", jsonp,controller.home.api);
};
