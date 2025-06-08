// inject-header
fetch("/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("site-header").innerHTML = data;
  })
  .then(  test=>{
    const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('active');

  });
  })

