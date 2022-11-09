const footer = document.querySelectorAll("#footer");
const shareIkon = document.querySelectorAll("#shareIkon");

shareIkon.forEach((ikon) => {
  ikon.addEventListener("click", () => {
    footer.forEach((i) => {
      i.classList.toggle("hidden");
    });
    if (innerWidth > 1024) {
      footer[0].classList.remove("hidden");
    }
  });
});

// lg:w-10/12 lg:h-1/3
