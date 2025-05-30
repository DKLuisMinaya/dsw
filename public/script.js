let counter = 0;

function drawCard() {
  fetch('/api/card')
    .then(res => res.json())
    .then(data => {
      const cardDisplay = document.getElementById('card-display');
      const challengeText = document.getElementById('challenge-text');
      const historyList = document.getElementById('history-list');

      challengeText.textContent = data.challenge;
      cardDisplay.classList.remove('hidden');
      cardDisplay.classList.add('flipped');

      counter++;
      document.getElementById('counter').textContent = counter;

      const li = document.createElement('li');
      li.textContent = `${counter}. ${data.challenge}`;
      historyList.prepend(li);
    });
}
