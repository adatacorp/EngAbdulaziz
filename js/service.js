function serviceShow() {
    const boxClick = document.querySelectorAll("box");
    console.log(boxClick)
    const content = document.getElementById("contentDesc");

    boxClick.forEach((box) => {
        box.addEventListener("click", function() {
          console.log("clicked");
        });
      });
};
serviceShow();