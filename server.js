const express = require('express');
const app = express();
const PORT = 7001;

app.use(express.static('.'));

app.listen(PORT, () => {
	console.log("Example app listening on port 3000!");
});
