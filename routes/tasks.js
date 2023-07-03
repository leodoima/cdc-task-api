module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.get('/tasks', (request, response) => {
        Tasks.findAll({}).then(tasks => {
            response.json({ tasks: tasks });
        });
    });
}