/* Builds each page from data.js. Nothing to edit here. */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const page = document.body.dataset.page;
const total = Object.values(DATA.equipment).reduce((a, b) => a + b, 0);
const ph = (src, alt, label) => src
  ? `<div class="ph"><img src="${esc(src)}" alt="${esc(alt || "")}" loading="lazy"></div>`
  : `<div class="ph" role="img" aria-label="${esc(label)}">${esc(label)}</div>`;
const updated = new Date(DATA.lastUpdated + "T00:00:00").toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"});

const nav = [["index.html", "About", "about"], ["impact.html", "Impact Tracker", "impact"], ["reach.html", "Our Reach", "reach"]];
const head = `<header class="top"><div class="in bar"><a class="brand" href="index.html">The Next Innings</a><nav aria-label="Main">${nav.map(([h, t, k]) => `<a href="${h}"${k === page ? ' aria-current="page"' : ""}>${t}</a>`).join("")}</nav></div></header>`;
const foot = `<footer class="foot">The Next Innings · Founded by Siddhant Sanghvi · References available on request.</footer>`;

const hb = DATA.heroBackground || {};
const dk = hb.darken == null ? 0.55 : hb.darken;
const heroBg = hb.src ? ` style="background-image:linear-gradient(rgba(4,20,43,${dk}),rgba(4,20,43,${dk})),url('${esc(hb.src)}')"` : "";

const pages = {
  about: () => `
<section class="navy hero band"${heroBg}><div class="in">
  <div><p class="eb">Mumbai · Founded by Siddhant Sanghvi</p><h1>The Next Innings</h1><p class="tag">Giving every kid on the maidan a chance to play.</p></div>
  <div class="pf">${ph(DATA.heroPhoto.src, DATA.heroPhoto.alt, "Photo of Siddhant coming soon")}</div>
</div></section>
<section class="band c"><div class="in">
  <p class="eb">Chapter one</p><h2>My Story</h2>
  <div class="story">
    <p>I’ve played cricket for over twelve years, from local maidans to the Cricket Club of India, at the interschool and inter-club level. The game taught me persistence, perseverance and humility. Batting at 11:30 in Mumbai’s heat is a test in itself.</p>
    <p>On those same maidans I kept seeing something else: kids who loved cricket as much as I did, playing without pads, helmets, a proper bat, or any coaching. The only difference between them and me was access.</p>
  </div>
  <div class="mission"><p class="eb">Our mission</p><p>The Next Innings collects unused cricket equipment and puts it in the hands of children across Mumbai who have the talent and passion but not the gear, including the children of the groundsmen who maintain the grounds we play on.</p></div>
</div></section>`,

  impact: () => `
<section class="navy band c"><div class="in">
  <p class="eb">Impact tracker</p>
  <div class="pf w">${ph(DATA.equipmentPhoto.src, DATA.equipmentPhoto.alt, "Siddhant with the equipment · photo coming soon")}</div>
  <div class="big" data-n="${DATA.peopleHelped}">0</div><p class="lab">People helped</p>
</div></section>
<section class="band c"><div class="in">
  <p class="eb">Equipment</p><h2>What has been given</h2>
  <div class="grid">
    ${Object.entries(DATA.equipment).map(([k, v]) => `<div class="stat"><i>◆</i><b data-n="${v}">0</b><span>${esc(k)}</span></div>`).join("")}
    <div class="stat dk"><i>◆</i><b data-n="${total}">0</b><span>Items distributed</span></div>
  </div>
  <p class="upd">Last updated ${updated}</p>
</div></section>
<section class="sand band c"><div class="in">
  <p class="eb">Our donors</p><h2>Behind every donation</h2>
  <p class="intro">Every kit began with someone willing to hand over gear they no longer needed. Thank you for giving these children their start.</p>
  <div class="cards">${DATA.donors.length
    ? DATA.donors.map((d) => `<article class="card">${ph(d.src, d.alt || "Photo with " + d.name, "Photo coming soon")}<div class="b"><h3>${esc(d.name)}</h3><p>${esc(d.writeup || "")}</p></div></article>`).join("")
    : [1, 2, 3].map(() => `<article class="card">${ph("", "", "Photo coming soon")}</article>`).join("")}</div>
</div></section>`,

  reach: () => {
    const media = (s) => s.youtube
      ? `<div class="vid"><iframe src="https://www.youtube-nocookie.com/embed/${esc(s.youtube)}" title="Interview with ${esc(s.name)}" loading="lazy" allowfullscreen></iframe></div>`
      : s.video ? `<div class="vid"><video controls preload="metadata" src="${esc(s.video)}" title="Interview with ${esc(s.name)}"></video></div>`
      : ph("", "", "Video coming soon");
    const cards = DATA.stories.length
      ? DATA.stories.map((s) => `<article class="card s">${media(s)}<div class="b"><h3>${esc(s.name)}${s.age ? ", " + esc(s.age) : ""}</h3><div class="meta">${esc(s.area || "")}</div>${s.received ? `<div class="meta">Received: ${esc(s.received)}</div>` : ""}<p>${esc(s.writeup || "")}</p></div></article>`).join("")
      : [1, 2, 3].map(() => `<article class="card s"><span class="ex">Example</span>${ph("", "", "Video coming soon")}<div class="b"><h3>[First name], [Age]</h3><div class="meta">[Area]</div><div class="meta">Received: [Items]</div><p>[Short write-up about who they are]</p></div></article>`).join("");
    return `
<section class="navy band c"><div class="in">
  <p class="eb">Our reach</p><h1>Across Mumbai’s Maidans</h1>
  <div class="pan"><div><b data-n="${DATA.peopleHelped}">0</b><span>People helped</span></div><div><b data-n="${total}">0</b><span>Items given</span></div></div>
</div></section>
<section class="band c"><div class="in"><p class="eb">Recipients</p><h2>Story wall</h2><div class="cards">${cards}</div></div></section>
${DATA.handovers.length ? `<section class="sand band c"><div class="in"><p class="eb">At the handovers</p><h2>With the equipment</h2><div class="cards">${DATA.handovers.map((h) => `<figure>${ph(h.src, h.alt, "Photo coming soon")}${h.caption ? `<figcaption>${esc(h.caption)}</figcaption>` : ""}</figure>`).join("")}</div></div></section>` : ""}`;
  }
};

$("#app").innerHTML = head + "<main>" + pages[page]() + "</main>" + foot;

// Count up when scrolled into view (skipped if the visitor prefers reduced motion)
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fmt = (n) => Math.round(n).toLocaleString("en-IN");
const run = (el) => {
  const to = +el.dataset.n;
  if (still || !to) { el.textContent = fmt(to); return; }
  const t0 = performance.now();
  const tick = (t) => { const p = Math.min((t - t0) / 1400, 1); el.textContent = fmt(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
};
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), {threshold: .4});
document.querySelectorAll("[data-n]").forEach((el) => io.observe(el));
