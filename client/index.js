document.addEventListener("DOMContentLoaded",() => {
  fetch("http://localhost:3000/api/v1/sounds")
    .then(res => res.json())
    .then(sounds => {sounds.forEach(
      (sound) => { soundMaker(sound)
      }
    )})
    .then(boom => {
      let vibeBttn = document.createElement("button")
      vibeBttn.setAttribute("id", "vibe-btn")
      vibeBttn.innerText = "VIBE BUTTON"
      document.querySelector('body').append(vibeBttn)
    })

  function soundMaker(sound){
    let newSound = new ImageCard(sound.icon_image, sound.audio)
    document.querySelector('body').append(newSound.render(sound.id))
  }

  document.addEventListener("click", () => {
    if (event.target.id === "vibe-btn"){
      let vibeName = document.createElement("div")
      vibeName.innerHTML = `<input value="name" id="name" type="text" ><br>
      <input type="submit" id=submit value="submitVibe"><br>`
      document.querySelector('body').append(vibeName)
    }
  })

  document.addEventListener("click", () => {
    if(event.target.id === "submit"){
    fetch("http://localhost:3000/api/v1/vibes", {
      method: "POST",
      body: JSON.stringify({
        name: document.getElementById("name").value,
        sounds: vibeMaker()
      }),
      headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json'}
    })
    .then(r=>r.json())
    .then(console.log)
  }

  } )

  function vibeMaker(){
    let slideBars = document.querySelectorAll('.slide-bar[data-id]');
    let soundVibes = []
    slideBars.forEach((bar) => {
      soundVibes.push({sound_id: bar.getAttribute("data-id"), volume: bar.children[0].value})
    })
    return soundVibes;
  }

  document.getElementById('modal-button').addEventListener('click', (e) => {
    e.target.classList.add('hidden')
    e.target.parentNode.classList.add('hidden')
  })

// ends document here
})
