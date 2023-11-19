export const initGymVideo = () => {
  const playButton = document.querySelector('[data-gym-video-button]');
  const videoContainer = document.querySelector('[data-gym-video-container]');

  if (playButton && videoContainer) {
    playButton.addEventListener('click', () => {
      if (playButton.classList.contains('is-active')) {
        return;
      }

      playButton.classList.add('is-active');
      videoContainer.innerHTML = (
        `<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
        </iframe>`
      );

      playButton.classList.add('is-hidden');
    });
  }
};
