let handleAutoPlay = (video) => {
  let handler = () => {
    togglePlay(video);
    window.removeEventListener('touchstart', handler);
  }
  window.addEventListener('touchstart', handler);
}

let togglePlay = (video) => {
  video.play();
}


let initAutoPlay = (elem) => {
  let video = document.querySelector(elem);
  if (video) {
    handleAutoPlay(video);
  }
}

export default initAutoPlay;
