import './style.css';
import displayScores from './scoresList.js';

const refresh = document.querySelector('#refresh-btn');
const form = document.querySelector('form');

const getScores = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sr5jjs9jvWKzJUYcqGWW/scores',
    { method: 'GET' },
  )

    .then((res) => res.json())
    .then((data) => {
      const list = data.result;
      displayScores(list);
    });
};

const saveList = async (entry) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sr5jjs9jvWKzJUYcqGWW/scores/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(entry),
    },
  );
};

class Score {
  constructor(name, score) {
    this.user = name;
    this.score = score;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const newScore = document.querySelector('#score').value;
  const newEntry = new Score(name, newScore);
  saveList(newEntry);
  form.reset();
});

refresh.addEventListener('click', () => {
  getScores();
});
