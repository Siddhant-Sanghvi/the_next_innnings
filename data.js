/* =====================================================================
   EDIT ONLY THIS FILE (data.js) to update the whole site.
   Photos: upload them into the "images" folder, then write the path,
   e.g. "images/me-batting.jpg". Keep commas and quotation marks intact.
   ===================================================================== */
const DATA = {
  lastUpdated: "2026-11-03",          // change this date whenever you update numbers
  peopleHelped: 0,                    // headline number
  equipment: {                        // item counts; the total adds itself up
    "Bats": 0, "Pads": 0, "Gloves": 0, "Inner gloves": 0,
    "Wicketkeeping gloves": 0, "Abdomen guards": 0, "Thigh pads": 0,
    "Helmets": 0, "Tennis balls": 0, "Leather balls": 0, "Clothes": 0
  },

  heroBackground: { src: "", darken: 0.55 },   // optional photo behind the About title. darken: 0 = no tint, 1 = fully dark (0.4 to 0.7 keeps the text readable)
  heroPhoto: { src: "", alt: "Siddhant with his cricket kit" },            // About page
  equipmentPhoto: { src: "", alt: "Siddhant with the equipment" },         // top of Impact Tracker

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
