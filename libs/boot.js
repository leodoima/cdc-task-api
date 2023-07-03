module.exports = app => {
    app.db.sequelize.sync().then(() => {
        app.listen(app.get("port"), () => {
            console.log(`Server on fire! Port: ${app.get("port")}`);
        });
    });
}