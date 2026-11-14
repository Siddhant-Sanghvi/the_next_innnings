/* =====================================================================
   EDIT ONLY THIS FILE (data.js) to update the whole site.
   Photos: upload them into the "images" folder, then write the path,
   e.g. "images/me-batting.jpg". Keep commas and quotation marks intact.
   ===================================================================== */
const DATA = {
   lastUpdated: "2026-11-14",
  peopleHelped: 0,
  equipment: {
    "Bats": 10, "Pads": 5, "Gloves": 6, "Inner gloves": 2,
    "Wicketkeeping gloves": 1, "Abdomen guards": 11, "Thigh pads": 3,
    "Elbow guards": 2, "Helmets": 4, "Shoes & spikes": 7,
    "Kits": 2, "Kit bags": 2, "Stump sets": 2, "Other gear": 3,
    "Tennis balls": 75, "Leather balls": 3,
    "T-shirts": 5, "Caps": 2, "Bags of clothes": 2
  },

  heroBackground: { src: "images/image.jpg", darken: 0.55 },   // optional photo behind the About title. darken: 0 = no tint, 1 = fully dark (0.4 to 0.7 keeps the text readable)
  heroPhoto: { src: "images/me-hero.jpg", alt: "Siddhant with his cricket kit" },            // About page
  equipmentPhoto: { src: "images/equipment.jpg", alt: "Siddhant with the equipment" },         // top of Impact Tracker

  stories: [   // one entry per child: video on top, short write-up below. First names only; get a parent's or coach's permission first
    // { name: "Asha", age: 12, area: "Worli", received: "Bat, pads, helmet", youtube: "VIDEO_ID", writeup: "Who they are, in a few sentences." },
    // use  video: "videos/asha.mp4"  instead of youtube for a small file (GitHub web upload limit is 25 MB)
  ],
  donors: [    // photos with donors, each with a short thank-you
    // { src: "images/donor-1.jpg", name: "Donor name", alt: "Siddhant with [name]", writeup: "Thank-you note in a few sentences." },
  ],
  handovers: [ // optional: photos of you handing over equipment (section only shows if you add some)
    // { src: "images/handover-1.jpg", caption: "Handover at [ground]", alt: "Siddhant handing over a kit" },
  ]
};
