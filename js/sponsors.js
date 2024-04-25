// DOM Element
const switchLanguage = document.getElementById("lang-selector");

switchLanguage.addEventListener("change", () => {
  const rootElem = document.documentElement,
    lang = rootElem.getAttribute("lang"),
    newLang = lang === "en" ? "ar" : "en";

  rootElem.setAttribute("lang", newLang);

  setLanguage(newLang);
});

const setLanguage = async (language) => {
  const data = await fetch("js/translations.json");
  const response = await data.json();
  const elements = document.querySelectorAll("[data-translation]");
  const imgsAltAttribute = document.querySelectorAll("[data-alt]");

  elements.forEach((el) => {
    const translationKey = el.getAttribute("data-translation");
    el.textContent = response.sponsorsPage[language][translationKey];
  });

  imgsAltAttribute.forEach((img) => {
    const translationKey = img.getAttribute("data-alt");
    img.altAttribute = response.sponsorsPage[language][translationKey];
  });

  language === "ar" ? (document.dir = "rtl") : (document.dir = "ltr");
};
