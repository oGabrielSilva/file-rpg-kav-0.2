d100.addEventListener('click', () => {

  let newD100 = Math.ceil(Math.random() * 100)
  terminalSpawn += `D100: ${newD100}\n`
  outDice.value = newD100
})

d20.addEventListener('click', () => {

  let newD20 = Math.ceil(Math.random() * 20)
  terminalSpawn += `D20: ${newD20}\n`
  outDice.value = newD20
})

d15.addEventListener('click', () => {

  let newD15 = Math.ceil(Math.random() * 15)
  terminalSpawn += `D15: ${newD15}\n`
  outDice.value = newD15
})

d8.addEventListener('click', () => {

  let newD8 = Math.ceil(Math.random() * 8)
  terminalSpawn += `D8: ${newD8}\n`
  outDice.value = newD8
})

d6.addEventListener('click', () => {

  let newD6 = Math.ceil(Math.random() * 6)
  terminalSpawn += `D6: ${newD6}\n`
  outDice.value = newD6
})

d4.addEventListener('click', () => {

  let newD4 = Math.ceil(Math.random() * 4)
  terminalSpawn += `D4: ${newD4}\n`
  outDice.value = newD4
})

coin.addEventListener('click', () => {

  let newCoin = Math.ceil(Math.random() * 2)

  if (newCoin === 1) {
    newCoin = 'Heads'
  } else {
    newCoin = 'Tails'
  }

  terminalSpawn += `Coin: ${newCoin}\n`
  outDice.value = newCoin
})
