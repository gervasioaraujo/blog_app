import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Node Server is running!' });
});

app.listen(3333, () => {
  console.log('Node server is running on port 3333... !');
});
