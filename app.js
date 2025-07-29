const audio = document.getElementById("audio");
const currentSong = document.getElementById("currentSong");
const playlistEl = document.getElementById("playlist");

const songs = [
  "assets/songs/Shree krishn.mp3",
  "assets/songs/Rasraj Ji Maharaj.mp3",
  "assets/songs/Ye Chamak Ye Damak.mp3",
  "assets/songs/Arambh_hai_prachand.mp3",
  "assets/songs/song1.mp3",
  "assets/songs/Aankhein.mp3",
  "assets/songs/Butta.mp3",
  "assets/songs/Ranuranu.mp3",
  "assets/songs/Ramuloo.mp3",
  "assets/songs/Madanmanjiri.mp3",
  "assets/songs/Rowdy Baby.mp3",
  "assets/songs/Dil To Pagal.mp3",
  "assets/songs/love.mp3",
  "assets/songs/Kaadhal Kaditham.mp3",
  "assets/songs/uditnarayan.mp3",
  "assets/songs/amir.mp3",
    
];
let currentIndex = 0;

function loadSong(index) {
  currentIndex = index;
  audio.src = songs[index];
  const name = songs[index].split("/").pop();
  currentSong.innerText = name;
  highlightPlaying(index);
  audio.load();
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audio.play();
}

function toggleLoop() {
  audio.loop = !audio.loop;
  alert("Loop is " + (audio.loop ? "ON" : "OFF"));
}

function highlightPlaying(index) {
  const items = document.querySelectorAll("#playlist li");
  items.forEach((item, i) => {
    item.style.background = i === index ? "#00ffcc" : "transparent";
    item.style.color = i === index ? "#000" : "#fff";
  });
}

// Build playlist
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.split("/").pop();
  li.onclick = () => {
    loadSong(index);
    audio.play();
  };
  playlistEl.appendChild(li);
});

window.onload = () => {
  loadSong(currentIndex);
};

audio.addEventListener("ended", () => {
  if (!audio.loop) nextSong();
});