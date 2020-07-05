const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

//when i click the toggleTag, toggle a class of open for main tag

toggleTag.addEventListener("click", function(){
  mainTag.classList.toggle("open")

if(mainTag.classList.contains("open")) {
   toggleTag.innerHTML= `<img src="../assets/close.svg"> Close`
 } else {
   toggleTag.innerHTML= `<img src="../assets/menu.svg"> Menu`
 }
  })
