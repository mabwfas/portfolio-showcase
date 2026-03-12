#!/usr/bin/env node
/**
 * build-cv.js — Generate a standalone CV HTML from JSON data + modular components
 *
 * Usage:
 *   node build-cv.js <person-slug>              Build CV for a person
 *   node build-cv.js <person-slug> --open       Build and open in browser
 *   node build-cv.js --list                     List available CV data files
 *
 * Example:
 *   node build-cv.js shreyansh-singh
 *   → Outputs: cv-output/shreyansh-singh-cv.html
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = __dirname;

// ── CLI ──
const args = process.argv.slice(2);

if (args.includes('--list')) {
  const dataDir = join(ROOT, 'cv-data');
  const files = readdirSync(dataDir).filter(f => f.endsWith('.json'));
  console.log('  Available CV data files:');
  files.forEach(f => console.log(`    ${f.replace('.json', '')}`));
  process.exit(0);
}

if (args.length < 1) {
  console.log('  Usage: node build-cv.js <person-slug> [--open]');
  console.log('         node build-cv.js --list');
  process.exit(1);
}

const slug = args[0];
const shouldOpen = args.includes('--open');
const dataFile = join(ROOT, 'cv-data', `${slug}.json`);

if (!existsSync(dataFile)) {
  console.error(`  Error: No data file found at cv-data/${slug}.json`);
  process.exit(1);
}

// ── Load data ──
const data = JSON.parse(readFileSync(dataFile, 'utf-8'));

// ── Load shared CSS ──
const css = readFileSync(join(ROOT, 'cv-modules', 'cv-styles.css'), 'utf-8');

// ── Load CV engine modules ──
// We inline the module functions here for static HTML generation
function renderAvatar(person) {
  return `<img src="${person.photo}" alt="${person.name}" style="width:90px;height:90px;border-radius:50%;object-fit:cover;margin:0 auto 16px;display:block;border:3px solid rgba(255,255,255,.15)" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="cv-avatar" style="display:none">${person.initials}</div>`;
}

function renderContact(person) {
  const c = person.contact;
  const svgs = {
    email: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    phone: `<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.33.03.72-.24 1.01l-2.2 2.2z"/></svg>`,
    location: `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
    website: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
    github: `<svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>`
  };
  const items = [];
  if (c.email) items.push(`<li>${svgs.email}<span>${c.email}</span></li>`);
  if (c.phone) items.push(`<li>${svgs.phone}<span>${c.phone}</span></li>`);
  if (c.location) items.push(`<li>${svgs.location}<span>${c.location}</span></li>`);
  if (c.linkedin) items.push(`<li>${svgs.linkedin}<span>${c.linkedin}</span></li>`);
  if (c.website) items.push(`<li>${svgs.website}<span>${c.website}</span></li>`);
  if (c.github) items.push(`<li>${svgs.github}<span>${c.github}</span></li>`);
  return `<h2>Contact</h2><ul class="cv-contact">${items.join('')}</ul>`;
}

function renderSkillBars(skills) {
  const bars = skills.map(s => `<li class="cv-sb-item"><div class="cv-sb-lbl"><span>${s.name}</span><span>${s.level}%</span></div><div class="cv-sb-track"><div class="cv-sb-fill" style="width:${s.level}%"></div></div></li>`).join('');
  return `<h2>Core Expertise</h2><ul class="cv-skill-bar" style="list-style:none">${bars}</ul>`;
}

function renderTechStack(techStack) {
  let html = '<h2>Tech Stack</h2>';
  for (const [cat, tags] of Object.entries(techStack)) {
    html += `<div class="cv-tag-group"><h3>${cat}</h3><div class="cv-tags">${tags.map(t => `<span class="cv-tag">${t}</span>`).join('')}</div></div>`;
  }
  return html;
}

function renderLanguages(langs) {
  return `<h2>Languages</h2>${langs.map(l => `<div class="cv-lang-item"><span>${l.name}</span><span>${l.level}</span></div>`).join('')}`;
}

function renderCerts(certs) {
  return `<h2>Certifications</h2>${certs.map(c => `<div class="cv-cert">${c.name}<br><span class="cv-cert-year">${c.issuer} &mdash; ${c.year}</span></div>`).join('')}`;
}

function renderGallery(portfolio) {
  const items = portfolio.map(p => `<div class="cv-gallery-item"><span style="font-size:24px">${p.icon}</span><div class="cv-gallery-label">${p.name}</div></div>`).join('');
  return `<h2>Portfolio</h2><div class="cv-gallery">${items}</div>`;
}

function renderHeader(person) {
  return `<header class="cv-header"><h1>${person.name}</h1><div class="cv-title">${person.title}</div><p class="cv-summary">${person.summary}</p></header>`;
}

function renderMetrics(metrics) {
  return `<div class="cv-metrics">${metrics.map(m => `<div class="cv-metric"><div class="cv-metric-val">${m.value}</div><div class="cv-metric-lbl">${m.label}</div></div>`).join('')}</div>`;
}

function renderWhyHire(items) {
  return `<section class="cv-section"><h2 class="cv-section-title">Why Hire Me</h2><div class="cv-why">${items.map(w => `<div class="cv-why-item"><div class="cv-why-icon">${w.icon}</div><div class="cv-why-title">${w.title}</div><div class="cv-why-desc">${w.desc}</div></div>`).join('')}</div></section>`;
}

function renderExperience(exp) {
  const entries = exp.map(e => `<div class="cv-exp"><div class="cv-exp-hdr"><span class="cv-exp-role">${e.role}</span><span class="cv-exp-date">${e.date}</span></div><div class="cv-exp-company">${e.company}</div><ul class="cv-exp-list">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul></div>`).join('');
  return `<section class="cv-section"><h2 class="cv-section-title">Professional Experience</h2>${entries}</section>`;
}

function renderProjects(projects, name) {
  const cards = projects.map(p => {
    let h = `<div class="cv-project"><div class="cv-proj-name">${p.name}</div><div class="cv-proj-tech">${p.tech}</div>`;
    if (p.client) h += `<div style="font-size:11px;color:#4f6ef7;font-weight:600;margin-bottom:3px">${p.client}</div>`;
    return h + `<div class="cv-proj-desc">${p.desc}</div></div>`;
  }).join('');
  return `<section class="cv-section"><h2 class="cv-section-title">Featured Projects by ${name}</h2>${cards}</section>`;
}

function renderMethodology(steps) {
  return `<section class="cv-section"><h2 class="cv-section-title">Methodology</h2><div class="cv-methodology">${steps.map(s => { const p = s.split(':'); return `<div class="cv-method-step"><strong>${p[0]}:</strong>${p.slice(1).join(':')}</div>`; }).join('')}</div></section>`;
}

function renderPubs(pubs) {
  return `<section class="cv-section"><h2 class="cv-section-title">Publications & Speaking</h2>${pubs.map(p => `<div class="cv-pub-item"><div class="cv-pub-title">${p.title}</div><div class="cv-pub-venue">${p.venue}</div></div>`).join('')}</section>`;
}

function renderPlatforms(platforms) {
  return `<section class="cv-section"><h2 class="cv-section-title">Verified Platforms</h2><div class="cv-platforms">${platforms.map(p => `<span class="cv-platform-tag">&#10003; ${p}</span>`).join('')}</div></section>`;
}

function renderEducation(edu) {
  return `<section class="cv-section"><h2 class="cv-section-title">Education</h2>${edu.map(e => `<div class="cv-edu"><div><div class="cv-edu-deg">${e.degree}</div><div class="cv-edu-school">${e.school}</div><div class="cv-edu-detail">${e.detail}</div></div><span class="cv-edu-year">${e.year}</span></div>`).join('')}</section>`;
}

function renderAwards(awards) {
  return `<section class="cv-section"><h2 class="cv-section-title">Awards & Recognition</h2><div class="cv-awards-grid">${awards.map(a => `<div class="cv-award"><strong>${a.title}</strong><span>${a.desc}</span></div>`).join('')}</div></section>`;
}

function renderTestimonials(items) {
  return `<section class="cv-section"><h2 class="cv-section-title">Fiverr Client Reviews</h2><div class="cv-testimonials">${items.map(t => `<div class="cv-testimonial"><div class="cv-testimonial-text">"${t.text}"</div><div class="cv-testimonial-author">&mdash; ${t.author}</div></div>`).join('')}</div></section>`;
}

// ── Assemble ──
console.log(`  Building CV: ${data.person.name}`);

const sidebar = [
  renderAvatar(data.person),
  renderContact(data.person),
  renderSkillBars(data.skills),
  renderTechStack(data.techStack),
  renderLanguages(data.languages),
  renderCerts(data.certifications),
  renderGallery(data.portfolio)
].join('\n');

const main = [
  renderHeader(data.person),
  renderMetrics(data.person.metrics),
  renderWhyHire(data.whyHire),
  renderExperience(data.experience),
  renderProjects(data.projects, data.person.name),
  renderMethodology(data.methodology),
  renderPubs(data.publications),
  renderPlatforms(data.platforms),
  renderEducation(data.education),
  renderAwards(data.awards),
  renderTestimonials(data.testimonials)
].join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.person.name} — CV</title>
<style>
${css}
</style>
</head>
<body>
<div class="cv-toolbar">
  <a href="/" class="btn-back">&#8592; Portfolio</a>
  <button class="btn-print" onclick="window.print()">&#128438; Print / PDF</button>
</div>
<div class="cv-page">
  <aside class="cv-sidebar">
${sidebar}
  </aside>
  <main class="cv-main">
${main}
  </main>
</div>
</body>
</html>`;

// ── Output ──
const outDir = join(ROOT, 'cv-output');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, `${slug}-cv.html`);
writeFileSync(outFile, html, 'utf-8');
console.log(`  Output: ${outFile}`);
console.log(`  Done!`);

if (shouldOpen) {
  try { execSync(`start "" "${outFile}"`, { stdio: 'ignore' }); } catch {}
}
