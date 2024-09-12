import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import { __express as ejsEngine } from 'ejs';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.engine('ejs', ejsEngine);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
