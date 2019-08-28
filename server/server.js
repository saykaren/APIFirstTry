// import myRoute from './crmRoutes';

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var fs = require('fs');
const myData = require('./data/users');

// const result = myData[0].name;

// const port = 3000;


app.get('/', (req, res) => res.send({userData}))


// app.listen(port, () => console.log(`Example app listening on port ${port}`));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port} ${userData[0].name}, boooyaaa`));


const userData = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
      9,
      18,
      24,
      19
    ]
  }
];
// // create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT Boyaaa');
// });

// app.post('/express_backend', (req, res) =>{
//   res.send('Posting a request');
// });

// app.put('/express_backend', (req, res)=>{
//   res.send('Putting a request to /user');
// });

// app.delete('/express_backend', (req, res)=>{
//   res.send('Delete request at /user');
// });

// app.use(express.static('public'));

// // myRoute(app);

