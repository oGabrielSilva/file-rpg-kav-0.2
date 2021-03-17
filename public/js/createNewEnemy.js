let enemyCounterForest = 0
let enemyCounterCave = 0
let enemyCounterStreet = 0
let enemyCounterDungeon = 0
let pos
let enemyLvl

function checkForest() {
  enemyLvl = Math.ceil(Math.random() * enemyCounterForest)
//------------------------------------
  switch (enemyCounterForest) {
    case 13:
      pos = confirm('The forest is getting denser and denser. Shall we continue?')
      if (!pos) {
        enemyCounterForest = 1
        return
      }
      enemyCounterForest++
      break;
    case 24:
      pos = confirm('Little sunlight can penetrate the dense leaves of the huge trees. Get in?')
      if (!pos) {
        enemyCounterForest = 14
        return
      }
      enemyCounterForest++
      break;
    case 37:
      enemyCounterForest = 37
      break;
    default: enemyCounterForest++

  }
//------------------------------------

  let enemyType = enemysForest[enemyLvl].enemy
  let enemyLife = (6 * enemysForest[enemyLvl].lvl) + enemyLvl
  let enemyF = (2 * enemysForest[enemyLvl].lvl + Math.ceil(Math.random() * 5  + (enemyLvl / 8)))
  let enemyD = Math.floor(2 * enemysForest[enemyLvl].lvl + Math.ceil(Math.random() * 6))
//------------------------------------

  outEnemy.value = `${enemyType}`
  outEnemyLife.value = `${enemyLife}`
  outEnemyF.value = enemyF
  outEnemyD.value = enemyD

  terminalSpawn += `\nenemy_Forest:\nEnemy: ${enemyType}\nLife: ${enemyLife}\nEnemy F: ${enemyF}\nEnemy D: ${enemyD}\n\n`
//------------------------------------
}

function checkCave() {
  enemyLvl = Math.ceil(Math.random() * enemyCounterCave)

//------------------------------------
  switch (enemyCounterCave) {
    case 17:
      pos = confirm('Less Light enters the places ahead. Continue?')
      if (!pos) {
        enemyCounterCave = 1
        return
      }
      enemyCounterCave++
      break;
    case 35:
      pos = confirm(`It's hard not to hear noises coming from the dense shadows. Get in?`)
      if (!pos) {
        enemyCounterCave = 18
        return
      }
      enemyCounterCave++
      break;
    case 47:
      enemyCounterCave = 47
      break;
    default: enemyCounterCave++
  }

  //------------------------------------

  let enemyType = enemysCave[enemyLvl].enemy
  let enemyLife = (8 * enemysCave[enemyLvl].lvl) + enemyLvl
  let enemyF = (3 * enemysCave[enemyLvl].lvl + Math.ceil(Math.random() * 5  + (enemyLvl / 8)))
  let enemyD = Math.floor(3 * enemysCave[enemyLvl].lvl + Math.ceil(Math.random() * 7))
//------------------------------------

  outEnemy.value = `${enemyType}`
  outEnemyLife.value = `${enemyLife}`
  outEnemyF.value = enemyF
  outEnemyD.value = enemyD

  terminalSpawn += `\nenemy_Cave:\nEnemy: ${enemyType}\nLife: ${enemyLife}\nEnemy F: ${enemyF}\nEnemy D: ${enemyD}\n\n`

}

function checkStreet() {
  enemyLvl = Math.ceil(Math.random() * enemyCounterStreet)

  //------------------------------------
  switch (enemyCounterStreet) {
    case 50:
      enemyCounterStreet = 50
      break;
    default: enemyCounterStreet++
  }

  //------------------------------------
  console.log(enemyCounterStreet, enemyLvl)
  let enemyType = enemysStreet[enemyLvl].enemy
  let enemyLife = (10 * enemysStreet[enemyLvl].lvl) + enemyLvl
  let enemyF = (3 * enemysStreet[enemyLvl].lvl + Math.ceil(Math.random() * 5  + (enemyLvl / 6)))
  let enemyD = Math.floor(3 * enemysStreet[enemyLvl].lvl + Math.ceil(Math.random() * 9))
  //------------------------------------

  outEnemy.value = `${enemyType}`
  outEnemyLife.value = `${enemyLife}`
  outEnemyF.value = enemyF
  outEnemyD.value = enemyD

  terminalSpawn += `\nenemy_Street:\nEnemy: ${enemyType}\nLife: ${enemyLife}\nEnemy F: ${enemyF}\nEnemy D: ${enemyD}\n\n`

}

function checkDungeon() {
  enemyLvl = Math.ceil(Math.random() * enemyCounterDungeon)

  //------------------------------------
  switch (enemyCounterDungeon) {
    case 54:
      enemyCounterDungeon = 54
      break;
    default: enemyCounterDungeon++
  }

  //------------------------------------

  let enemyType = enemysDungeon[enemyLvl].enemy
  let enemyLife = (13 * enemysDungeon[enemyLvl].lvl) + enemyLvl
  let enemyF = (4 * enemysDungeon[enemyLvl].lvl + Math.ceil(Math.random() * 7  + (enemyLvl / 5)))
  let enemyD = Math.floor(4 * enemysDungeon[enemyLvl].lvl + Math.ceil(Math.random() * 10))
  //------------------------------------

  outEnemy.value = `${enemyType}`
  outEnemyLife.value = `${enemyLife}`
  outEnemyF.value = enemyF
  outEnemyD.value = enemyD

  terminalSpawn += `\nenemy_Dungeon:\nEnemy: ${enemyType}\nLife: ${enemyLife}\nEnemy F: ${enemyF}\nEnemy D: ${enemyD}\n\n`

}

btNewEnemy.addEventListener('click', () => {
  let check0 = document.getElementById('enemyForest')
  let check1 = document.getElementById('enemyCave')
  let check2 = document.getElementById('enemyStreet')
  let check3 = document.getElementById('enemyDungeon')
  let check4 = document.getElementById('enemyMountain')


  if (check0.checked) {

    checkForest()
    return
  }
  if (check1.checked) {

    checkCave()
    return
  }
  if (check2.checked) {

    checkStreet()
    return
  }
  if (check3.checked) {

    checkDungeon()
    return
  }

  check0.focus()
  alert('No place selected.')

})
