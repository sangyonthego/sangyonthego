const travelData = {
    bangkok: {
      title: "Bangkok",
      tagline: "Floating markets, golden temples, and vibrant nights",
      image: "/assets/media/bangkok/bangkok.jpg",
      intro: "Bangkok greets you with a whirlwind of tuk-tuks, temple bells, and sizzling street food...",
      experiences: [
        "🕌 Grand Palace & Emerald Buddha",
        "🍜 Chatuchak Weekend Market",
        "🛶 Damnoen Saduak Floating Market",
        "🌇 Rooftop sunset at Vertigo Bar"
      ],
      notes: "Best explored on foot or by boat... mango sticky rice is a must!",
      gallery: [
        "/assets/media/bangkok/1.jpg",
        "/assets/media/bangkok/2.jpg",
        "/assets/media/bangkok/3.jpg",
        "/assets/media/bangkok/4.jpg",
        "/assets/media/bangkok/5.jpg",
        "/assets/media/bangkok/6.jpg",
        "/assets/media/bangkok/7.jpg",
        "/assets/media/bangkok/8.jpg",
        "/assets/media/bangkok/9.jpg",
        "/assets/media/bangkok/10.jpg",
        "/assets/media/bangkok/11.jpg",
        "/assets/media/bangkok/12.jpg",
        "/assets/media/bangkok/13.jpg",
        "/assets/media/bangkok/14.jpg",
        "/assets/media/bangkok/15.jpg"
      ]
    },
    phuket: {
      title: "Phuket",
      tagline: "Island vibes, turquoise waves, and slow sunsets",
      image: "/assets/media/phuket/phuket.jpg",
      intro: "Phuket welcomed me with salty air and golden sands...",
      experiences: [
        "🌅 Sunset at Promthep Cape",
        "🐘 Ethical elephant sanctuary visit",
        "🛥️ Island-hopping to Phi Phi & James Bond Island",
        "🥥 Chillin’ with a coconut on Kata Beach"
      ],
      notes: "Rent a scooter, pack your sunscreen... Phuket is freedom!",
      gallery: [
        "/assets/media/phuket/1.jpg",
        "/assets/media/phuket/2.jpg",
        "/assets/media/phuket/3.jpg",
        "/assets/media/phuket/4.jpg",
        "/assets/media/phuket/5.jpg",
        "/assets/media/phuket/6.jpg",
        "/assets/media/phuket/7.jpg",
        "/assets/media/phuket/8.jpg",
        "/assets/media/phuket/9.jpg",
      ]
    },
    coorg: {
        title: "Coorg",
        tagline: "Misty mornings, coffee plantations, and soul-soothing greens 🌿",
        image: "/assets/media/coorg/coorg.jpg", // hero image
        intro: "Tucked away in the Western Ghats, Coorg feels like nature's warm embrace all wrapped in mist, with the scent of coffee and cardamom in the air.",
        highlights:"https://www.youtube.com/embed/oZQGw_6LWYc?si=eMGy993nXxGL-VRd",
        experiences: [
          "☕ Sipping freshly brewed coffee at a plantation stay",
          "🌿 Trekking through lush hills to Tadiandamol Peak",
          "🐘 Visiting Dubare Elephant Camp",
          "🕌 Exploring the Tibetan vibe at Namdroling Monastery",
          "💦 Chillin’ by Abbey Falls"
        ],
        notes: "Coorg is best enjoyed slowly take long walks, talk to locals, and don’t forget to try pandi curry if you're non-veg!",
        gallery: [
          "/assets/media/coorg/1.jpg",
          "/assets/media/coorg/2.jpg",
          "/assets/media/coorg/3.jpg",

        ]
      },
      kochi: {
        title: "Kochi",
        tagline: "Where the sea meets stories, and time slows down",
        image: "/assets/media/kochi/kochi.jpg", 
        intro: "Fort Kochi is a mellow mix of Portuguese charm, Dutch lanes, and Kerala soul where every sunset has a story and every wall might be a canvas.",
        experiences: [
          "🎣 Watching the iconic Chinese fishing nets sway at dusk",
          "🎨 Getting lost in vibrant street art and galleries",
          "☕ Sipping cold brew in a quiet courtyard café",
          "🚲 Cycling through colonial streets and spice-scented markets",
          "🕌 Visiting St. Francis Church and the Dutch Cemetery"
        ],
        notes: "Fort Kochi invites you to take your time walk slow, eat well, and let the sea breeze guide your day. Don’t miss trying fresh seafood at the local stalls, and if you're lucky, you'll catch a traditional Kathakali performance too!",
        gallery: [
            "/assets/media/kochi/1.jpg",
            "/assets/media/kochi/2.jpg",
            "/assets/media/kochi/3.jpg",
            "/assets/media/kochi/4.jpg",
            "/assets/media/kochi/5.jpg",
            "/assets/media/kochi/6.jpg",
            "/assets/media/kochi/7.jpg",
            "/assets/media/kochi/8.jpg",
            "/assets/media/kochi/9.jpg",
            "/assets/media/kochi/10.jpg",
            "/assets/media/kochi/11.jpg",
            "/assets/media/kochi/12.jpg",

        ]
      },
      mumbai: {
        title: "Mumbai",
        tagline: "Where colonial charm meets coastal buzz",
        image: "/assets/media/mumbai/mumbai.jpg", // cover image
        intro: "South Mumbai feels like a movie set grand architecture, sea-facing promenades, and streets that hum with history and honking taxis.",
        experiences: [
          "🏛️ Strolling past Gothic and Art Deco buildings along Marine Drive",
          "🕌 Visiting the iconic Gateway of India at sunrise",
          "☕ Enjoying Irani chai at a vintage café that hasn’t changed in decades",
          "🎨 Getting lost inside the grand halls of the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
          "🛍️ Window shopping through Colaba Causeway’s quirky shops and book stalls"
        ],
        notes: "South Mumbai is elegance, energy, and edge all wrapped up in coastal breezes and the scent of roasted peanuts on the street. Whether you're people-watching on the steps of Asiatic Library or catching a ferry from the Gateway, this part of the city is a living, breathing character in itself.",
        gallery: [
            "/assets/media/mumbai/1.jpg",
            "/assets/media/mumbai/2.jpg",
            "/assets/media/mumbai/3.jpg",
            "/assets/media/mumbai/4.jpg",
            "/assets/media/mumbai/5.jpg",
            "/assets/media/mumbai/6.jpg",
            "/assets/media/mumbai/7.jpg",
            "/assets/media/mumbai/8.jpg",
            "/assets/media/mumbai/9.jpg",
        ]
      },

      delhi: {
        title: "Delhi",
        tagline: "A whirlwind of history, hustle, and heavenly food",
        image: "/assets/media/delhi/delhi.jpg",
        intro: "From centuries-old forts to buzzing street markets, Delhi is a delicious clash of the past and present and you’re always just a rickshaw ride away from something unforgettable.",
        experiences: [
          "🏰 Exploring the mighty Red Fort and wandering through Jama Masjid",
          "🥘 Tasting chaat at Chandni Chowk spicy, messy, and so worth it",
          "🌳 Strolling the calm gardens around Humayun’s Tomb",
          "📸 Taking postcard-worthy shots at India Gate and Rashtrapati Bhavan",
          "🛕 Discovering spiritual peace at Lotus Temple and Akshardham"
        ],
        notes: "Delhi is a city of contrasts where Mughal arches meet metro lines, and every street has a story (and a snack). Come with curiosity, stay for the culture, and always carry tissues the food’s got bite!",
        gallery: [
            "/assets/media/delhi/1.jpg",
            "/assets/media/delhi/2.jpg",
            "/assets/media/delhi/3.jpg",
            "/assets/media/delhi/4.jpg",
            "/assets/media/delhi/5.jpg",
            "/assets/media/delhi/6.jpg",
            "/assets/media/delhi/7.jpg",
            "/assets/media/delhi/8.jpg",
            "/assets/media/delhi/9.jpg",
        ]
      },
      kozhikode: {
        title: "Kozhikode",
        tagline: "A city that serves soul in every bite",
        image: "/assets/media/kozhikode/kozhikode.jpg",
        intro: "Known for its legendary cuisine, Kozhikode (Calicut) is a city where every street corner is a snack stop and every meal is a celebration.",
        experiences: [
          "🍛 Digging into Kozhikode Biryani spiced just right and full of history",
          "🥘 Savoring Thalassery-style meals on a banana leaf",
          "🍢 Sampling snacks at SM Street from banana chips to beef cutlets",
          "🍮 Trying warm, melt-in-the-mouth Kozhikode Halwa in every color",
          "🧉 Washing it all down with sulaimani chai as the sun sets by the beach"
        ],
        notes: "Kozhikode feeds both your stomach and your soul. Whether it’s a busy street-side stall or a quiet family kitchen, the city’s love language is food humble, hearty, and unforgettable.",
        gallery: [
            "/assets/media/kozhikode/1.jpg",
            "/assets/media/kozhikode/2.jpg",
            "/assets/media/kozhikode/3.jpg",
            "/assets/media/kozhikode/4.jpg",
            "/assets/media/kozhikode/5.jpg",
            "/assets/media/kozhikode/6.jpg",
            "/assets/media/kozhikode/7.jpg",
            "/assets/media/kozhikode/8.jpg",
            "/assets/media/kozhikode/9.jpg",
            "/assets/media/kozhikode/10.jpg",
            "/assets/media/kozhikode/11.jpg",
            "/assets/media/kozhikode/12.jpg",
        ]
      },
      munnar: {
        title: "Munnar",
        tagline: "Rolling hills, misty mornings, and the scent of tea",
        image: "/assets/media/munnar/munnar.jpg",
        intro: "Nestled in the Western Ghats, Munnar is a refreshing escape where time slows down and nature takes the lead. Every bend in the road opens to a postcard view.",
        experiences: [
          "🍃 Walking through endless tea plantations that stretch into the clouds",
          "📸 Watching the sunrise at Top Station with the valley wrapped in mist",
          "🌼 Visiting the rare Neelakurinji blooms (if you're lucky!)",
          "🐘 Exploring Eravikulam National Park maybe spot a Nilgiri Tahr",
          "☕ Sipping fresh-brewed tea at a colonial-era estate café"
        ],
        notes: "Munnar is a gentle, green reminder to breathe deeply and slow down. Whether you’re hiking a trail or sipping tea by a window, it’s a place that soothes every sense.",
        gallery: [
            "/assets/media/munnar/1.jpg",
            "/assets/media/munnar/2.jpg",
            "/assets/media/munnar/3.jpg",
            "/assets/media/munnar/4.jpg",
            "/assets/media/munnar/5.jpg",
            "/assets/media/munnar/6.jpg",
            "/assets/media/munnar/7.jpg",
            "/assets/media/munnar/8.jpg",
            "/assets/media/munnar/9.jpg",
            "/assets/media/munnar/10.jpg",
            "/assets/media/munnar/11.jpg",
            "/assets/media/munnar/12.jpg",
            "/assets/media/munnar/13.jpg",
        ]
      },
      panjim: {
        title: "Panjim",
        tagline: "Colonial charm by the river, wrapped in sunshine and color",
        image: "/assets/media/panjim/panjim.jpg",
        intro: "The capital of Goa, Panjim is a fusion of Portuguese heritage and laid-back coastal living. With its candy-colored houses, riverside promenades, and soulful cuisine, it's a vibrant window into Goa’s past and present.",
        experiences: [
          "🎨 Strolling through Fontainhas, the Latin Quarter, with its art-lined walls and colonial balconies",
          "⛪ Visiting the iconic Our Lady of the Immaculate Conception Church a whitewashed beauty on a hill",
          "🌅 Watching the sun dip behind the Mandovi River with a cup of local chai",
          "🍛 Sampling authentic Goan fish curry at a family-run tavern",
          "🚤 Taking a ferry ride from Panjim jetty for a breezy view of the city from the water"
        ],
        notes: "Panjim invites you to slow down and soak in its old-world charm where every corner tells a story and every flavor lingers just a little longer.",
        gallery: [
          "/assets/media/panjim/1.jpg",
          "/assets/media/panjim/2.jpg",
          "/assets/media/panjim/3.jpg",
          "/assets/media/panjim/4.jpg",
          "/assets/media/panjim/5.jpg",
          "/assets/media/panjim/6.jpg",
          "/assets/media/panjim/7.jpg",
          "/assets/media/panjim/8.jpg",
          "/assets/media/panjim/9.jpg",
          "/assets/media/panjim/10.jpg",
          "/assets/media/panjim/11.jpg",
          "/assets/media/panjim/12.jpg",

        ]
      } 
      
      
      
      
  };

  let currentGallery = [];
  let currentIndex = 0;
  
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
    if(place.highlights){
    document.getElementById("highlights").innerHTML = `<iframe width="100%" height="400px" src=`+place.highlights+` title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
document.getElementById("highlight").style.display="block";
   }
  
    const expList = document.getElementById("place-experiences");
    place.experiences.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      expList.appendChild(li);
    });

    
    document.getElementById("place-notes").textContent = place.notes;
    const galleryDiv = document.getElementById("place-gallery");
    
    currentGallery = place.gallery;

    place.gallery?.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${place.title} photo`;
    img.classList.add("gallery-img");
    img.addEventListener("click", () => openLightbox(src));
    galleryDiv.appendChild(img);

});
    // Lightbox functionality
    function openLightbox(src) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        currentIndex = currentGallery.indexOf(src);
        lightboxImg.src = src;
        lightbox.classList.remove("hidden");
      }
      
  
 
  

  }

  function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
  }

  function navigateGallery(direction) {
    currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
    console.log(currentIndex);
    document.getElementById("lightbox-img").src = currentGallery[currentIndex];
  }
  
  const place = getPlaceFromURL();
  renderPlaceContent(place);
  