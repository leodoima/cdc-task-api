import express from 'express';

const PORT = 3000;
const app = express();

app.set("json spaces", 4);

app.get('/', (request, response) => {
    response.json({ message: 'Hello world' });
});

app.listen(PORT, () => {
    console.log(`Server on fire! Port: ${PORT}`);
});