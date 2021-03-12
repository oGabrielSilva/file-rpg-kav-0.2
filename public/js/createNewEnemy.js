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
      pos = confirm('A floresta está cada vez mais densa. Continuar?')
      if (!pos) {
        enemyCounterForest = 1
        return
      }
      enemyCounterForest++
      break;
    case 24:
      pos = confirm('Pouca Luz solar consegue adentrar as densas folhas das enormes árvores. Adentrar?')
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
  console.log(enemyCounterForest, enemyLvl)
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
      pos = confirm('Menos Luz adentra os locais a frente. Continuar?')
      if (!pos) {
        enemyCounterCave = 1
        return
      }
      enemyCounterCave++
      break;
    case 35:
      pos = confirm('É difícil não ouvir barulhos vindos das densas sombras. Seguir em frente?')
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
  console.log(enemyCounterCave, enemyLvl)
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
  console.log(enemyCounterDungeon, enemyLvl)
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

function checkMountain() {
  alert('Err. System being repaired')
}

btNewEnemy.addEventListener('click', () => {
  let check0 = document.getElementById('enemyForest')
  let check1 = document.getElementById('enemyCave')
  let check2 = document.getElementById('enemyStreet')
  let check3 = document.getElementById('enemyDungeon')
  let check4 = document.getElementById('enemyMountain')


  if (!check0.checked && !check1.checked && !check2.checked && !check3.checked && !check4.checked) {
    check0.focus()
    alert('Nenhum habitat selecionado.')
    return

  } else {
    
      if (check0.checked) {

        checkForest()
      }
      if (check1.checked) {

        checkCave()
      }
      if (check2.checked) {

        checkStreet()
      }
      if (check3.checked) {

        checkDungeon()
      }
      if (check4.checked) {

        checkMountain()
      }
    }
})
