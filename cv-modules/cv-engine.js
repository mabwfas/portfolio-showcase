/**
 * CV Engine — Modular CV generator
 * Renders a complete CV from JSON data using reusable module functions.
 * Each module is independent and can be included/excluded.
 */

const CVModules = {

  /* ── SIDEBAR MODULES ── */

  avatar(person) {
    return `<img src="${person.photo}" alt="${person.name}" style="width:90px;height:90px;border-radius:50%;object-fit:cover;margin:0 auto 16px;display:block;border:3px solid rgba(255,255,255,.15)" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="cv-avatar" style="display:none">${person.initials}</div>`;
  },

  contact(person) {
    const c = person.contact;
    const items = [];
    if (c.email) items.push(`<li><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg><span>${c.email}</span></li>`);
    if (c.phone) items.push(`<li><svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.33.03.72-.24 1.01l-2.2 2.2z"/></svg><span>${c.phone}</span></li>`);
    if (c.location) items.push(`<li><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg><span>${c.location}</span></li>`);
    if (c.linkedin) items.push(`<li><svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg><span>${c.linkedin}</span></li>`);
    if (c.website) items.push(`<li><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg><span>${c.website}</span></li>`);
    if (c.github) items.push(`<li><svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg><span>${c.github}</span></li>`);
    return `<h2>Contact</h2><ul class="cv-contact">${items.join('')}</ul>`;
  },

  skillBars(skills) {
    const bars = skills.map(s => `<li class="cv-sb-item"><div class="cv-sb-lbl"><span>${s.name}</span><span>${s.level}%</span></div><div class="cv-sb-track"><div class="cv-sb-fill" style="width:${s.level}%"></div></div></li>`).join('');
    return `<h2>Core Expertise</h2><ul class="cv-skill-bar" style="list-style:none">${bars}</ul>`;
  },

  techStackTags(techStack) {
    let html = '<h2>Tech Stack</h2>';
    for (const [category, tags] of Object.entries(techStack)) {
      const tagHtml = tags.map(t => `<span class="cv-tag">${t}</span>`).join('');
      html += `<div class="cv-tag-group"><h3>${category}</h3><div class="cv-tags">${tagHtml}</div></div>`;
    }
    return html;
  },

  languagesList(languages) {
    const items = languages.map(l => `<div class="cv-lang-item"><span>${l.name}</span><span>${l.level}</span></div>`).join('');
    return `<h2>Languages</h2>${items}`;
  },

  certificationsList(certs) {
    const items = certs.map(c => `<div class="cv-cert">${c.name}<br><span class="cv-cert-year">${c.issuer} &mdash; ${c.year}</span></div>`).join('');
    return `<h2>Certifications</h2>${items}`;
  },

  portfolioGallery(portfolio) {
    const items = portfolio.map(p => `<div class="cv-gallery-item"><span style="font-size:24px">${p.icon}</span><div class="cv-gallery-label">${p.name}</div></div>`).join('');
    return `<h2>Portfolio</h2><div class="cv-gallery">${items}</div>`;
  },

  /* ── MAIN CONTENT MODULES ── */

  header(person) {
    return `<header class="cv-header"><h1>${person.name}</h1><div class="cv-title">${person.title}</div><p class="cv-summary">${person.summary}</p></header>`;
  },

  metricsGrid(metrics) {
    const items = metrics.map(m => `<div class="cv-metric"><div class="cv-metric-val">${m.value}</div><div class="cv-metric-lbl">${m.label}</div></div>`).join('');
    return `<div class="cv-metrics">${items}</div>`;
  },

  whyHireSection(whyHire) {
    const items = whyHire.map(w => `<div class="cv-why-item"><div class="cv-why-icon">${w.icon}</div><div class="cv-why-title">${w.title}</div><div class="cv-why-desc">${w.desc}</div></div>`).join('');
    return `<section class="cv-section"><h2 class="cv-section-title">Why Hire Me</h2><div class="cv-why">${items}</div></section>`;
  },

  experienceSection(experience) {
    const entries = experience.map(e => {
      const bullets = e.bullets.map(b => `<li>${b}</li>`).join('');
      return `<div class="cv-exp"><div class="cv-exp-hdr"><span class="cv-exp-role">${e.role}</span><span class="cv-exp-date">${e.date}</span></div><div class="cv-exp-company">${e.company}</div><ul class="cv-exp-list">${bullets}</ul></div>`;
    }).join('');
    return `<section class="cv-section"><h2 class="cv-section-title">Professional Experience</h2>${entries}</section>`;
  },

  projectsSection(projects, personName) {
    const cards = projects.map(p => {
      let html = `<div class="cv-project"><div class="cv-proj-name">${p.name}</div><div class="cv-proj-tech">${p.tech}</div>`;
      if (p.client) html += `<div style="font-size:11px;color:#4f6ef7;font-weight:600;margin-bottom:3px">${p.client}</div>`;
      html += `<div class="cv-proj-desc">${p.desc}</div></div>`;
      return html;
    }).join('');
    return `<section class="cv-section"><h2 class="cv-section-title">Featured Projects by ${personName}</h2>${cards}</section>`;
  },

  methodologySection(steps) {
    const items = steps.map(s => {
      const parts = s.split(':');
      return `<div class="cv-method-step"><strong>${parts[0]}:</strong>${parts.slice(1).join(':')}</div>`;
    }).join('');
    return `<section class="cv-section"><h2 class="cv-section-title">Methodology</h2><div class="cv-methodology">${items}</div></section>`;
  },

  publicationsSection(pubs) {
    const items = pubs.map(p => `<div class="cv-pub-item"><div class="cv-pub-title">${p.title}</div><div class="cv-pub-venue">${p.venue}</div></div>`).join('');
    return `<section class="cv-section"><h2 class="cv-section-title">Publications & Speaking</h2>${items}</section>`;
  },

  platformsSection(platforms) {
    const tags = platforms.map(p => `<span class="cv-platform-tag">&#10003; ${p}</span>`).join('');
    return `<section class="cv-section"><h2 class="cv-section-title">Verified Platforms</h2><div class="cv-platforms">${tags}</div></section>`;
  },

  educationSection(education) {
    const entries = education.map(e => `<div class="cv-edu"><div><div class="cv-edu-deg">${e.degree}</div><div class="cv-edu-school">${e.school}</div><div class="cv-edu-detail">${e.detail}</div></div><span class="cv-edu-year">${e.year}</span></div>`).join('');
    return `<section class="cv-section"><h2 class="cv-section-title">Education</h2>${entries}</section>`;
  },

  awardsSection(awards) {
    const cards = awards.map(a => `<div class="cv-award"><strong>${a.title}</strong><span>${a.desc}</span></div>`).join('');
    return `<section class="cv-section"><h2 class="cv-section-title">Awards & Recognition</h2><div class="cv-awards-grid">${cards}</div></section>`;
  },

  testimonialsSection(testimonials) {
    const items = testimonials.map(t => `<div class="cv-testimonial"><div class="cv-testimonial-text">"${t.text}"</div><div class="cv-testimonial-author">&mdash; ${t.author}</div></div>`).join('');
    return `<section class="cv-section"><h2 class="cv-section-title">Fiverr Client Reviews</h2><div class="cv-testimonials">${items}</div></section>`;
  }
};

/**
 * Assemble a full CV from data + selected modules.
 * @param {Object} data — Full CV JSON data
 * @param {Object} options — { modules: [...list of module names to include] }
 * @returns {string} Complete HTML string
 */
function generateCV(data, options = {}) {
  const allSidebarModules = ['avatar', 'contact', 'skillBars', 'techStackTags', 'languagesList', 'certificationsList', 'portfolioGallery'];
  const allMainModules = ['header', 'metricsGrid', 'whyHireSection', 'experienceSection', 'projectsSection', 'methodologySection', 'publicationsSection', 'platformsSection', 'educationSection', 'awardsSection', 'testimonialsSection'];

  const sidebarModules = options.sidebar || allSidebarModules;
  const mainModules = options.main || allMainModules;

  // Build sidebar
  let sidebar = '';
  for (const mod of sidebarModules) {
    switch (mod) {
      case 'avatar': sidebar += CVModules.avatar(data.person); break;
      case 'contact': sidebar += CVModules.contact(data.person); break;
      case 'skillBars': sidebar += CVModules.skillBars(data.skills); break;
      case 'techStackTags': sidebar += CVModules.techStackTags(data.techStack); break;
      case 'languagesList': sidebar += CVModules.languagesList(data.languages); break;
      case 'certificationsList': sidebar += CVModules.certificationsList(data.certifications); break;
      case 'portfolioGallery': sidebar += CVModules.portfolioGallery(data.portfolio); break;
    }
  }

  // Build main content
  let main = '';
  for (const mod of mainModules) {
    switch (mod) {
      case 'header': main += CVModules.header(data.person); break;
      case 'metricsGrid': main += CVModules.metricsGrid(data.person.metrics); break;
      case 'whyHireSection': main += CVModules.whyHireSection(data.whyHire); break;
      case 'experienceSection': main += CVModules.experienceSection(data.experience); break;
      case 'projectsSection': main += CVModules.projectsSection(data.projects, data.person.name); break;
      case 'methodologySection': main += CVModules.methodologySection(data.methodology); break;
      case 'publicationsSection': main += CVModules.publicationsSection(data.publications); break;
      case 'platformsSection': main += CVModules.platformsSection(data.platforms); break;
      case 'educationSection': main += CVModules.educationSection(data.education); break;
      case 'awardsSection': main += CVModules.awardsSection(data.awards); break;
      case 'testimonialsSection': main += CVModules.testimonialsSection(data.testimonials); break;
    }
  }

  return { sidebar, main };
}

// Export for Node.js build script
if (typeof module !== 'undefined') {
  module.exports = { CVModules, generateCV };
}
