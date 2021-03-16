let terminalBattle = ``
let listEnemy = ``
let coinBattle = 1
let dam
let enemyID

function callTerminal() {
  outMov.textContent = terminalBattle
}

function listEnemys() {
  listEnemy = ``
  for (i = 0; i < enemysCreate.length; i++) {
    listEnemy += `\n\nENEMY_ID: ${i}\nEnemy: ${enemysCreate[i].name}\nLife: ${enemysCreate[i].life}\nForce: ${enemysCreate[i].force}\nDefense: ${enemysCreate[i].defense}`
  }

  document.getElementById('mobsCreated').textContent = listEnemy
}

function curePlayer() {
  if (players.length <= 0) {
    alert('No players registered.')
    return
  }

  let playersReg = ``

  for (var i = 0; i < players.length; i++) {
    playersReg += `\n${players[i].name}`
  }

  let playHeal = prompt(`Which player should be healed?${playersReg}`)

  if (!playHeal) {
    return
  }

  for (var i = 0; i < players.length; i++) {
    if (players[i].name == playHeal) {
      playHeal = i
      break
    }
  }

  let heal = Number(prompt('How many percent healing?'))

  if (isNaN(heal) || heal == ``) {
    alert('Report the cure correctly.')
    return
  }

  heal = Math.ceil((heal / 100) * players[playHeal].lifeMax)

  players[playHeal].life = players[playHeal].life + heal

  if (players[playHeal].life > players[playHeal].lifeMax) {
    players[playHeal].life = players[playHeal].lifeMax
    alert(`${players[playHeal].name} full life.`)
    return
  }

  alert(`${players[playHeal].name} healing ${heal} life.`)
  return
}

function cureAllPlayers() {
  if (players.length <= 0) {
    alert('No players registered.')
    return
  }

  let healAll = Number(prompt('How many percent healing?'))

  if (!healAll) {
    alert('Enter percentage correctly')
    return
  }

  let healAllValue

  for (var i = 0; i < players.length; i++) {
    healAllValue = Math.ceil((healAll / 100) * players[i].lifeMax)
    players[i].life = players[i].life + healAllValue

    alert(`${players[i].name} healing ${healAllValue}`)

    if (players[i].life > players[i].lifeMax) {
      players[i].life = players[i].lifeMax
      alert(`${players[i].name} full life.`)
    }
  }
}

battleMob.addEventListener('click', () => {
  if (outEnemy.value == '') {
    alert('Err. Spawn enemy.')
    return
  }
  if (enemysForBattle.length > 0) {
    alert('Já existe um mob em combate.')
    return
  }
  let e = outEnemy.value
  if (e == '') {
    alert('Err. Outenemy empty.')
    return
  }
  let eL = Number(outEnemyLife.value)
  let eF = Number(outEnemyF.value)
  let eD = Number(outEnemyD.value)

  enemysForBattle.push({ name: e, life: eL, force: eF, defense: eD })

  vs1vs2.value = `${enemysForBattle[enemysForBattle.length - 1].name}`
  vs1vs1.focus()
})

createMob.addEventListener('click', () => {
  const inNameMob = document.getElementById('inNameMob')
  const inLifeMob = document.getElementById('inLifeMob')
  const inForceMob = document.getElementById('inForceMob')
  const inDefenseMob = document.getElementById('inDefenseMob')

  let nameMob = inNameMob.value
  let lifeMob = Number(inLifeMob.value)
  let forceMob = Number(inForceMob.value)
  let defenseMob = Number(inDefenseMob.value)
  lifeMobs.push(lifeMob)
  if (nameMob == '' || lifeMob == '' || forceMob == '' || defenseMob == '') {
    alert('Informe os dados corretamente.')
    inNameMob.focus()
    return;
  }

salveLastMob.addEventListener('click', () => {
    let eneS = outEnemy.value
    if (eneS == '') {
      alert('Err.')
      return
    }

    let eneSF = Number(outEnemyF.value)
    let eneSL = Number(outEnemyLife.value)
    let eneSD = Number(outEnemyD.value)

    enemysCreate.push({ name: eneS, life: eneSL, force: eneSF, defense: eneSD })
    listEnemys()
  })

  enemysCreate.push({ name: nameMob, life: lifeMob, force: forceMob, defense: defenseMob })
  alert('Enemy add.')
  inNameMob.value = ''
  inLifeMob.value = ''
  inForceMob.value = ''
  inDefenseMob.value = ''
  inNameMob.focus()

  listEnemys()
})

selectedPlay.addEventListener('click', () => {
  if (players.length == 1) {
    playBattle.push(players[0])
    vs1vs1.value = playBattle[0].name
    document.getElementById('copy').focus()
    return
  }

  if (players.length <= 0) {
    alert('Err. Players empty.')
    return
  }



  let play = playerBattle.value

  if (play == '') {
    alert('Err. PLAYER_ID empty')
    playerBattle.focus()
    return
  }
  for (i = 0; i < playBattle.length; i++) {
      if (players[play] == playBattle[i]) {
        vs1vs1.value = playBattle[play].name
        document.getElementById('copy').focus()
        return
      }
  }

  playBattle.push(players[play])
  vs1vs1.value = playBattle[playBattle.length - 1].name
  vs1vs1.focus()
})

selectedEnemy.addEventListener('click', () => {
  enemyID = enemyBattle.value

  if (enemysCreate.length <= 0) {
    alert('Err. MOB empty.')
    return;
  }

  if (enemysForBattle.length > 0) {
    alert('Err. MOB in battle.')
    document.getElementById('copy').focus()
    return
  }

  if (enemyID == '') {
    alert('Err. MOB_ID empty')
    return
  }

  enemyID = Number(enemyBattle.value)

  enemysForBattle.push(enemysCreate[enemyID])
  vs1vs2.value = `${enemysForBattle[0].name}`
  vs1vs1.focus()
  return
})

battle.addEventListener('click', () => {
  if (vs1vs1.value == '' || vs1vs2.value == '') {
    terminalBattle = `Não há combatentes suficientes.\n${terminalBattle}`
    callTerminal()
    enemyForest.focus()
    return
  }

  coinBattle++

  // players
  let plP = playerBattle.value
  let plL = playBattle[playerBattle.value].life
  let plD = playBattle[playerBattle.value].defense
  let plF = playBattle[playerBattle.value].force

  //Enemys
  let enP = enemysForBattle[0].name
  let enL = enemysForBattle[0].life
  let enF = enemysForBattle[0].force
  let enD = enemysForBattle[0].defense

  if (coinBattle % 2 == 0) {
    dam = plF - enD

    if (dam <= 0) {
      dam = 1
    }
    console.log(`Life: ${enL - dam}`)
    if ((enL - dam) <= 0) {
      enemysForBattle[0].life = lifeMobs[enemyID]
      terminalBattle = `${playBattle[playerBattle.value].name} atacou ${enemysForBattle[0].name} causando ${dam} de dano. ${enemysForBattle[0].name} morreu. \n${terminalBattle}`
      enemysForBattle.shift()
      enemyBattle.value = ``
      vs1vs2.value = ``
      callTerminal()

      return
    }
    enemysForBattle[0].life = enL - dam
    terminalBattle = `${playBattle[playerBattle.value].name} atacou ${enemysForBattle[0].name} causando ${dam} de dano. \n${terminalBattle}`
    callTerminal()
    return
  }

  if (coinBattle % 2 != 0) {
    dam = enF - plD

    if (dam <= 0) {
      dam = 1
    }
    console.log(`Life: ${plL - dam}`)
    if ((plL - dam) <= 0) {
      terminalBattle = `${enemysForBattle[0].name} atacou ${playBattle[playerBattle.value].name} causando ${dam} de dano. ${playBattle[playerBattle.value].name} morreu. \nCure-o para voltar ao campo de batalha.\n \n${terminalBattle}`
      playerBattle.value = ``
      vs1vs1.value = ``
      callTerminal()
      return
    }

    playBattle[playerBattle.value].life = plL - dam
    terminalBattle = `${enemysForBattle[0].name} atacou ${playBattle[playerBattle.value].name} causando ${dam} de dano. \n${terminalBattle}`
    callTerminal()
    return
  }
})

cure.addEventListener('click', curePlayer)

cureAll.addEventListener('click', cureAllPlayers)
