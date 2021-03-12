//Saiba Mais
const btInput = document.getElementById('btInput')

btInput.addEventListener('click', () => {
  console.log('Err. System being repaired.')
})
//------------------------------


//referência para dice.js
const outDice = document.getElementById('outDice')

const d100 = document.getElementById('D100')
const d20 = document.getElementById('D20')
const d15 = document.getElementById('D15')
const d8 = document.getElementById('D8')
const d6 = document.getElementById('D6')
const d4 = document.getElementById('D4')
const coin = document.getElementById('coin')
// ----------------------------


//Terminal
const terminal = document.getElementById('btTerminal')

let terminalSpawn = 'TERMINAL_ADM\n\n'
let terminalContador = 1

terminal.addEventListener('click', () => {
  const terminal = document.getElementById('terminal')
  terminalContador++
  terminal.textContent = terminalSpawn
  if (terminalContador % 2 === 0) {
    terminal.style.display = 'block'
    return
  } else if (terminalContador % 2 != 0) {
    terminal.style.display = 'none'
    return
  }
})


//-----------------------------


//newEnemy
const btNewEnemy = document.getElementById('newEnemy')

//outs de dados
const outEnemy = document.getElementById('outEnemy')
const outEnemyLife = document.getElementById('outEnemyLife')
const outEnemyF = document.getElementById('outEnemyF')
const outEnemyD = document.getElementById('outEnemyD')
