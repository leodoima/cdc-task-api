module.exports = app => {
    app.get('/', (request, response) => {
        response.json({ message: 'Welcome to Homepage' });
    });
}