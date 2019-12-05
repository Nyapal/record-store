{/* <li>  
  <div>
    <button class="play-button">
      Play 
      <i class="fas fa-play"></i>
    </button>
    <button class="buy-button">
      Buy 
      <i class="fa fa-shopping-cart"></i> 
    </button>
  </div> 
</li> */}

let music = [
  {artist: 'Rubi Rose', img: './images/big-mouth.jpg', song: 'Big Mouth', price: 1.99},
  {artist: 'City Girls', img: './images/act-up.jpg', song: 'Act Up', price: 1.99},
  {artist: 'Megan The Stallion', img: './images/big-ole-freak.jpg', song: 'Big Ole Freak', price: 1.99},
  {artist: 'Sabrina Claudio', img: './images/confidently-lost.jpg', song: 'Confidently Lost', price: 1.99},
  {artist: 'Rihanna', img: './images/anti.png', song: 'Higher', price: 1.99},
  {artist: 'Beyonce', img: './images/brown-skin-girl.png', song: 'Brown Skin Girl', price: 1.99},
  {artist: 'YG', img: './images/big-bank.jpg', song: 'Big Bank', price: 1.99},
  {artist: 'SZA', img: './images/normal-girl.jpg', song: 'Normal Girl', price: 1.99},
  {artist: 'Kendrick Lamar', img: './images/humble.jpg', song: 'HUMBLE.', price: 1.99},
  {artist: 'Summer Walker', img: './images/body.webp', song: 'Body', price: 1.99},
  {artist: 'Jorja Smith', img: './images/goodbyes.jpg', song: 'Goodbyes', price: 1.99},
  {artist: 'Snoh Aalegra', img: './images/i-want-you-around.jpg', song: 'I Want You Around', price: 1.99},
  // {artist: '', img: '', song: '', price: 1.99},
]

let songs = ""

for (var i = 0; i < music.length; i++) {
  songs += "<li>";
  songs += "<h4 class='artist'>" + music[i].artist + "</h4>";
  songs += "<img class='album-art' src=" + music[i].img + " />";
  songs += "<div class='songNPrice'> <p class='song' id=" + music[i].song + ">" + music[i].song + "</p> <p class='price'> $" + music[i].price + "</p> </div>";
  songs += "<div> <button> Play </button> <button> Buy </button> </div>"
  songs += "</li>";
}
document.getElementById('featured').innerHTML = songs;