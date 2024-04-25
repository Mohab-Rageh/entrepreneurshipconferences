const headerElements = document.querySelectorAll("header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  scrollY > 20
    ? headerElements.forEach((header) =>
        header.classList.replace("not-scrolled", "scrolled")
      )
    : headerElements.forEach((header) =>
        header.classList.replace("scrolled", "not-scrolled")
      );
});

const scroller = document.querySelectorAll(".scroller");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  scroller.forEach(
    (scroller) => (scroller.style.width = `${(scrollTop / height) * 100}%`)
  );
});
