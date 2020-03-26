import express from 'express';

const app = express();
const port = 8088;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelopessaesssssz!');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});