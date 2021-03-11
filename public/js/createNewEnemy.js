let enemyContador = 0
let newo = 0

function checkForest() {
  let enemyLvl = Math.ceil(Math.random() * enemyContador)

  if (enemyContador < 9) {
    enemyContador++
  } else if (enemyContador < 19) {

    if (newo === 0) {
      let pos = confirm('Ir para o próximo nível da Floresta?')
      newo = 1
      if (!pos) {
        enemyContador = 1
        return
      }
    }
    enemyContador++
  } else if (enemyContador < 24) {
    enemyContador++
  }


  console.log(enemyContador)
  let enemyType = enemysForest[enemyLvl].enemy
  let enemyLife = (6 * enemysForest[enemyLvl].lvl) + enemyLvl
  let enemyF = (2 * enemysForest[enemyLvl].lvl + Math.ceil(Math.random() * 5))
  let enemyD = Math.floor(1.5 * enemysForest[enemyLvl].lvl + Math.ceil(Math.random() * 6))


  outEnemy.value = `${enemyType}`
  outEnemyLife.value = `${enemyLife}`
  outEnemyF.value = enemyF
  outEnemyD.value = enemyD

  terminalSpawn += `\nEnemy: ${enemyType}\nLife: ${enemyLife}\nEnemy F:${enemyF}\nEnemy D:${enemyD}\n\n`


}

function checkCave() {
  alert('Err. System being repaired')
}

function checkStreet() {
  alert('Err. System being repaired')
}

function checkDungeon() {
  alert('Err. System being repaired')
}

function checkBoss() {
  alert('Err. System being repaired')
}

btNewEnemy.addEventListener('click', () => {
  let check0 = document.getElementById('enemyForest')
  let check1 = document.getElementById('enemyCave')
  let check2 = document.getElementById('enemyStreet')
  let check3 = document.getElementById('enemyDungeon')
  let check4 = document.getElementById('enemyBoss')


  if (!check0.checked && !check1.checked && !check2.checked && !check3.checked && !check4.checked) {
    check0.focus()
    alert('Nenhum habitat selecionado.')
    return
  } else {
    check = []
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
        checkBoss()
      }
    }
})
