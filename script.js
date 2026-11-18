const darkMode = document.getElementById("dark-mode");
const themeStylesheet = document.getElementById("theme-stylesheet");

darkMode.addEventListener("click", () => {
  const isDark = themeStylesheet.getAttribute("href") === "dark.css";

  themeStylesheet.setAttribute("href", isDark ? "light.css" : "dark.css");
  darkMode.textContent = isDark ? "Dark Mode" : "Light Mode";
});
