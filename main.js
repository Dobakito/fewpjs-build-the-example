// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeBtn = document.querySelector('.like-glyph')
let clicked = false
const errorMessage = document.querySelector('#modal')
// Your JavaScript code goes here!

function hideError() {
  errorMessage.className = 'hidden'
}

function buttonClicked(click){
  btn = click.target
  mimicServerCall('url')
  .then(changeHeart => {
    clicked = !clicked;
    if (clicked){
      btn.innerText = FULL_HEART
    } else {
      btn.innerText = EMPTY_HEART
    }
  })
  .catch(err => {
    errorMessage.className = ''
    errorMessage.innerText = err
    setTimeout(hideError, 5000)
  })
}

likeBtn.addEventListener('click', buttonClicked);
hideError();

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
