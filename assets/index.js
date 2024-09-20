
console.log("OIASJDGFIOSJDGF")

const buttons = document.querySelectorAll("#ok");
const page = document.querySelector("#page3")


buttons.forEach(button => {
    button.addEventListener("click", () => {
        page.scrollIntoView({behavior: "smooth"});
    });
  });