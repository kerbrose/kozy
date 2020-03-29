import express from 'express';
import mongose from 'mongoose';

const app = express();
const port = 8088;


mongose.connect('mongodb://mongodb:27017', {useNewUrlParser: true}).then(
    () => {
        console.log("iConnected");
    }
);

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelopessaesssssl!');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});