document.querySelectorAll("details").forEach(detail => {
  const summary = detail.querySelector("summary");
  const content = document.createElement("div");
  while (summary.nextSibling) {
    content.appendChild(summary.nextSibling);
  }
  content.classList.add("details-content");
  detail.appendChild(content);

  summary.addEventListener("click", e => {
    e.preventDefault();

    const isOpen = detail.hasAttribute("open");

    document.querySelectorAll("details[open]").forEach(openDetail => {
      if (openDetail !== detail) {
        openDetail.removeAttribute("open");
        const c = openDetail.querySelector(".details-content");
        c.style.maxHeight = null;
      }
    });

    if (isOpen) {
      content.style.maxHeight = null;
      setTimeout(() => detail.removeAttribute("open"), 300);
    } else {
      detail.setAttribute("open", "");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
