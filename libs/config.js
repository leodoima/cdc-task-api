module.exports = {
    database: "cdc-tasks",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "cdc-task.sqlite",
        define: {
            underscored: true
        }
    }
}