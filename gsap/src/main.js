import gsap from "gsap";
import './style.css'
const box=document.querySelectorAll(".box")


//masking effect 
gsap.from(box,{
  yPercent:100,
  ease:"power4.out",
  stagger:{
    each:0.2,
    from:"random"
  },
  duration:1,
  repeat:Infinity,
  opacity:0.1
})