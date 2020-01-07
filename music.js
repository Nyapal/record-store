let music = [
  {artist: 'Koffee', img: './images/music/toast.jpg', song: 'Toast', price: 1.99},
  {artist: 'City Girls', img: './images/music/act-up.jpg', song: 'Act Up', price: 1.99},
  {artist: 'Megan The Stallion', img: './images/music/big-ole-freak.jpg', song: 'Big Ole Freak', price: 1.99},
  {artist: 'Sabrina Claudio', img: './images/music/confidently-lost.jpg', song: 'Confidently Lost', price: 1.99},
  {artist: 'Rihanna', img: './images/music/anti.png', song: 'Higher', price: 1.99},
  {artist: 'Beyonce', img: './images/music/brown-skin-girl.png', song: 'Brown Skin Girl', price: 1.99},
  {artist: 'YG', img: './images/music/big-bank.jpg', song: 'Big Bank', price: 1.99},
  {artist: 'SZA', img: './images/music/normal-girl.jpg', song: 'Normal Girl', price: 1.99},
  {artist: 'Rubi Rose', img: './images/music/big-mouth.jpg', song: 'Big Mouth', price: 1.99},
  {artist: 'Kendrick Lamar', img: './images/music/humble.jpg', song: 'HUMBLE.', price: 1.99},
  {artist: 'Summer Walker', img: './images/music/body.webp', song: 'Body', price: 1.99},
  {artist: 'Jorja Smith', img: './images/music/goodbyes.jpg', song: 'Goodbyes', price: 1.99},
  {artist: 'Snoh Aalegra', img: './images/music/i-want-you-around.jpg', song: 'I Want You Around', price: 1.99},
  {artist: 'YBN Nahmir', img: './images/music/rubbin-off-the-paint.jpg', song: 'Rubbin off the Paint', price: 1.99},
  {artist: 'dvsn', img: './images/music/miss-me.jpg', song: 'Miss Me?', price: 1.99},
  {artist: 'Flipp Dinero', img: './images/music/how-i-move.jpg', song: 'How I Move (ft. Lil Baby)', price: 1.99},
  {artist: 'Ari Lennox', img: './images/music/i-been.jpg', song: 'I Been', price: 1.99},
  {artist: 'Kiana Lede', img: './images/music/fairplay.jpg', song: 'Fairplay', price: 1.99},
  {artist: 'M.O x Chip', img: './images/music/wondering.jpg', song: 'Wondering', price: 1.99},
  {artist: 'Alina Baraz', img: './images/music/to-me.jpg', song: 'To Me', price: 1.99},
  {artist: 'Mahalia', img: './images/music/sober.jpg', song: 'Sober', price: 1.99},
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

