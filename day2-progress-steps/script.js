'use strict'
const prevBtn= document.querySelector(".previous")
const nextBtn = document.querySelector(".next")
const progress = document.querySelector('.progress')
const circles = document.querySelectorAll('.circle')



let currentActives = 1
   
nextBtn.addEventListener('click',()=>{
  currentActives++
  if (currentActives > circles.length ) {
    currentActives = circles.length
  }
  update()
})

prevBtn.addEventListener('click',()=>{
  currentActives--
  if (currentActives < 1) {
    currentActives = 1
  }
  update()
})


function update() {
  circles.forEach((circle,id)=>{
    if (id < currentActives) {
      circle.classList.add("active")
    }else{
      circle.classList.remove("active")
    }
  })
  
  const actives = document.querySelectorAll(".active")
  progress.style.width = (actives.length-1)/(circles.length-1)*100 +'%'
  
  console.log(currentActives)
  
  if(currentActives === 1){
    prevBtn.disabled = true
  }else if (currentActives === circles.length) {
    nextBtn.disabled = true
  }else{
    
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}
