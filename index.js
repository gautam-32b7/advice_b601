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

const advices = {
  0: 'Focus on progress, not perfection.',
  1: 'Consistency beats intensity in the long run.',
  2: "Learn to say 'no' to protect your time and energy.",
  3: 'Don’t be afraid to fail; failure is a stepping stone to success.',
  4: 'Take breaks to recharge your creativity and productivity.',
  5: 'Always keep learning; knowledge is the best investment.',
  6: 'Surround yourself with people who inspire and challenge you.',
  7: 'Manage your time, or it will manage you.',
  8: 'Listen more than you speak; you’ll learn more that way.',
  9: 'Small actions daily lead to big changes over time.',
};

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs');
});

app.post('/submit', (req, res) => {
  const random = Math.floor(Math.random() * 10);
  const advice = advices[random];
  const context = {
    advice,
  };
  res.render(__dirname + '/views/index.ejs', context);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
