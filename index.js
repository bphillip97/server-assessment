let express = require('express');
let app = express();
let port = 3000;
app.use(express.json());
app.use(express.static('public')); 

app.get('/donuts', (req, res) => {
    res.send(donuts);
});

app.get('/donuts/:id', (req, res) => {
    res.json('Donut #' + req.params.id +'available!')
}); 

app.listen(3000, () => {
    console.log('Server running on port 3000');
});