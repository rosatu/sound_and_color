document.addEventListener("DOMContentLoaded",() => {

let waterImage = new ImageCard("./water.jpg", `https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg
`)
document.querySelector('body').append(waterImage.render())

let fireImage = new ImageCard("./fire.jpg", `https://actions.google.com/sounds/v1/ambiences/fire.ogg`)
document.querySelector('body').append(fireImage.render())

let tricklingstreamImage = new ImageCard("./tricklingstream.jpg", `https://actions.google.com/sounds/v1/water/small_stream_flowing.ogg`)
document.querySelector('body').append(tricklingstreamImage.render())

let nightcricketsImage = new ImageCard("./nightcrickets.jpg", `https://actions.google.com/sounds/v1/animals/afternoon_crickets_long.ogg`)
document.querySelector('body').append(nightcricketsImage.render())

let thunderstormImage = new ImageCard("./thunderstorm.jpg", `https://actions.google.com/sounds/v1/weather/thunderstorm_long.ogg
`)
document.querySelector('body').append(thunderstormImage.render())

let chuckleImage = new ImageCard("./chuckle.jpg", `https://actions.google.com/sounds/v1/human_voices/male_chuckling.ogg`)
document.querySelector('body').append(chuckleImage.render())

let gasImage = new ImageCard("./gas.jpg", `https://actions.google.com/sounds/v1/human_voices/human_fart.ogg`)
document.querySelector('body').append(gasImage.render())

document.getElementById('modal-button').addEventListener('click', (e) => {
  e.target.classList.add('hidden')
  e.target.parentNode.classList.add('hidden')
})


})
