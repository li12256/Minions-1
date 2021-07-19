 
const string = `
*{box-sizing: border-box;margin:0;padding: 0;}
*::before,*::after{box-sizing: border-box;}
body{
    background:radial-gradient(ellipse at center, rgba(206,220,231,1) 0%,rgba(89,106,114,1) 100%);
    min-height: 100vh;
}
.mark{
  position: relative;
}
.belly{
    position:absolute;
    left: 50%;
    margin-left: -100px;
    top: 200px;
    width: 200px;
    height: 350px;
    border-radius: 100px 100px 60px 60px;
    background:-webkit-radial-gradient(center, ellipse cover, rgba(254,252,234,1) 0%,rgba(250,224,42,1) 100%);
}
.eyebrow{
    border: 1px solid black;
    position: absolute;
    left: 50%;
    top: 300px;
    width: 200px;
    height: 15px;
    margin-left: -100px;
    background: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%);
}
.thread{
border: 1px solid black;
width: 200px;
height: 2px;
top: 5px;
background: black;
position: absolute;
margin-left: -1px;
}
.hairs .hair1{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px; 
    z-index: 10; 
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
    left: 50%;
    top: 180px;
    transform: rotate(15deg);
}
.hairs .hair2{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    top: 175px;
    z-index: 1;
    transform: rotate(35deg);
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
}
.hairs .hair3{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    top: 190px;
    z-index: 1;
    transform: rotate(15deg);
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
}
.hairs .hair4{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    top: 195px;
    z-index: 1;
    transform: rotate(15deg);
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
}
.hairs .hair5{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    top: 185px;
    z-index: 1;
    transform: rotate(10deg);
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
}
.hairs .hair6{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    top: 185px;
    z-index: 1;
    transform: rotate(5deg);
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
}
.hairs .hair7{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    top: 175px;
    z-index: 1;
    transform: rotate(-10deg);
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
}
.hairs .hair8{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    top: 180px;
    z-index: 1;
    transform: rotate(-25deg);
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
}
.hairs .hair9{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    top: 190px;
    z-index: 1;
    transform: rotate(-30deg);
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
}
.hairs .hair10{
    position: absolute;
    left: 50%;
    border: 1px solid black;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    top: 185px;
    z-index: 1;
    transform: rotate(-45deg);
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 50px 0 0 0;
}
.eye{
    position:absolute;
    left: 50%;
    top: 260px;
    border: 10px solid  #abaeaf ;
    width: 80px;
    height:80px;
    margin-left: -45px;
    border-radius: 50%; 
}
.eye .yan{
    position: absolute;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    top: 0px;
    border-radius: 50%;
    animation-name: wave;
		animation-duration: 2s;
		animation-iteration-count: infinite;
        z-index: 11;
}
@keyframes wave {
    0% {background-color: transparent;}
    90% {background-color: transparent;}
    100%{background-color:  #fdf04c;}

}
.eye.left{
    transform: translateX(-40px);
   
    
}
.eye.right{
    transform: translateX(50px);
  
}

.eye.left .inward1{
    position: absolute;
    left: 50%;
    top:-2px;
    width: 65px;
    height:65px;
    margin-left: -32.5px;
    border-radius: 60%;
    background:rgba(254,252,234,1);
}
.eye.left .inward2{
    position: absolute;
    left: 50%;
    top:20px;
    width: 25px;
    height:25px;
    margin-left: -12.5px;
    border-radius: 50%;
    background:#8a7b1d;
}
.eye.left .inward3{
    position: absolute;
    left: 50%;
    top:27px;
    width: 10px;
    height:10px;
    margin-left: -5px;
    border-radius: 50%;
    background:black;
}
.eye.right .inward3{
    position: absolute;
    left: 50%;
    top:27px;
    width: 10px;
    height:10px;
    margin-left: -5px;
    border-radius: 50%;
    background:black;
}
.eye.right .inward2{
    position: absolute;
    left: 50%;
    top:19px;
    width: 25px;
    height:25px;
    margin-left: -12.5px;
    border-radius: 50%;
    background:#8a7b1d;
}
.eye.right .inward1{
    position: absolute;
    left: 50%;
    top:-2px;
    width: 65px;
    height:65px;
    margin-left: -32.5px;
    border-radius: 50%;
    background:rgba(254,252,234,1);
}
.mouth{
    border-radius: 0 0 100px 100px;
    position: absolute;
    left:50%;
    top:380px;
    width:80px;
    height:30px;
    margin-left: -40px;
    background:#D54747;
    transform: rotate(-7deg);
    animation-name: x;
		animation-duration: 2s;
		animation-iteration-count: infinite;
}
@keyframes x {
    0%{height: 0};
    30%{height: 5px};
    50%{height: 40px};
    66%{height: 10px};
    100%{height: 0px;}
    
}
.mouth .tooth1{
   border: 1px solid blue;
    position: absolute;
    left: 50%;
    width: 15px;
    height: 10px;
    background:white;
    border-radius: 0 0 50px 50px;
}
.mouth .tooth4{
    border: 1px solid blue;
    position: absolute;
    left: 30%;
    width: 15px;
    height: 10px;
    background:white;
    border-radius: 0 0 50px 50px;
    
}
.mouth .tooth3{
    border: 1px solid blue;
    position: absolute;
    left: 10%;
    width: 15px;
    height: 10px;
    background:white;
    border-radius: 0 0 50px 50px;
}
.mouth .tooth2{
    border: 1px solid blue;
    position: absolute;
    left: 70%;
    width: 15px;
    height: 10px;
    background:white;
    border-radius: 0 0 50px 50px;
}

.leg{
    position: absolute;
    left:50%;
    height: 100px;
    width: 20px;
    margin-left: -50px;
   top: 401px;
   border-right: transparent;
   border-radius: 100px 0 50px 50px;
   background:rgba(250,224,42,1);
   transform: rotate(15deg)
}
.leg.left{
    transform:translateX(150px) rotate(-22deg);
}
.leg.right{
    transform:translateX(-68px) rotate(20deg);
    border-radius: 0 100px 50px 50px;
}
.leg.left .fist1{
    position: absolute;
    width:20px;
    height: 20px;
   top: 95px;
border-radius: 0 0 100px 100px;
background: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%)
}.leg.right .fist2{
    position: absolute;
    width:20px;
    height: 20px;
   top: 95px;
border-radius: 0 0 100px 100px;
background: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%)
}
.foot{
    position:relative;
    left: 50%;
    width: 28px;
    height: 24px;
    margin-left: -15px;
    top:548px;
    background:linear-gradient(to left,#619fdd, #4883b8 );
}
.foot.left{
    transform: translateX(-40px);
}
.foot.right{
    transform: translateX(40px);
    top: 525px
}
.foot.left .jiao1{
    height:20px;
    width: 30px;
    background: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%);
    position:absolute; 
    border-bottom-right-radius:100%;
    border-bottom-left-radius: 40%;
     border-top-left-radius:100%;
     border-bottom: 5px inset black;
     top: 24px;
     left: -8px
}
.foot.right .jiao2{
    height:20px;
    width: 30px;
    background: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%);
    position:absolute; 
    border-bottom-left-radius:100%;
    border-bottom-right-radius: 40%;
     border-top-right-radius:100%;
     border-bottom: 5px inset black;
     top: 24px;
     left: 8px
}
.clothing .arm{
    position:absolute;
    left: 50%;
    top: 420px;
    width: 100px;
    height: 60px;
    margin-left: -50px;
    background:linear-gradient(to left,#619fdd, #4883b8 );
}
.clothing .arm .fang3{
    border: 1px solid black;
    width: 35px ;
    height: 35px;
    position: absolute;
    left: 50%;
    margin-left: -17.5px;
    top: 10px;
    border-radius: 0 0 10px 10px;
    background:linear-gradient(to left,#619fdd, #4883b8 );
}
.clothing .hand{
   border: 1px solid black;
    position: absolute;
    left:50%;
    top: 360px;
    width: 20px;
    height: 90px;
    margin-left: -25px;
    border-radius: 100px 0 0 0;
        background:linear-gradient(to left,#619fdd, #4883b8 );
}
.clothing .hand.left{
    transform:translateX(-55px) rotate(-50deg);
    border-right: transparent;
}
.clothing .hand.right{
    transform:translateX(84px) rotate(50deg);
    border-radius: 0 100px 0 0;
    border-left: transparent; 
}
.clothing .hand.left .fang1{
    width: 10px;
    height: 10px;
    position: absolute;
    left: 50%;
    margin-left: -5px;
    top: 75px;
    border-radius: 50%;
    background: black;
    
}
.clothing .hand.right .fang2{
   background: black;
    width: 10px;
    height: 10px;
    position: absolute;
    left: 50%;
    margin-left: -5px;
    top: 75px;
    border-radius: 50%;
    
}
.clothing .skirt{
    width: 200px;
    height: 70px;
    position: absolute;
    left: 50%;
    top: 480px;
    margin-left: -100px;
    border-radius: 0 0 60px 60px;
    background:linear-gradient(to left,#619fdd, #4883b8 );
}
.clothing .skirt.left .fang5{
    border:1px solid black;
    width: 40px;
    height: 35px;
    position: absolute;
    border-left: transparent;
    border-bottom: transparent;
    border-radius: 0 0 50px 0;
    z-index: 2;
}
.clothing .skirt.right .fang6{
    border:1px solid black;
    width: 40px;
    height: 35px;
    left: 155px;
    position: absolute;
    border-right: transparent;
    border-bottom: transparent;
    border-radius: 0 0 0 50px;
}
    `
const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
demo2.innerText = string.substr(0, n)
demo.innerHTML = string.substr(0, n)
let n = 1
 let time = 300
const run = () =>{
    n +=1
    if(n > string.length) {
      window.clearInterval(id)
      return
  }
    demo.innerHTML = string.substr(0, n)
    demo2.innerText = string.substr(0, n)
    demo2.scrollTop = demo2.scrollHeight
}
const pause = () =>{
   return  setInterval(run,time)
}
let id = pause()

const slow = () =>{
    window.clearInterval(id)
}

const normal = () =>{
    slow()
    time = 50
    id = pause()
}

const fast = () =>{
    slow()
    time = 0
    id = pause()
}
btnStop.onclick = slow
btnPlay.onclick = () =>{
     id = pause()
}
btnNormal.onclick = normal
btnFast.onclick = fast

