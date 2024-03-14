export const scrollTo = (id, offset = 50) => {
  const infoElement = document.getElementById(id);
  if (infoElement) {
    // Получаем координаты верхней границы элемента
    const elementTop = infoElement.getBoundingClientRect().top;

    // Получаем координаты верхней границы контейнера (допустим, у вас это окно браузера)
    const containerTop =
      window.pageYOffset || document.documentElement.scrollTop;

    // Прокручиваем к верхней границе элемента с учетом смещения
    window.scrollTo({
      top: elementTop + containerTop - offset,
      behavior: "smooth",
    });
  }
};
