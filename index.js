setInterval(() => {
  const checkObj = document.querySelectorAll("[data-page-links*='\"DONE\"']");

  for (let i = 0; i < checkObj.length; i++) {
    checkObj[i].style.textDecoration = "line-through";
  }

  const kanbans = document.getElementsByClassName("kanban-card");
  const archives = document.getElementsByClassName(
    "rm-xparser-default-ARCHIVED"
  );

  for (let i = 0; i < kanbans.length; i++) {
    if (
      kanbans[i].children[0].children[0].children[0].children[0].children[0]
        ?.checked
    ) {
      kanbans[i].style.textDecoration = "line-through";
    }
  }
  for (let i = 0; i < archives.length; i++) {
    archives[
      i
    ].parentElement.parentElement.parentElement.parentElement.style.textDecoration =
      "line-through";
  }
}, 3000);
