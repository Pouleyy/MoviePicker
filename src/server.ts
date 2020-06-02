import express from 'express';

const app = express();
const port = process.env.PORT || 9000;
app.get('/', (req, res) => {
  res.send('Cheers love');
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
