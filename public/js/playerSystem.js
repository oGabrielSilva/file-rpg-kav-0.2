players = []

let playersAdd = ``
let counterI = 0

addNewPlayer.addEventListener('click', () => {
  const inPlayerName = document.getElementById('inNamePlayer')
  const inPlayerLife = document.getElementById('inLifePlayer')
  const inPlayerForce = document.getElementById('inForcePlayer')
  const inPlayerDefense = document.getElementById('inDefensePlayer')

  const playerName = inPlayerName.value
  const playerForce = Number(inPlayerForce.value)
  const playerLife = Number(inPlayerLife.value)
  const playerDefense = Number(inPlayerDefense.value)


  if (playerName == '' || playerLife == '' || playerForce == '' || playerDefense == '') {
    alert('Informe os dados corretamente.')
    inPlayerName.focus()
    return
  }

  players.push({ name: playerName, lifeMax: playerLife, life: playerLife, force: playerForce, defense: playerDefense })
  alert('Player add.')
  inPlayerName.value = ''
  inPlayerForce.value = ''
  inPlayerLife.value = ''
  inPlayerDefense.value = ''
  inPlayerName.focus()


  playersAdd += `
PLAYER_ID: ${counterI}
Name: ${players[counterI].name}
Life: ${players[counterI].life}
Force: ${players[counterI].force}
Defense: ${players[counterI].defense}
  \n`
  counterI++

  document.getElementById('players').textContent = playersAdd
  outPlayers.textContent = playersAdd
})

revisePlayer.addEventListener('click', () => {
  if (players.length === 0) {
    alert('Não há players registrados.')
    return
  }

  let playersForRevise = ``

  for (i = 0; i < players.length; i++) {
    playersForRevise += `\n${players[i].name}`
  }

  let playerRevise = prompt(`Escolha o player para revisão:${playersForRevise}`)

  for (var i = 0; i < players.length; i++) {
    if (playerRevise === players[i].name) {
      let nameP = prompt('Nome:')
      let lifeP = Number(prompt('Life:'))
      let forceP = Number(prompt('Force:'))
      let defenseP = Number(prompt('Defense:'))
      players[i] = { name: nameP, life: lifeP, force: forceP, defense: defenseP }



    }
  }
  playersAdd = ``
  for (i = 0; i < players.length; i ++) {
     playersAdd += `
PLAYER_ID: ${i}
Name: ${players[i].name}
Life: ${players[i].life}
Force: ${players[i].force}
Defense: ${players[i].defense}
     `
  }

  document.getElementById('players').textContent = playersAdd
  outPlayers.textContent = playersAdd
  return

})
