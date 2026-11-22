import './style.css'
import gsap from 'gsap'
const t=gsap.timeline({paused:true});
const play=document.querySelector(".play")
const pause=document.querySelector(".pause")
const restart=document.querySelector(".restart")
const reverse=document.querySelector(".reverse")
const seek=document.querySelector(".seek")
t.to('.box1',{
  x:200,
  duration:1,
  ease: "expo.out"
}).to('.box2',{
    x:200,
  duration:1,
  ease: "expo.out"
  
}).to('.box3',{
    x:200,
  duration:1,
  ease: "expo.out"
}).to('.box4',{
    x:200,
  duration:1,
  ease: "expo.out"
})
play.addEventListener('click',()=>{
  t.play()
})
pause.addEventListener('click',()=>{
  t.pause()
})
restart.addEventListener('click',()=>{
  t.restart()
})
reverse.addEventListener('click',()=>{
  t.reverse()
})
seek.addEventListener('click',()=>{
  t.seek(2)
})