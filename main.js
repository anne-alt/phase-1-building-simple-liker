// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const they = document.querySelectorAll('.like-glyph')


function liking() {
  mimicServerCall()
  .then( () => {
they.forEach((item) => (item.addEventListener('click', () => {
   if (item.innerHTML === EMPTY_HEART) {
    item.innerHTML = FULL_HEART 
    item.className = "activated-heart"
  } else {
    item.innerHTML = EMPTY_HEART
    item.className = " "
  }
})))
  })




// function liking(l) {
//   const like = l.target;
//   mimicServerCall()
//   .then( () => {
//     if ('like-glyph' === EMPTY_HEART) {
//       return love.innerHTML = FULL_HEART;
//     } else {
//       return love.innerHTML = EMPTY_HEART;
//     }

 // })

  .catch(() => {
    console.log("me!")
    const banner = document.getElementById('#modal');
    setTimeout(banner, 3000)
  })
}
  liking();




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

