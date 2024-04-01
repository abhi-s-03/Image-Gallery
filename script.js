document.addEventListener("DOMContentLoaded", function () {
  const displayedImg = document.querySelector(".displayed-img");
  const overlay = document.querySelector(".overlay");
  const darkBtn = document.querySelector(".dark");
  const thumbBar = document.querySelector(".thumb-bar");

  const images = [
    "assets/msd.jpeg",
    "assets/virat.jpeg",
    "assets/rohit.jpeg",
    "assets/sachin.jpeg",
    "assets/se.jpeg",
  ];
  const alts = {
    msd: "MS Dhoni",
    virat: "Virat Kohli",
    rohit: "Rohit Sharma",
    sachin: "Sachin Tendulkar",
    se: "Virender Sehwag",
  };

  images.forEach((image) => {
    const thumbImg = document.createElement("img");
    thumbImg.setAttribute("src", image);
    thumbImg.setAttribute("alt", alts[image.split("/").pop()]);
    thumbImg.addEventListener("click", function () {
      displayedImg.setAttribute("src", image);
    });
    thumbBar.appendChild(thumbImg);
  });

  darkBtn.addEventListener("click", function () {
    if (overlay.style.display === "none" || overlay.style.display === "") {
      overlay.style.display = "block";
      darkBtn.textContent = "Undarken";
    } else {
      overlay.style.display = "none";
      darkBtn.textContent = "Darken";
    }
  });
});
