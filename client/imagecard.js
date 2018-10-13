class ImageCard {
  constructor(imgfile, audioPath) {
    this.imgfile = imgfile;
    let audio = new Audio(audioPath)
    audio.loop = true
    this.audioObject = audio
  }

  render(soundID){
    let fragment = document.createElement("div")
    fragment.classList.add("table")
    let image = document.createElement("img")
    image.src = this.imgfile
    image.width = 200
    image.height = 200

    let sliderContainer = document.createElement("div")
    sliderContainer.classList.add("slide-bar")
    sliderContainer.innerHTML=`
    <input type="range" min="0" max="1" value="0" step="0.10" class="slider" id="myRange">`
    sliderContainer.setAttribute("data-id", soundID)

    fragment.append(image, sliderContainer)
    let slider = sliderContainer.children[0]
    sliderContainer.dataset.id = soundID
    slider.dataset.id = soundID
    let audios = document.getElementsByTagName("audio")
    let index = parseInt(slider.dataset.id) - 1
    slider.oninput = function(){
      console.log(audios);
      audios[index].play()
      audios[index].volume = slider.value
    }

    return fragment
  }
}
