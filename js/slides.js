//pick all images and layer based on z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

//keep track of 2 things: which slide we're on and what the z-index is
let currentSlide = 0
let z = 1

slideArea.addEventListener("click", function() {
  currentSlide = currentSlide + 1
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }
  z = z + 1

  //remove animation from style of every image
  images.forEach(image => {
    image.style.animation = ""
  })


  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
})


//when i move my mouse over slide area put all images in random place
slideArea.addEventListener("mouseover", function() {
  images.forEach(image => {
    const x = 25 * (Math.floor(Math.random()*5 ))- 50
    const y = 25 * (Math.floor(Math.random()*5 ))- 50


    image.style.transform = `translate(${x}px, ${y}px)`
  })
})


//put images back when mouse moves away
slideArea.addEventListener("mouseout", function() {
  images.forEach(image => {
    image.style.transform =""
  })
})
