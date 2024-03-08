export const scrollTo = (id) => {
  const infoElement = document.getElementById(id);
  if (infoElement) {
    infoElement.scrollIntoView({ behavior: "smooth" });
  }
};
