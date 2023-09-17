const image = document.getElementById('cover'),
  title = document.getElementById('music-title'),
  artist = document.getElementById('music-artist'),
  currentTimeEl = document.getElementById('current-time'),
  durationEl = document.getElementById('duration'),
  progress = document.getElementById('progress'),
  playerProgress = document.getElementById('player-progress'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next'),
  playBtn = document.getElementById('play'),
  background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
  {
    path: 'assets/1.mp3',
    displayName: 'The Charmer\'s Call',
    cover: 'assets/1.jpg',
    artist: 'Hanu Dixit',
  },
  {
    path: 'assets/2.mp3',
    displayName: 'You Will Never See Me Coming',
    cover: 'assets/2.jpg',
    artist: 'NEFFEX',
  },
  {
    path: 'assets/3.mp3',
    displayName: 'Intellect',
    cover: 'assets/3.jpg',
    artist: 'Yung Logos',
  }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  // Change play button icon
  playBtn.classList.replace('fa-play', 'fa-pause');
  // Set button hover title
  playBtn.setAttribute('title', 'Pause');
  music.play();
}