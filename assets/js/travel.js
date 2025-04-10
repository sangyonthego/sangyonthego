const travelData = {
    bangkok: {
      title: "Bangkok",
      tagline: "Floating markets, golden temples, and vibrant nights",
      image: "assets/media/bangkok.jpg",
      intro: "Bangkok greets you with a whirlwind of tuk-tuks, temple bells, and sizzling street food...",
      experiences: [
        "🕌 Grand Palace & Emerald Buddha",
        "🍜 Chatuchak Weekend Market",
        "🛶 Damnoen Saduak Floating Market",
        "🌇 Rooftop sunset at Vertigo Bar"
      ],
      notes: "Best explored on foot or by boat... mango sticky rice is a must!"
    },
    phuket: {
      title: "Phuket",
      tagline: "Island vibes, turquoise waves, and slow sunsets",
      image: "assets/media/phuket.jpg",
      intro: "Phuket welcomed me with salty air and golden sands...",
      experiences: [
        "🌅 Sunset at Promthep Cape",
        "🐘 Ethical elephant sanctuary visit",
        "🛥️ Island-hopping to Phi Phi & James Bond Island",
        "🥥 Chillin’ with a coconut on Kata Beach"
      ],
      notes: "Rent a scooter, pack your sunscreen... Phuket is freedom!"
    },
    coorg: {
        title: "Coorg",
        tagline: "Misty mornings, coffee plantations, and soul-soothing greens 🌿",
        image: "assets/media/coorg.jpg", // hero image
        intro: "Tucked away in the Western Ghats, Coorg feels like nature's warm embrace — all wrapped in mist, with the scent of coffee and cardamom in the air.",
        experiences: [
          "☕ Sipping freshly brewed coffee at a plantation stay",
          "🌿 Trekking through lush hills to Tadiandamol Peak",
          "🐘 Visiting Dubare Elephant Camp",
          "🕌 Exploring the Tibetan vibe at Namdroling Monastery",
          "💦 Chillin’ by Abbey Falls"
        ],
        notes: "Coorg is best enjoyed slowly — take long walks, talk to locals, and don’t forget to try pandi curry if you're non-veg!",
        gallery: [
          "assets/media/coorg1.jpg",
          "assets/media/coorg2.jpg",
          "assets/media/coorg3.jpg",

        ]
      }
      
  };
  
  function getPlaceFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('place');
  }
  
  function renderPlaceContent(placeKey) {
    const place = travelData[placeKey];
    if (!place) {
      document.body.innerHTML = "<h2 style='text-align:center;'>Oops! Place not found.</h2>";
      return;
    }
  
    document.title = `${place.title} | Sangy on the Go`;
    //document.getElementById("page-title").textContent = `${place.title} | Sangy on the Go`;
    document.getElementById("hero-image").src = place.image;
    document.getElementById("hero-image").alt = `${place.title} hero`;
    document.getElementById("place-title").textContent = place.title;
    document.getElementById("place-tagline").textContent = place.tagline;
    document.getElementById("place-intro").textContent = place.intro;
  
    const expList = document.getElementById("place-experiences");
    place.experiences.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      expList.appendChild(li);
    });
  
    document.getElementById("place-notes").textContent = place.notes;
    const galleryDiv = document.getElementById("place-gallery");

    place.gallery?.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${place.title} photo`;
    img.classList.add("gallery-img");
    galleryDiv.appendChild(img);
    img.addEventListener("click", () => openLightbox(src));

});
    // Lightbox functionality
    function openLightbox(src) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        lightboxImg.src = src;
        lightbox.classList.remove("hidden");
    }
  
 
  

  }

  function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
  }
  const place = getPlaceFromURL();
  renderPlaceContent(place);
  