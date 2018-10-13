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
        document.querySelector(".wrapperindex").append(vibeBttn)
      })
    })

  function soundMaker(sound){

    let newSound = new ImageCard(sound.icon_image, sound.audio_file)
    let audio = document.createElement("audio")
    audio.innerHTML = `<source src=${sound.audio_file} type="audio/ogg">`
    audio.dataset.id = sound.id
    document.querySelector('.wrapperindex').append(newSound.render(sound.id))
    document.querySelector('body').append(audio)
  }

  document.addEventListener("click", () => {
    let vibeId = event.target.getAttribute("vibe-id")
    let sounds = []
    if (event.target.getAttribute("vibe-id")){
      fetch(`http://localhost:3000/api/v1/vibes/${vibeId}`)
        .then(res => res.json())
        .then(vibe => {
          muteSongs()
          vibe["sound_vibes"].forEach((sound) => {
            let slider = document.querySelector("div.slide-bar[data-id=" + "'" + `${sound.id}`+ "'" + "]")
          slider.querySelector("input").value = sound.volume
          let audios = document.getElementsByTagName("audio")
          let index = parseInt(slider.dataset.id) - 1

        let button = document.createElement("button")
        button.innerText = vibe.name
        button.setAttribute("vibe-id", vibe.id)
        button.addEventListener("click", (event) => {
          console.log(audios.parentNode);
            audios[index].volume = slider.value
            audios[index].play()

        })
        })})
      return sounds
    }
  })

document.addEventListener("click", () => {
  let boom = event.target.getAttribute("vibe-id")
  console.log(boom);
  if(event.target.getAttribute("vibe-id")){
    fetch(`http://localhost:3000/api/v1/vibes/${boom}`)
      .then(res => res.json())
      .then(songs => {
        songs.sound_vibes.forEach((song) => {
          let audios = document.getElementsByTagName("audio")
          let index = parseInt(song.id) - 1
          audios[index].volume = song.volume
          audios[index].play()
        })
      })
  }
})
  function muteSongs(){
    let sounds = document.getElementsByTagName("audio")[0]
    for (var i = 0; i < sounds.length; i++) {
      sounds[i].volume = 0.0
    };

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

  // document.getElementById('modal-button').addEventListener('click', (e) => {
  //   e.target.classList.add('hidden')
  //   e.target.parentNode.classList.add('hidden')
  // })

// ends document here
})
