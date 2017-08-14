import './styles/screen.scss'

const panels = document.querySelectorAll('.panel')

function toggleOpen () {
  this.classList.toggle('open')
}

function toggleActive (e) {
  // console.log(e.propertyName)
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

const main = () => {
  console.log('Made with <3 at The Iron Yard')
}

document.addEventListener('DOMContentLoaded', main)

// HERE BE DRAGONS... and webpack. Don't touch.
if (process.env.NODE_ENV !== 'production') require('./index.html')
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
