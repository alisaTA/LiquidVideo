let handleAutoPlay = (video) => {
  let handler = () => {
    togglePlay(video);
    console.log('video', video);
    window.removeEventListener('touchstart', handler);
  }
  window.addEventListener('touchstart', handler);
}

let togglePlay = (video) => {
  video.click();
}


let initAutoPlay = (elem) => {
  let video = document.querySelector(elem);
  if (video) {
    handleAutoPlay(video);
  }
}

export default initAutoPlay;
