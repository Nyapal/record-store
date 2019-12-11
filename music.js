let music = [
  {artist: 'Koffee', img: './images/toast.jpg', song: 'Toast', price: 1.99},
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
  {artist: 'YBN Nahmir', img: './images/rubbin-off-the-paint.jpg', song: 'Rubbin off the Paint', price: 1.99},
  {artist: 'dvsn', img: './images/miss-me.jpg', song: 'Miss Me?', price: 1.99},
  {artist: 'Flipp Dinero', img: './images/how-i-move.jpg', song: 'How I Move (ft. Lil Baby)', price: 1.99},
  {artist: 'Ari Lennox', img: './images/i-been.jpg', song: 'I Been', price: 1.99},
  {artist: 'Kiana Lede', img: './images/fairplay.jpg', song: 'Fairplay', price: 1.99},
  {artist: 'M.O x Chip', img: './images/wondering.jpg', song: 'Wondering', price: 1.99},
  {artist: 'Alina Baraz', img: './images/to-me.jpg', song: 'To Me', price: 1.99},
  {artist: 'Mahalia', img: './images/sober.jpg', song: 'Sober', price: 1.99},
  // {artist: '', img: '', song: '', price: 1.99},
]

let songs = ""

for (var i = 0; i < music.length; i++) {
  songs += 
  `<li>
    <h4 class='artist'> ${music[i].artist} </h4>
    <img class='album-art' src='${music[i].img}' />
    <div class='songNPrice'> 
      <p class='song' id='song'> ${music[i].song} </p> 
      <p class='price' id='price'> $ ${music[i].price} </p> 
    </div>
    <div> 
      <button class='play-button'> Play <i class='fas fa-play'></i> </button> 
      <button class='buy-button' onclick='addItem()'> Buy <i class='fa fa-shopping-cart'></i> </button> 
    </div>
  </li>`;
}

console.log(songs)

document.getElementById('featured').innerHTML = songs;

