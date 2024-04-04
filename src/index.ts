const express = require('express');
const app = express();

app.get('/', (req: any, res: any) => {
  res.send('Hello World!!!2');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
