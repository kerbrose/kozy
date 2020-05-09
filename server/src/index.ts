import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongose from 'mongoose';


const app = express();
const port = 8088;

app.use(bodyParser.urlencoded({extended: false}));

mongose.connect('mongodb://mongodb:27017', {useNewUrlParser: true}).then(
    () => {
        console.log("iConnected");
    }
);

app.get('/freak', (req, res, next) => {
    console.log('req.body  ** ', req.body);
    res.sendFile(path.join(__dirname, 'freak.html'));
});

app.get('/', (req, res) => {
    console.log('req.body  ** ', req.body);
    res.send('The sedulous hyena ate the antelopel!');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});