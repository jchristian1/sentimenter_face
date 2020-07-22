//left green eye elements
const green_left = document.querySelector("#eye_green_left");
const level1_green_left = document.querySelector("#level1_green_left");
const level2_green_left = document.querySelector("#level2_green_left");
const level3_green_left = document.querySelector("#level3_green_left");
const level3A_green_left = document.querySelector("#level3A_green_left");
const level4_green_left = document.querySelector("#level4_green_left");
const level5_green_left = document.querySelector("#level5_green_left");

//right green eye elements
const green_right = document.querySelector("#eye_green_right");
const level1_green_right = document.querySelector("#level1_green_right");
const level2_green_right = document.querySelector("#level2_green_right");
const level3_green_right = document.querySelector("#level3_green_right");
const level3A_green_righ = document.querySelector("#level3A_green_righ");
const level4_green_right = document.querySelector("#level4_green_right");
const level5_green_right = document.querySelector("#level5_green_right");

//left orange eye elements 
const orange_left = document.querySelector("#eye_orange_left");
const level1_orange_left = document.querySelector("#level1_orange_left");
const level2_orange_left = document.querySelector("#level2_orange_left");
const level3_orange_left = document.querySelector("#level3_orange_left");
const level3A_orange_left = document.querySelector("#level3A_orange_left");
const level4_orange_left = document.querySelector("#level4_orange_left");
const level5_orange_left = document.querySelector("#level5_orange_left");

//right orange eye elements
const orange_right = document.querySelector("#level1_orange_right");
const level1_orange_right = document.querySelector("#level1_orange_right");
const level2_orange_right = document.querySelector("#level2_orange_right");
const level3_orange_right = document.querySelector("#level3_orange_right");
const level3A_orange_right = document.querySelector("#level3A_orange_right");
const level4_orange_right = document.querySelector("#level4_orange_right");
const level5_orange_right = document.querySelector("#level5_orange_right");

const tl = gsap.timeline();

//pupils code
gsap.to(level1_orange_right, {
    y: -5,
    stagger: { // wrap advanced options in an object
      each: 0.1,
      from: "center",
      grid: "auto",
      ease: "power2.inOut",
      repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
    }
  });
    
gsap.to(level1_green_left, {
    y: -5,
    stagger: { // wrap advanced options in an object
      each: 0.1,
      from: "center",
      grid: "auto",
      ease: "power2.inOut",
      repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
    }
  });

//outter
//TweenMax.to(level5_orange_right, 6, {rotation:"360", ease:Linear.easeNone, repeat:-1})

/*TweenMax.set(level5_orange_right, {
    scale:0,
    rotation: 360,
    transformOrigin:"50% 50%"         // make transform origin be center for x and y axis
  });

  tl
  .to(level5_orange_right, 2, {scale:1})           // scale element to 100%
  .to(level5_orange_right, 2, {rotation:"=360"})  // rotate element by a relative value of 360deg
  .play();*/

    

/*tl.to(green_right, {duration: 3, rotation: 90})
    .to(orange_left, {duration:1, rotation:240})
    .to(level1_green_left,1,{scaleY:.75})*/

//tl.to(orange_right, {duration: 2, x: 100}) //notice that there's no semicolon!
//  .to(green_left, {duration: 1, y: 200})
//  .to(green_right, {duration: 3, rotation: 360});
//TweenMax.from(green_left,2,{x:100});

function hide_green(){
  green_left.style.display = "none";
  green_right.style.display = "none";
  orange_left.style.display = "initial";
  orange_right.style.display = "initial";
}

function hide_orange(){
  orange_left.style.display = "none";
  orange_right.style.display = "none";
  green_left.style.display = "initial";
  green_right.style.display = "initial";
}


function sendJSON(){ 
               
    let result = document.querySelector('#result'); 
    let intent = document.querySelector('#intent').value; 
    let label = document.querySelector('#label').value;    
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = "https://krtistianf89-python-rest-api.herokuapp.com/sentiment/va"; 
    //let url = "http://127.0.0.1:5000/sentiment/va"; 


    let data_intent = {
        "sentence": intent,
        "label": label
    };
    let options = {
        url: url,
        dataType: "text",
        type: "GET",
        data: data_intent,
        success: function( data, status, xhr ) {
            data = JSON.parse(data)
            
            if(data.score === "Positive"){
              hide_orange();
            }else{
              hide_green();
            }

            alert(data.score);
        },
        error: function( xhr, status, error ) {
            alert(error);
        }
    };
    $.ajax( options );
    } 
