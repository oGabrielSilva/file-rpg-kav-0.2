//Saiba Mais
const btSaibaMais = document.getElementById('btSaibaMais')

btSaibaMais.addEventListener('click', () => {
  const copy = document.getElementById('copy')
  if(terminalContador % 2 == 0) {
    alert('Err. Terminal in focus.')
    return
  }
  copy.focus()
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
let events = 0
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
