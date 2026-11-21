import gsap from "gsap";
import './style.css'
const box=document.querySelectorAll(".box")
// gsap.fromTo(box,{
//   x:-150,
// },{
//   x:1300,
//   duration:2,
//   ease:"expo.inOut",
//   repeat:Infinity
// })

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