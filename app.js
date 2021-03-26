// var ip = document.querySelector("#ip");
// var op = document.querySelector("#op");


// ip.addEventListener("click" , function onClickHandler() {
//     ip.addEventListener("change", function checkPasswordLength(){
//         var len = ip.value;
//         if(len.length < 8) 
//         {alert("Please enter more characters");}
//         else{
//          alert("Password is okay");
//         }
//     });
// });


// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myModalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    console.log("modal");
  modal.style.display = "block";
  
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



//Toast
let myToastButton = document.getElementById("myToastButton");
let myHideToastButton = document.getElementById("myHideToastButton");
let myToastClass = document.getElementsByClassName("toast")[0];

myToastButton.onclick = function(){
    console.log("clicked");
    myToastClass.style.visibility="visible";
}
myHideToastButton.onclick = function(){
    myToastClass.style.visibility="hidden";
}