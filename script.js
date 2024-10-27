const DarkMode = document.querySelector("#mode");
const ToggleMode = document.querySelector("label");

// debugger;

const IsDarkmode = JSON.parse(localStorage.getItem("changeTheme"));

if (IsDarkmode) {
  DarkMode.checked = true;
}

ToggleMode.addEventListener("click", () => {
  console.log(IsDarkmode);
  if (DarkMode.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("changeTheme", true);
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("changeTheme", false);
  }
});
