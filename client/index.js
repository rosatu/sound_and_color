document.addEventListener("DOMContentLoaded",() => {

  fetch('http://localhost:3000/api/v1/sounds')
    .then( r => r.json())
    .then(data => {
      let sounds = data.map(sound => {
        let soundP = document.createElement('p')
        soundP.innerText = sound.name
        return soundP
      })
      document.querySelector('body').append(...sounds)
    })
// //change background color every three seconds
// setTimeout(function(){document.body.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() *255 })`}, 2000)

const waterAudio = new Audio(`https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg
`)
waterAudio.loop = true;
waterAudio.onended = function(){
waterAudio.play();
}
let fireAudio = new Audio(`https://actions.google.com/sounds/v1/ambiences/fire.ogg`)

fireAudio.loop = true;
fireAudio.onended = function(){
fireAudio.play();
}

let waterImage = document.createElement("img")
waterImage.src = "./imleedh-ali-677414-unsplash.jpg"
waterImage.width = 200
waterImage.height = 200
document.querySelector('body').append(waterImage)

let fireImage = document.createElement("img")
fireImage.src = "./connor-jalbert-306179-unsplash.jpg"
fireImage.width = 200
fireImage.height = 200
document.querySelector('body').append(fireImage)

waterImage.addEventListener('mouseover', () => {
  waterAudio.load()
  waterAudio.oncanplaythrough = function(){
    waterAudio.play();
  }
  // waterAudio.play()
  document.body.style.backgroundColor = `rgba(0,51,51)`
})

waterImage.addEventListener('mouseout', () => {
  waterAudio.pause()
})
fireImage.addEventListener('mouseover', () => {
  fireAudio.load()
  fireAudio.oncanplaythrough = function(){
    fireAudio.play();
  }
  document.body.style.backgroundImage = `rgba(51,0,0)`
})

fireImage.addEventListener('mouseout', () => {
  fireAudio.pause()
})

document.getElementById('modal-button').addEventListener('click', (e) => {
  e.target.classList.add('hidden')
  e.target.parentNode.classList.add('hidden')
})

let slider = document.createElement("div")
slider.classList.add("slide-bar")
slider.innerHTML=`
<input type="range" min="0" max="1" value="0" step="0.10" class="slider" id="myRange">`
document.querySelector('body').append(slider)





// fireAudio.src = `https://actions.google.com/sounds/v1/ambiences/fire.ogg`
//
// fightAudio.src = `https://actions.google.com/sounds/v1/crowds/battle_intimidation_forest.ogg`
//
// vortexAudio.src = `https://actions.google.com/sounds/v1/science_fiction/sci_fi_vortex.ogg`
//
// waves https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg

})
