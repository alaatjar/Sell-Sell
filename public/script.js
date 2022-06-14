// home

let form = document.querySelector("#form-timer");
let title = document.createElement("h3");
setTimeout(() => {
  form.prepend(title);
  title.setAttribute("Id", "welcome");
  title.innerText = "☺WELCOME☺";
}, 5000);


//change Color
const chColor = document.getElementById("color");
const bodyOne = document.getElementById("body-page");

chColor.addEventListener("click", (e) => {
  bodyOne.classList.toggle("chColor");
});

//changeSize
const size = document.getElementById("big-size");
const zoom = document.getElementById("body-page");

size.addEventListener("click", (eo) => {
  zoom.classList.toggle("font");
});



//clock
function renderTime(){
  let currentTime = new Date();
  let diem = "AM";
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();
    
  if(h == 0){
    h = 12;
  }else if(h > 12){
    h = h - 12;
    diem = "PM"
  }
  if(h < 10){
    h = "0" + h;
  }
  if(m < 10){
    m = "0" + m;
  }
  if(s < 10){
    s = "0" + s;
  }
  let myClock = document.getElementById('clockDisplay');
  myClock.textContent = h + ":" + m + ":" + s + " " + diem;
  setTimeout('renderTime()', 1000); 
}
renderTime();



// const test= document.querySelector(".card")
// const test1 = document.createElement("h4")
// test.append(test1)
// test1.innerText= "hiiiii"
// test1.setAttribute( "id", "new")


const ClickOne = document.getElementById("ClickOne")
const ClickTwo = document.getElementById("ClickTwo")
const ClickThree = document.getElementById("ClickThree")
const ClickFour = document.getElementById("ClickFour")
const dialog = document.querySelector("dialog")
const SEC = document.getElementById("SEC")
const QuantityOk = document.getElementById("QuantityOk")
const Stored = document.getElementById("Stored")



ClickOne.addEventListener ( "click" ,(eo) => {
eo.preventDefault()

ClickOne.style.backgroundColor="red"    // change color

  // ClickHere.classList.add("colorOne")         // change color
//  const title = document.createElement("h1");
//  title.innerText= "SELL 4 SELL";
//  SEC.prepend(title);
})

ClickTwo.addEventListener ( "click" ,(eo) => {
  eo.preventDefault() 
  ClickTwo.style.backgroundColor="yellow"
} )

ClickThree.addEventListener ( "click" ,(eo) => {
  eo.preventDefault() 
  ClickThree.style.backgroundColor="green"
} )

ClickFour.addEventListener ( "click" ,(eo) => {
  eo.preventDefault()
  ClickFour.style.backgroundColor="orange"
} )


const buyAll = document.querySelectorAll(".buyAll")
buyAll.forEach(item => {
  item.addEventListener("click", (eo) => {
    dialog.showModal()
  })
});


QuantityOk.addEventListener ( "click" ,(eo) => {
 eo.preventDefault()
  dialog.close() } )


  QuantityOk.addEventListener ( "click" ,(eo) => {
  eo.preventDefault()
  Stored.style.display="block"
  
setTimeout(() => {
   Stored.style.display="none"
 }, 2000);

 } )





