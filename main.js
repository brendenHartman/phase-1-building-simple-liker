// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded',() => {
const hearts = document.getElementsByTagName('span');
const errorModal = document.getElementById('modal');
console.log(hearts)
for(let i = 0; i < hearts.length; i++){
  hearts[i].addEventListener('click', () => heartClicked(hearts[i]));
}

function heartClicked(heart){
  console.log(heart)
  if(heart.innerText !== FULL_HEART){
  mimicServerCall()
  .then(() => {
    heart.innerText = FULL_HEART;
    heart.classList.add("activated-heart");
    console.log(heart);
  })
  .catch(error => {
    errorModal.innerText = error;
    errorModal.classList.remove("hidden");
    setTimeout(() => errorModal.classList.add('hidden'), 3000);
  })
  }
  else{
    heart.innerText = EMPTY_HEART;
    heart.classList.remove("activated-heart");
  }
}
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
