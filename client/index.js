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
  fetch("http://localhost:3000/api/v1/vibes")
    .then(res => res.json())
    .then(vibes => {
      vibes.forEach((vibe) => {
        let vibeBttn = document.createElement("button")
        vibeBttn.setAttribute("vibe-id", vibe.id)
        vibeBttn.innerText = vibe.name
        document.querySelector('body').append(vibeBttn)
      })
    })

  function soundMaker(sound){
    let newSound = new ImageCard(sound.icon_image, sound.audio_file)
    document.querySelector('body').append(newSound.render(sound.id))
  }

  document.addEventListener("click", () => {
    let vibeId = event.target.getAttribute("vibe-id")
    let sounds = []
    if (event.target.getAttribute("vibe-id")){
      fetch(`http://localhost:3000/api/v1/vibes/${vibeId}`)
        .then(res => res.json())
        .then(vibe => {
          muteSongs()
          console.log(vibe);
          let i = 0
          vibe["sound_vibes"].forEach((sound) => {
            // console.log(document.querySelector("div.slide-bar[data-id='`${sound.id}`']"));
            let audio = new Audio (vibe["sounds"][i]["audio_file"])
            i++
            console.log("sound id: " + `${sound.id}`)
            console.log(audio);
            let slider = document.querySelector("div.slide-bar[data-id=" + "'" + `${sound.id}`+ "'" + "]")


            // audio.play()
            // audio.volume() = sound.volume
            slider.querySelector("input").value =sound.volume
            console.log(slider.querySelector("input"));
        })})
      return sounds
    }
  })

  function muteSongs(){
    sounds = document.querySelectorAll(".slide-bar[data-id]")
    sounds.forEach((sound) => {
      sound.querySelector("input").value = 0.0
    })
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
    if(vibeMaker().length > 0){
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
      }
    }
  })

  function vibeMaker(){
    let slideBars = document.querySelectorAll('.slide-bar[data-id]');
    let soundVibes = []
    slideBars.forEach((bar) => {
      if (bar.children[0].value > 0){
        soundVibes.push({sound_id: bar.getAttribute("data-id"), volume: bar.children[0].value})
      }
    })
    return soundVibes;
  }

  document.getElementById('modal-button').addEventListener('click', (e) => {
    e.target.classList.add('hidden')
    e.target.parentNode.classList.add('hidden')
  })

// ends document here
})
