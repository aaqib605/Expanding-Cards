const panels = document.querySelectorAll(".panel");

const handleClick = function () {
  const activePanel = document.querySelector(".active");
  activePanel.classList.remove("active");

  this.classList.add("active");
};

for (const panel of panels) {
  panel.addEventListener("click", handleClick);
}
