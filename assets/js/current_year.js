const today = new Date();
const currentYear = today.getFullYear();

const yearElement = document.getElementById("id_current_year");
yearElement.innerHTML = currentYear.toString();
