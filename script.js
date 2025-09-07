let players = [];

function joinLottery() {
  const name = document.getElementById("playerName").value.trim();
  if (name && !players.includes(name)) {
    players.push(name);

    let li = document.createElement("li");
    li.textContent = name;
    document.getElementById("playersList").appendChild(li);

    document.getElementById("playerName").value = "";
  } else {
    alert("Enter a valid name or name already added!");
  }
}

function pickWinners() {
  if (players.length < 3) {
    alert("Need at least 3 players to pick winners!");
    return;
  }

  // Shuffle players
  let shuffled = [...players].sort(() => 0.5 - Math.random());

  let winners = shuffled.slice(0, 3);

  const winnersList = document.getElementById("winnersList");
  winnersList.innerHTML = "";

  winners.forEach((winner, index) => {
    let li = document.createElement("li");
    li.textContent = `${index + 1}st Winner: ${winner}`;
    winnersList.appendChild(li);
  });
}
