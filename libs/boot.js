module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Server on fire! Port: ${app.get("port")}`);
    })
}