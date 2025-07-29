const audio = document.getElementById("audio");
const currentSong = document.getElementById("currentSong");
const playlistEl = document.getElementById("playlist");

const songs = [
  "Shree krishn.mp3",
  "Rasraj Ji Maharaj.mp3",
  "Ye Chamak Ye Damak.mp3",
  "Arambh_hai_prachand.mp3",
  "song1.mp3",
  "Aankhein.mp3",
  "Butta.mp3",
  "Ranuranu.mp3",
  "Ramuloo.mp3",
  "Madanmanjiri.mp3",
  "Rowdy Baby.mp3",
  "Dil To Pagal .mp3",
  "love.mp3",
  "Kaadhal Kaditham.mp3",
  "uditnarayan.mp3",
  "amir.mp3",
    
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
