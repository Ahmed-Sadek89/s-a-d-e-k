class customEvent {
  constructor() {}
  setTheme(lightIcon, darkIcon, mainStyle) {
    if (localStorage.getItem("theme") === "dark") {
      lightIcon.classList.remove("d-none");
      darkIcon.classList.add("d-none");
      mainStyle.setAttribute("href", "css/secondTheme.css");
    } 
    if (localStorage.getItem("theme") === "light")  {
      lightIcon.classList.add("d-none");
      darkIcon.classList.remove("d-none");
      mainStyle.setAttribute("href", "css/firstTheme.css");
    }
  }
  makeEventOnPageTheme = (lightIcon, darkIcon, mainStyle) => {
    darkIcon.addEventListener("click", () => {
      lightIcon.classList.remove("d-none");
      darkIcon.classList.add("d-none");
      mainStyle.setAttribute("href", "css/secondTheme.css");
      localStorage.setItem("theme", "dark");
    });

    lightIcon.addEventListener("click", () => {
      lightIcon.classList.toggle("d-none");
      darkIcon.classList.toggle("d-none");
      mainStyle.setAttribute("href", "css/firstTheme.css");
      localStorage.setItem("theme", "light");
    });
  };

  makeEventOnCollapseToggle = (iconToggle, collapseToggle) => {
    iconToggle.addEventListener("click", () => {
      collapseToggle.classList.toggle("collapse-open");
    });
    document.addEventListener("click", (e) => {
      if (e.target !== iconToggle && e.target !== collapseToggle) {
        collapseToggle.classList.remove("collapse-open");
      }
    });
  };

  makeEventOnItemsInCollapse = (li, AllLinks) => {
    li.addEventListener("click", () => {
      AllLinks.forEach((elem) => {
        elem.classList.remove("list-selected");
      });
      li.classList.add("list-selected");
    });
  };
}

export default customEvent;
