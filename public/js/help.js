const btHelp = document.getElementById('btHelp')
const btX = document.getElementById('X')
btHelp.addEventListener('click', help)
btX.addEventListener('click', () => {
  document.getElementById('help').style.display = 'none'
})

function help() {
  document.getElementById('help').style.display = 'block'
}
