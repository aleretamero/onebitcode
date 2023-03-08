function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmation = window.confirm(
    `Gostaria de confirmar a escalação do seguinte jogador:
    número: ${number}
    nome: ${name}
    posição: ${position}`
  );

  if (!confirmation) {
    return clearInputsAddPlayer();
  }

  const teamList = document.getElementById("team-list");
  const playerItem = document.createElement("li");
  playerItem.id = `player-${number}`;
  playerItem.innerText = `${position}: ${name} (${number})`;

  teamList.appendChild(playerItem);

  clearInputsAddPlayer();
}

function clearInputsAddPlayer() {
  document.getElementById("position").value = "";
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("position").focus();
}

function removePlayer() {
  const number = document.getElementById("number-to-remove").value;
  const playerToRemove = document.getElementById(`player-${number}`);

  const confirmation = window.confirm(
    `Remover o jogador ${playerToRemove.innerText}?`
  );

  if (!confirmation) {
    return clearInputRemovePlayer();
  }

  playerToRemove.remove();

  clearInputRemovePlayer();
}

function clearInputRemovePlayer() {
  document.getElementById("number-to-remove").value = "";
  document.getElementById("number-to-remove").focus();
}
