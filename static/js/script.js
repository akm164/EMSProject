// ===================================
// This is my HOMEPAGE EVENTS SECTION
// ===================================
const homepageEvents = [
  {
    title: "Taylor Swift - Eras Tour",
    image: "/static/images/taylor.jpg",
    generalPrice: "$120",
    vipPrice: "$250"
  },
  {
    title: "AFL Grand Final 2025",
    image: "/static/images/afl.jpg",
    generalPrice: "$89",
    vipPrice: "$150"
  },
  {
    title: "Coldplay Live in Sydney",
    image: "/static/images/coldplay.jpg",
    generalPrice: "$100",
    vipPrice: "$220"
  },
  {
    title: "NBA All-Star Game",
    image: "/static/images/allstar.jpg",
    generalPrice: "$110",
    vipPrice: "$190"
  },
  {
    title: "Ed Sheeran Tour",
    image: "/static/images/ed.jpg",
    generalPrice: "$90",
    vipPrice: "$180"
  }
];

function loadHomepageEvents() {
  const container = document.getElementById('eventsContainer');
  if (!container) return;

  homepageEvents.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" style="width:100%; height:180px; object-fit:cover; border-radius:10px;">
      <div class="title" style="margin-top:10px; font-weight:bold;">${event.title}</div>
      <div style="margin: 10px 0;">
        <button class="btn btn-primary" onclick="showModal('${event.title}', 'General Ticket - ${event.generalPrice}')">Buy General Ticket</button>
        <button class="btn btn-secondary" onclick="showModal('${event.title}', 'VIP Ticket - ${event.vipPrice}')">Buy VIP Ticket</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// =================================
// This is my SPORTS EVENTS SECTION
// =================================
const sportsEvents = [
  {
    title: "AFL Grand Final 2025",
    generalPrice: "$89",
    vipPrice: "$150",
    image: "/static/images/afl.jpg"
  },
  {
    title: "NRL Grand Final 2025",
    generalPrice: "$79",
    vipPrice: "$140",
    image: "/static/images/nrl.jpg"
  },
  {
    title: "Sydney Tennis Classic",
    generalPrice: "$65",
    vipPrice: "$120",
    image: "/static/images/tennis.jpg"
  },
  {
    title: "Melbourne Cup Carnival",
    generalPrice: "$95",
    vipPrice: "$160",
    image: "/static/images/melbourne.jpg"
  },
  {
    title: "Australian Open 2025",
    generalPrice: "$110",
    vipPrice: "$200",
    image: "/static/images/ausopen.jpg"
  },
  {
    title: "BBL: Sixers vs Stars",
    generalPrice: "$55",
    vipPrice: "$90",
    image: "/static/images/bbl.jpg"
  },
  {
    title: "Socceroos Qualifier",
    generalPrice: "$70",
    vipPrice: "$130",
    image: "/static/images/socceroos.jpg"
  },
  {
    title: "Super Netball Final",
    generalPrice: "$60",
    vipPrice: "$100",
    image: "/static/images/netball.jpg"
  },
  {
    title: "Sydney Running Festival",
    generalPrice: "$45",
    vipPrice: "$75",
    image: "/static/images/running.jpg"
  },
  {
    title: "F1 Australian Grand Prix",
    generalPrice: "$130",
    vipPrice: "$250",
    image: "/static/images/f1.jpg"
  }
];

function loadSportsEvents() {
  const container = document.getElementById('eventContainer');
  if (!container) return;

  sportsEvents.forEach(event => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" style="width:100%; height:200px; object-fit:cover; border-radius:10px;">
      <div class="title" style="font-weight:bold; font-size:18px; margin-top:10px;">${event.title}</div>
      <div style="margin: 10px 0;">General: ${event.generalPrice} | VIP: ${event.vipPrice}</div>
      <button class="btn btn-primary me-2" onclick="showModal('${event.title}', 'General Ticket - ${event.generalPrice}')">Buy General Ticket</button>
      <button class="btn btn-success" onclick="showModal('${event.title}', 'VIP Ticket - ${event.vipPrice}')">Buy VIP Ticket</button>
    `;

    col.appendChild(card);
    container.appendChild(col);
  });
};


// =====================================
// This is the UNIVERSAL MODAL HANDLERS
// =====================================
function showModal(title, price) {
  const modal = document.getElementById('eventModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');

  if (modal && modalTitle && modalPrice) {
    modalTitle.innerText = title;
    modalPrice.innerText = `Selected: ${price}`;
    modal.style.display = 'flex';
  }
}

function closeModal() {
  const modal = document.getElementById('eventModal');
  if (modal) modal.style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('eventModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// =================================
// Thus is my CONCERT EVENTS Section
// =================================
const concertEvents = [
  {
    title: "Taylor Swift - Eras Tour",
    location: "Sydney - Nov 15, 2025",
    generalPrice: "$120",
    vipPrice: "$250",
    image: "static/images/taylor.jpg"
  },
  {
    title: "Coldplay - Music of the Spheres",
    location: "Melbourne - Dec 2, 2025",
    generalPrice: "$100",
    vipPrice: "$220",
    image: "static/images/coldplay.jpg"
  },
  {
    title: "Ed Sheeran Live",
    location: "Brisbane - Nov 28, 2025",
    generalPrice: "$90",
    vipPrice: "$180",
    image: "static/images/ed.jpg"
  },
  {
    title: "The Weeknd - After Hours",
    location: "Perth - Dec 10, 2025",
    generalPrice: "$110",
    vipPrice: "$230",
    image: "static/images/weeknd.jpg"
  },
  {
    title: "Billie Eilish World Tour",
    location: "Adelaide - Nov 20, 2025",
    generalPrice: "$95",
    vipPrice: "$210",
    image: "static/images/billie.jpg"
  },
  {
    title: "Adele - One Night Only",
    location: "Sydney - Dec 5, 2025",
    generalPrice: "$130",
    vipPrice: "$270",
    image: "static/images/adele.jpg"
  },
  {
    title: "Bruno Mars Live",
    location: "Melbourne - Nov 30, 2025",
    generalPrice: "$100",
    vipPrice: "$200",
    image: "static/images/bruno.jpg"
  },
  {
    title: "Beyoncé Renaissance Tour",
    location: "Brisbane - Dec 18, 2025",
    generalPrice: "$115",
    vipPrice: "$240",
    image: "static/images/beyonce.jpg"
  },
  {
    title: "Justin Bieber - Justice Tour",
    location: "Adelaide - Nov 22, 2025",
    generalPrice: "$85",
    vipPrice: "$190",
    image: "static/images/bieber.jpg"
  },
  {
    title: "Harry Styles - Love on Tour",
    location: "Perth - Dec 20, 2025",
    generalPrice: "$105",
    vipPrice: "$225",
    image: "static/images/harry.jpg"
  }
];

function loadConcertEvents() {
  const container = document.getElementById('concertsContainer');
  if (!container) return;

  concertEvents.forEach(event => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}" style="width:100%; height:200px; object-fit:cover; border-radius:10px;">
      <div class="title" style="font-weight:bold; font-size:18px; margin-top:10px;">${event.title}</div>
      <div style="margin:5px 0;">${event.location}</div>
      <div style="margin-bottom:10px;">General: ${event.generalPrice} | VIP: ${event.vipPrice}</div>
      <button class="btn btn-primary me-2" onclick="showModal('${event.title}', 'General Ticket - ${event.generalPrice}')">Buy General Ticket</button>
      <button class="btn btn-secondary mt-2" onclick="showModal('${event.title}', 'VIP Ticket - ${event.vipPrice}')">Buy VIP Ticket</button>
    `;

    col.appendChild(card);
    container.appendChild(col);
  });
}


// ==============================================
// This is where i have Combined onload Execution
// ==============================================
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById('eventsContainer')) {
    loadHomepageEvents();
  }

  if (document.getElementById('eventContainer')) {
    loadSportsEvents();
  }

  if (document.getElementById('concertsContainer')) {
    loadConcertEvents();
  }
});

// ============
// SIGNUP PAGE
// =============
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');

  if (!form) {
    console.error('registration-form not found');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!document.getElementById('terms').checked) {
      alert('You must agree to the terms!');
      return;
    }

    window.location.href = "index.html";
  });
});
