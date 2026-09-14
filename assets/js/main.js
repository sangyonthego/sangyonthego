// ===============================
// LOAD HEADER
// ===============================

fetch("/sangyonthego/header.html")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Header failed to load: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    const header = document.getElementById("site-header");

    if (header) {
      header.innerHTML = data;
    }

    // ===============================
    // MOBILE NAVIGATION
    // ===============================

    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("active");
      });
    }
  })
  .catch(error => {
    console.error("Error loading header:", error);
  });
