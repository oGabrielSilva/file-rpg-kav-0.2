//input display
const btInput = document.getElementById('btInput')
inputCounter = 0
btInput.addEventListener('click', () => {

    if (inputCounter % 2 == 0) {
            document.getElementById('inputTerminal').style.display = 'flex'
            inputCounter++
    } else {
            document.getElementById('inputTerminal').style.display = 'none'
            inputCounter++
    }


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


//playerSystem
const addNewPlayer = document.getElementById('addNewPlayer')
const revisePlayer = document.getElementById('revisePlayer')
const outPlayers = document.getElementById('outPlayers')

//battleSystem
playBattle = []
enemysCreate = []
lifeMobs = []
enemysForBattle = []

const battleMob = document.getElementById('battleMob')
const createMob = document.getElementById('createMob')
const salveLastMob = document.getElementById('salveLastMob')

const playerBattle = document.getElementById('playerBattle')
const selectedPlay = document.getElementById('selectedPlay')
const cure = document.getElementById('cure')
const cureAll = document.getElementById('cureAll')

const enemyBattle = document.getElementById('enemyBattle')
const selectedEnemy = document.getElementById('selectedEnemy')
const cureMob = document.getElementById('cureMob')

const vs1vs1 = document.getElementById('vs1vs1')
const vs1vs2 = document.getElementById('vs1vs2')
const battle = document.getElementById('battle')
const outMov = document.getElementById('outMov')
