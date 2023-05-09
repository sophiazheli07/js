const audioElemet = document.querySelector("audio");

//btn
const playButton = document.querySelector("#play");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

const audioTracks = [
  "mixkit-birds-chirping-in-the-jungle-2433.wav",
  "sound2.wav",
];
let currentTrackIndex = 0;
audioElemet.src = audioTracks[0];

playButton.onclick = (e) => {
  audioElemet.paused ? audioElemet.play() : audioElemet.pause();
  e.target.textContent = audioElemet.paused ? "Play" : "Stop";
};

prevButton.onclick = () => {
    currentTrackIndex--;
    if (audioTracks[currentTrackIndex]) {
        audioElemet.src = audioTracks[currentTrackIndex]
    } else {
        audioElemet.src = audioTracks.at(-1);
        currentTrackIndex = audioTracks -1
    }
    audioElemet.play();

};
nextButton.onclick = () => {
    currentTrackIndex++;
    if (audioTracks[currentTrackIndex]) {
        audioElemet.src = audioTracks[currentTrackIndex]
    } else {
        audioElemet.src = audioTracks[0];
        currentTrackIndex = 0;
    }
};

console.log(audioElemet);
