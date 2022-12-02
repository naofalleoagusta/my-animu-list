const scrollToView = (id: string) => {
  if (!document) {
    return;
  }
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -100;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export default scrollToView;
