const express = require('express');
const app = express();
// COM MOCK  const newsletters = require('./newsletter');

//conectando ao Mongo
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/app-newsletter', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado"))
.catch((err) => console.error("Erro ao conectar com o MongoDB "+err))

//models
const Newsletter = require('./models/newsletter')

// Midlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// POST newsletter
app.post('/newsletter', function (req, res) {
    const data = req.body;
    if(!data) {
        res.sendStatus(400)
        console.log("sem dados")
    }
 new Newsletter(data).save()
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(400))
});

// GET all Newsletter
app.get('/newsletter', function (req, res) {
    Newsletter.find()
          .then((newsletter) => res.send(newsletter))
          .catch(() => res.sendStatus(400));
 });




// GET one newsletter
app.get('/newsletter/:newsletterId', function (req, res) {
    const newsletterId = req.params.newsletterId;
    Newsletter.findById(newsletterId)
         .then((newsletter) => res.send(newsletter))
         .catch(() => res.sendStatus(400));

});
// PUT newsletter
app.put('/newsletter/:newsletterId', function (req, res) {
    const newsletterId = req.params.newsletterId;
    const data = req.body;
    if(!data || !newsletterId) {
        res.sendStatus(400)
    }
    
    Newsletter.findByIdAndUpdate(newsletterId, data)
         .then(() => res.sendStatus(200))
         .catch(() => res.sendStatus(400));
});

// DELETE newsletter
app.delete('/newsletter/:newsletterId', function (req, res) {
    const newsletterId = req.params.newsletterId;
    Newsletter.findByIdAndRemove(newsletterId)
         .then(() => res.sendStatus(200))
         .catch(() => res.sendStatus(400));

});


app.listen(3000, () => {
    console.log('Servidor rodando em http://127.0.0.1:3000/');
});
