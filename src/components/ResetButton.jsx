import refreshButtonArrows from "../assets/arrows-rotate-solid.svg";

export default () => {
  return (
    <button class="refresh-button" onClick="window.location.reload()">
      <i class="fa-solid fa-arrows-rotate refresh-button-arrows"></i>
      <p class="refresh-button-text">Reset</p>
    </button>
  );
};
