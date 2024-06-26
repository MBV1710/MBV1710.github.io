const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// Substitua pela sua string de conexão do MongoDB Atlas
const mongoUri = 'your_mongodb_connection_string';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const Client = mongoose.model('Client', clientSchema);

app.use(express.json());

app.post('/api/clients', (req, res) => {
  const newClient = new Client(req.body);
  newClient.save()
    .then(() => res.status(201).send('Client created'))
    .catch(err => res.status(400).send(err));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
