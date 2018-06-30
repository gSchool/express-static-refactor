const express = require('express');
const PORT = 4000;
const app = express();

app.use(express.static('.'));

app.listen(PORT, () => {
  console.log("Example app listening on port 4000!");
});
