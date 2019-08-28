// import myRoute from './crmRoutes';

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}, boooyaaa`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT Boyaaa');
});

app.post('/express_backend', (req, res) =>{
  res.send('Posting a request');
});

app.put('/user', (req, res)=>{
  res.send('Putting a request to /user');
});

app.delete('/user', (req, res)=>{
  res.send('Delete request at /user');
});

app.use(express.static('public'));

// myRoute(app);

