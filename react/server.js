const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static("pages"));
app.listen(3000, () => console.log('Listening on port 3000...'));