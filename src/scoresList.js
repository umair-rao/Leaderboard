const listContainer = document.querySelector('#socres');

const displayScores = (list) => {
  listContainer.innerHTML = '';
  const newScoreList = list.map((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item.user}: ${item.score}`;
    return listItem;
  });
  newScoreList.forEach((element) => {
    listContainer.appendChild(element);
  });
};

export default displayScores;