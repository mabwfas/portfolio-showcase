/**
 * Website Generator — Generates a complete portfolio + CV website
 * from person + category data. Outputs self-contained HTML files.
 */

/* ═══════════════════════════════════════════════════════
   CURATED PROJECT IMAGES (real Unsplash stock photos)
   ═══════════════════════════════════════════════════════ */
const SITE_IMAGES = {
  'mobile-app-dev':   { hero:'photo-1512941937669-90a1b58e7e9c', projects:['photo-1551650975-87deedd944c3','photo-1526498460520-4c246339dccb','photo-1555774698-0b77e0d5fac6'] },
  'web-dev':          { hero:'photo-1461749280684-dccba630e2f6', projects:['photo-1460925895917-afdab827c52f','photo-1547658719-da2b51169166','photo-1498050108023-c5249f4df085'] },
  'ai-development':   { hero:'photo-1677442136019-21780ecad995', projects:['photo-1620712943543-bcc4688e7485','photo-1551288049-bebda4e38f71','photo-1504868584819-f8e8b4b6d7e3'] },
  'video-editing':    { hero:'photo-1574717024653-61fd2cf4d44d', projects:['photo-1492691527719-9d1e07e534b4','photo-1516035069371-29a1b244cc32','photo-1478720568477-152d9b164e26'] },
  'logo-design':      { hero:'photo-1626785774573-4b799315345d', projects:['photo-1561070791-2526d30994b5','photo-1558655146-9f40138edfeb','photo-1572044162444-ad60f128bdea'] },
  'copywriting':      { hero:'photo-1455390582262-044cdead277a', projects:['photo-1486312338219-ce68d2c6f44d','photo-1519337265831-281ec6cc8514','photo-1434030216411-0b793f4b4173'] },
  'seo':              { hero:'photo-1432888498266-38ffec3eaf0a', projects:['photo-1562577309-4932fdd64cd1','photo-1460925895917-afdab827c52f','photo-1551288049-bebda4e38f71'] },
  'social-media':     { hero:'photo-1611162617474-5b21e879e113', projects:['photo-1563986768609-322da13575f2','photo-1611605698335-8b1569810432','photo-1611162616305-c69b3fa7fbe0'] },
  'business-consulting':{ hero:'photo-1454165804606-c3d57bc86b40', projects:['photo-1552664730-d307ca884978','photo-1542744173-8e7e53415bb0','photo-1507003211169-0a1dd7228f2d'] },
  'user-testing':     { hero:'photo-1573496359142-b8d87734a5a2', projects:['photo-1531403009284-440f080d1e12','photo-1559136555-9303baea8ebd','photo-1586717791821-3f44a563fa4c'] },
  'cybersecurity':    { hero:'photo-1550751827-4bd374c3f58b', projects:['photo-1526374965328-7f61d4dc18c5','photo-1558494949-ef010cbdcc31','photo-1563206767-5b18f218e8de'] },
  'game-dev':         { hero:'photo-1538481199705-c710c4e965fc', projects:['photo-1511512578047-dfb367046420','photo-1612287230202-1ff1d85d1bdf','photo-1552820728-8b83bb6b2b28'] },
  'api-dev':          { hero:'photo-1518432031352-d6fc5c10da5a', projects:['photo-1451187580459-43490279c0fa','photo-1558494949-ef010cbdcc31','photo-1544197150-b99a580bb7a8'] },
  'ecommerce-dev':    { hero:'photo-1556742049-0cfed4f6a45d', projects:['photo-1563013544-824ae1b704d3','photo-1472851294608-062f824d29cc','photo-1460925895917-afdab827c52f'] },
  'data-science':     { hero:'photo-1551288049-bebda4e38f71', projects:['photo-1504868584819-f8e8b4b6d7e3','photo-1460925895917-afdab827c52f','photo-1551288049-bebda4e38f71'] },
  'cloud-devops':     { hero:'photo-1451187580459-43490279c0fa', projects:['photo-1544197150-b99a580bb7a8','photo-1558494949-ef010cbdcc31','photo-1518432031352-d6fc5c10da5a'] },
  'blockchain-dev':   { hero:'photo-1639762681485-074b7f938ba0', projects:['photo-1621761191319-c6fb62004040','photo-1642104704074-907c0698b98d','photo-1639762681485-074b7f938ba0'] },
  'saas-dev':         { hero:'photo-1517694712202-14dd9538aa97', projects:['photo-1460925895917-afdab827c52f','photo-1551288049-bebda4e38f71','photo-1498050108023-c5249f4df085'] },
  'chatbot-development':{ hero:'photo-1531746790095-e5a704c01cf4', projects:['photo-1677442136019-21780ecad995','photo-1587560699334-bea93391dcef','photo-1620712943543-bcc4688e7485'] },
  'trading-bots':     { hero:'photo-1611974789855-9c2a0a7236a3', projects:['photo-1590283603385-17ffb3a7f29f','photo-1642543492481-44e81e3914a7','photo-1611974789855-9c2a0a7236a3'] },
  'website-design':   { hero:'photo-1558655146-9f40138edfeb', projects:['photo-1547658719-da2b51169166','photo-1545235617-9465d2a55698','photo-1507238691740-187a5b1d37b8'] },
  'coding-lessons':   { hero:'photo-1516321318423-f06f85e504b3', projects:['photo-1509062522246-3755977927d7','photo-1515879218367-8466d910aec9','photo-1517694712202-14dd9538aa97'] },
  'vibe-coding':      { hero:'photo-1550745165-9bc0b252726f', projects:['photo-1677442136019-21780ecad995','photo-1518770660439-4636190af475','photo-1526374965328-7f61d4dc18c5'] },
  'cloud-computing':  { hero:'photo-1451187580459-43490279c0fa', projects:['photo-1544197150-b99a580bb7a8','photo-1558494949-ef010cbdcc31','photo-1518432031352-d6fc5c10da5a'] },
  'cryptocurrencies-tokens':{ hero:'photo-1621761191319-c6fb62004040', projects:['photo-1639762681485-074b7f938ba0','photo-1642104704074-907c0698b98d','photo-1611974789855-9c2a0a7236a3'] },
  'devops-cloud':     { hero:'photo-1544197150-b99a580bb7a8', projects:['photo-1451187580459-43490279c0fa','photo-1558494949-ef010cbdcc31','photo-1518432031352-d6fc5c10da5a'] },
  'game-development': { hero:'photo-1538481199705-c710c4e965fc', projects:['photo-1511512578047-dfb367046420','photo-1612287230202-1ff1d85d1bdf','photo-1552820728-8b83bb6b2b28'] },
  'mobile-app-maintenance':{ hero:'photo-1512941937669-90a1b58e7e9c', projects:['photo-1551650975-87deedd944c3','photo-1526498460520-4c246339dccb','photo-1555774698-0b77e0d5fac6'] },
  'qa-review':        { hero:'photo-1573496359142-b8d87734a5a2', projects:['photo-1531403009284-440f080d1e12','photo-1559136555-9303baea8ebd','photo-1517694712202-14dd9538aa97'] },
  'software-development':{ hero:'photo-1461749280684-dccba630e2f6', projects:['photo-1498050108023-c5249f4df085','photo-1517694712202-14dd9538aa97','photo-1460925895917-afdab827c52f'] },
  'support-it':       { hero:'photo-1558494949-ef010cbdcc31', projects:['photo-1544197150-b99a580bb7a8','photo-1451187580459-43490279c0fa','photo-1518432031352-d6fc5c10da5a'] },
  'website-development':{ hero:'photo-1461749280684-dccba630e2f6', projects:['photo-1460925895917-afdab827c52f','photo-1547658719-da2b51169166','photo-1498050108023-c5249f4df085'] },
  'website-maintenance':{ hero:'photo-1547658719-da2b51169166', projects:['photo-1461749280684-dccba630e2f6','photo-1498050108023-c5249f4df085','photo-1507238691740-187a5b1d37b8'] }
};

function _unsplash(id, w, h) { return `https://images.unsplash.com/${id}?w=${w||800}&h=${h||500}&fit=crop&q=80`; }

function _getImages(catId) {
  const imgs = SITE_IMAGES[catId] || SITE_IMAGES['web-dev'];
  return { hero: _unsplash(imgs.hero, 1400, 700), projects: imgs.projects.map(id => _unsplash(id, 800, 500)) };
}

/* ═══════════════════════════════════════════════════════
   PORTFOLIO PAGE GENERATOR
   ═══════════════════════════════════════════════════════ */
function generatePortfolioPage(person, cat, color) {
  const accent = color || '#6366f1';
  const imgs = _getImages(cat.id);
  const title = cat.experience[0].role.replace('Freelance ','').replace(' & Architect',' Specialist');
  const skills = cat.skills;
  const projects = cat.projects;
  const experience = cat.experience;
  const certs = cat.certifications;
  const techTags = Object.values(cat.techStack).flat();
  const photo = person.photo || '';
  const c = person.contact;

  const projectCards = projects.map((p, i) => `
    <div class="proj-card">
      <div class="proj-img"><img src="${imgs.projects[i % imgs.projects.length]}" alt="${p.name}" loading="lazy"></div>
      <div class="proj-body">
        <h3>${p.name}</h3>
        <div class="proj-tech">${p.tech}</div>
        <div class="proj-client">${p.client}</div>
        <p>${p.desc}</p>
      </div>
    </div>`).join('');

  const skillBars = skills.map(s => `
    <div class="skill-row">
      <div class="skill-info"><span>${s.name}</span><span>${s.level}%</span></div>
      <div class="skill-track"><div class="skill-fill" style="width:${s.level}%"></div></div>
    </div>`).join('');

  const expItems = experience.map(e => `
    <div class="exp-item">
      <div class="exp-dot"></div>
      <div class="exp-content">
        <div class="exp-head"><span class="exp-role">${e.role}</span><span class="exp-date">${e.date}</span></div>
        <div class="exp-company">${e.company}</div>
        <ul>${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    </div>`).join('');

  const certCards = certs.map(c2 => `
    <div class="cert-card">
      <div class="cert-name">${c2.name}</div>
      <div class="cert-issuer">${c2.issuer} · ${c2.year}</div>
    </div>`).join('');

  const techTagsHtml = techTags.map(t => `<span class="tag">${t}</span>`).join('');

  const eduHtml = person.education.map(e => `
    <div class="edu-item">
      <div class="edu-deg">${e.degree}</div>
      <div class="edu-school">${e.school}</div>
      <div class="edu-detail">${e.detail} · ${e.year}</div>
    </div>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${person.name} — ${title}</title>
<meta name="description" content="${person.name} — ${title}. ${cat.name} specialist.">
<style>
:root{--accent:${accent};--bg:#050508;--card:#0d0d14;--border:rgba(255,255,255,.06);--text:#e2e8f0;--muted:#94a3b8;--dim:#64748b}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Segoe UI',system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;line-height:1.6}

/* Nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 0;transition:background .3s}
.nav.scrolled{background:rgba(5,5,8,.95);backdrop-filter:blur(16px);border-bottom:1px solid var(--border)}
.nav-inner{max-width:1100px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between}
.nav-logo{font-size:18px;font-weight:800;color:#fff;letter-spacing:-.5px}
.nav-links{display:flex;gap:24px;align-items:center}
.nav-links a{font-size:13px;color:var(--muted);text-decoration:none;transition:color .2s;font-weight:500}
.nav-links a:hover{color:#fff}
.nav-links .btn-cv{padding:6px 16px;border-radius:6px;background:var(--accent);color:#fff;font-weight:600}
.nav-links .btn-cv:hover{opacity:.9}

/* Hero */
.hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden}
.hero-bg{position:absolute;inset:0}
.hero-bg img{width:100%;height:100%;object-fit:cover;opacity:.15;filter:blur(1px)}
.hero-gradient{position:absolute;inset:0;background:linear-gradient(135deg,rgba(5,5,8,.95),rgba(5,5,8,.7))}
.hero-inner{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:0 24px;display:flex;align-items:center;gap:60px;width:100%}
.hero-photo{width:200px;height:200px;border-radius:50%;overflow:hidden;border:4px solid rgba(255,255,255,.1);flex-shrink:0;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:800;color:#fff}
.hero-photo img{width:100%;height:100%;object-fit:cover}
.hero-text h1{font-size:48px;font-weight:800;color:#fff;letter-spacing:-1.5px;line-height:1.1;margin-bottom:8px}
.hero-text .role{font-size:20px;color:var(--accent);font-weight:600;margin-bottom:12px}
.hero-text .location{font-size:14px;color:var(--muted);margin-bottom:20px;display:flex;align-items:center;gap:6px}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap}
.hero-btns a{padding:10px 24px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;transition:all .2s}
.hero-btns .btn-primary{background:var(--accent);color:#fff}
.hero-btns .btn-secondary{background:rgba(255,255,255,.06);color:var(--text);border:1px solid var(--border)}
.hero-btns .btn-primary:hover{opacity:.85}
.hero-btns .btn-secondary:hover{border-color:var(--accent)}

/* Sections */
.section{padding:80px 24px}
.section-inner{max-width:1100px;margin:0 auto}
.section-title{font-size:12px;text-transform:uppercase;letter-spacing:3px;color:var(--accent);font-weight:700;margin-bottom:8px}
.section-heading{font-size:32px;font-weight:800;color:#fff;letter-spacing:-.5px;margin-bottom:32px}

/* About */
.about-text{font-size:16px;color:var(--muted);line-height:1.8;max-width:700px;margin-bottom:32px}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.metric-card{text-align:center;padding:24px 16px;background:var(--card);border:1px solid var(--border);border-radius:12px}
.metric-val{font-size:32px;font-weight:800;color:#fff}
.metric-lbl{font-size:11px;text-transform:uppercase;letter-spacing:2px;color:var(--dim);margin-top:4px}

/* Skills */
.skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px}
.skill-row{margin-bottom:14px}
.skill-info{display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px}
.skill-info span:first-child{color:var(--text);font-weight:600}
.skill-info span:last-child{color:var(--dim)}
.skill-track{height:6px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden}
.skill-fill{height:100%;background:var(--accent);border-radius:3px;transition:width 1s ease}

/* Tech Tags */
.tech-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
.tag{padding:4px 14px;border-radius:20px;font-size:12px;background:rgba(255,255,255,.04);border:1px solid var(--border);color:var(--muted);font-weight:500}

/* Projects */
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:20px}
.proj-card{background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:all .3s}
.proj-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.3);border-color:rgba(255,255,255,.1)}
.proj-img{height:200px;overflow:hidden}
.proj-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.proj-card:hover .proj-img img{transform:scale(1.05)}
.proj-body{padding:20px}
.proj-body h3{font-size:16px;font-weight:700;color:#fff;margin-bottom:6px}
.proj-tech{font-size:11px;color:var(--accent);margin-bottom:4px;font-weight:600}
.proj-client{font-size:11px;color:var(--dim);margin-bottom:8px}
.proj-body p{font-size:12px;color:var(--muted);line-height:1.6}

/* Experience */
.exp-timeline{position:relative;padding-left:24px;border-left:2px solid var(--border)}
.exp-item{position:relative;margin-bottom:32px}
.exp-dot{position:absolute;left:-31px;top:6px;width:12px;height:12px;border-radius:50%;background:var(--accent);border:2px solid var(--bg)}
.exp-head{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px}
.exp-role{font-size:16px;font-weight:700;color:#fff}
.exp-date{font-size:12px;color:var(--dim);white-space:nowrap}
.exp-company{font-size:13px;color:var(--accent);margin:2px 0 8px;font-weight:500}
.exp-item ul{padding-left:18px;font-size:13px;color:var(--muted)}
.exp-item li{margin:4px 0}

/* Certifications */
.cert-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}
.cert-card{padding:16px;background:var(--card);border:1px solid var(--border);border-radius:10px}
.cert-name{font-size:13px;font-weight:700;color:var(--text);margin-bottom:4px}
.cert-issuer{font-size:11px;color:var(--dim)}

/* Education */
.edu-list{display:flex;flex-direction:column;gap:16px}
.edu-item{padding:16px 20px;background:var(--card);border:1px solid var(--border);border-radius:10px}
.edu-deg{font-size:14px;font-weight:700;color:#fff}
.edu-school{font-size:12px;color:var(--accent);margin:2px 0}
.edu-detail{font-size:11px;color:var(--dim)}

/* Contact */
.contact-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
.contact-card{padding:16px;background:var(--card);border:1px solid var(--border);border-radius:10px;display:flex;align-items:center;gap:12px}
.contact-card .icon{font-size:20px}
.contact-card .label{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--dim)}
.contact-card .value{font-size:13px;color:var(--text);font-weight:500;word-break:break-all}

/* Footer */
.footer{text-align:center;padding:32px 24px;border-top:1px solid var(--border);font-size:12px;color:var(--dim)}

/* Responsive */
@media(max-width:768px){
  .hero-inner{flex-direction:column;text-align:center;padding-top:100px}
  .hero-photo{width:140px;height:140px;font-size:48px}
  .hero-text h1{font-size:32px}
  .hero-btns{justify-content:center}
  .metrics{grid-template-columns:repeat(2,1fr)}
  .skills-grid{grid-template-columns:1fr}
  .projects-grid{grid-template-columns:1fr}
  .nav-links a:not(.btn-cv){display:none}
  .section{padding:48px 16px}
}
@media print{
  .nav{display:none}
  .hero{min-height:auto;padding:48px 24px}
  .section{padding:24px}
  body{background:#fff;color:#1a1a2e}
  .metric-card,.proj-card,.cert-card,.edu-item,.contact-card{background:#f8f9fa;border-color:#e0e0e0}
  .section-heading,.hero-text h1,.metric-val,.proj-body h3,.exp-role,.cert-name,.edu-deg{color:#1a1a2e}
}
</style>
</head>
<body>

<nav class="nav" id="nav">
  <div class="nav-inner">
    <div class="nav-logo">${person.name.split(' ')[0]}</div>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
      <a href="cv.html" class="btn-cv">View CV</a>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="hero-bg"><img src="${imgs.hero}" alt=""></div>
  <div class="hero-gradient"></div>
  <div class="hero-inner">
    <div class="hero-photo">${photo ? `<img src="${photo}" alt="${person.name}">` : person.initials}</div>
    <div class="hero-text">
      <h1>${person.name}</h1>
      <div class="role">${title}</div>
      <div class="location">📍 ${c.location}</div>
      <div class="hero-btns">
        <a href="#projects" class="btn-primary">View Projects</a>
        <a href="cv.html" class="btn-secondary">Download CV</a>
        ${c.linkedin ? `<a href="https://${c.linkedin}" class="btn-secondary" target="_blank">LinkedIn</a>` : ''}
      </div>
    </div>
  </div>
</section>

<section class="section" id="about">
  <div class="section-inner">
    <div class="section-title">About Me</div>
    <div class="section-heading">Professional Summary</div>
    <div class="about-text">
      ${cat.name} professional with 5+ years delivering high-impact solutions for enterprise clients and startups.
      Expert in ${skills.slice(0,3).map(s=>s.name).join(', ')} with ${certs.length} industry certifications and
      experience at companies like ${experience.length > 1 ? experience[1].company.split('—')[0].trim() : 'top firms'}.
    </div>
    <div class="metrics">
      <div class="metric-card"><div class="metric-val">5+</div><div class="metric-lbl">Years Exp.</div></div>
      <div class="metric-card"><div class="metric-val">${projects.length}+</div><div class="metric-lbl">Major Projects</div></div>
      <div class="metric-card"><div class="metric-val">${certs.length}</div><div class="metric-lbl">Certifications</div></div>
      <div class="metric-card"><div class="metric-val">100%</div><div class="metric-lbl">5-Star Rating</div></div>
    </div>
  </div>
</section>

<section class="section" id="skills" style="background:rgba(255,255,255,.01)">
  <div class="section-inner">
    <div class="section-title">Expertise</div>
    <div class="section-heading">Skills & Technologies</div>
    <div class="skills-grid">
      <div>${skillBars}</div>
      <div style="display:flex;flex-direction:column;justify-content:center">
        <div class="tech-tags">${techTagsHtml}</div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="projects">
  <div class="section-inner">
    <div class="section-title">Portfolio</div>
    <div class="section-heading">Featured Projects</div>
    <div class="projects-grid">${projectCards}</div>
  </div>
</section>

<section class="section" id="experience" style="background:rgba(255,255,255,.01)">
  <div class="section-inner">
    <div class="section-title">Career</div>
    <div class="section-heading">Professional Experience</div>
    <div class="exp-timeline">${expItems}</div>
  </div>
</section>

<section class="section" id="certifications">
  <div class="section-inner">
    <div class="section-title">Credentials</div>
    <div class="section-heading">Certifications</div>
    <div class="cert-grid">${certCards}</div>
  </div>
</section>

<section class="section" style="background:rgba(255,255,255,.01)">
  <div class="section-inner">
    <div class="section-title">Education</div>
    <div class="section-heading">Academic Background</div>
    <div class="edu-list">${eduHtml}</div>
  </div>
</section>

<section class="section" id="contact">
  <div class="section-inner">
    <div class="section-title">Get in Touch</div>
    <div class="section-heading">Contact Information</div>
    <div class="contact-grid">
      ${c.email ? `<div class="contact-card"><div class="icon">📧</div><div><div class="label">Email</div><div class="value">${c.email}</div></div></div>` : ''}
      ${c.phone ? `<div class="contact-card"><div class="icon">📱</div><div><div class="label">Phone</div><div class="value">${c.phone}</div></div></div>` : ''}
      ${c.location ? `<div class="contact-card"><div class="icon">📍</div><div><div class="label">Location</div><div class="value">${c.location}</div></div></div>` : ''}
      ${c.linkedin ? `<div class="contact-card"><div class="icon">💼</div><div><div class="label">LinkedIn</div><div class="value">${c.linkedin}</div></div></div>` : ''}
      ${c.github ? `<div class="contact-card"><div class="icon">🐙</div><div><div class="label">GitHub</div><div class="value">${c.github}</div></div></div>` : ''}
      ${c.website ? `<div class="contact-card"><div class="icon">🌐</div><div><div class="label">Website</div><div class="value">${c.website}</div></div></div>` : ''}
    </div>
  </div>
</section>

<footer class="footer">&copy; ${new Date().getFullYear()} ${person.name}. All rights reserved.</footer>

<script>
window.addEventListener('scroll',()=>{document.getElementById('nav').classList.toggle('scrolled',window.scrollY>50)});
</script>
</body>
</html>`;
}

/* ═══════════════════════════════════════════════════════
   CV PAGE GENERATOR (self-contained)
   ═══════════════════════════════════════════════════════ */
function generateCVPage(person, cat, color) {
  const accent = color || '#6366f1';
  const title = cat.experience[0].role.replace('Freelance ','').replace(' & Architect',' Specialist');
  const c = person.contact;
  const skills = cat.skills;
  const techStack = cat.techStack;
  const experience = cat.experience;
  const projects = cat.projects;
  const certs = cat.certifications;
  const photo = person.photo || '';

  // Sidebar
  const contactItems = [];
  if (c.email) contactItems.push(`<li>📧 ${c.email}</li>`);
  if (c.phone) contactItems.push(`<li>📱 ${c.phone}</li>`);
  if (c.location) contactItems.push(`<li>📍 ${c.location}</li>`);
  if (c.linkedin) contactItems.push(`<li>💼 ${c.linkedin}</li>`);
  if (c.github) contactItems.push(`<li>🐙 ${c.github}</li>`);
  if (c.website) contactItems.push(`<li>🌐 ${c.website}</li>`);

  const skillBars = skills.map(s => `
    <div class="sb-item"><div class="sb-lbl"><span>${s.name}</span><span>${s.level}%</span></div>
    <div class="sb-track"><div class="sb-fill" style="width:${s.level}%"></div></div></div>`).join('');

  let techHtml = '';
  for (const [group, tags] of Object.entries(techStack)) {
    techHtml += `<div class="tg-group"><div class="tg-title">${group}</div><div class="tg-wrap">${tags.map(t=>`<span class="tg">${t}</span>`).join('')}</div></div>`;
  }

  const certHtml = certs.map(c2=>`<div class="ct">${c2.name}<br><span class="ct-y">${c2.issuer} · ${c2.year}</span></div>`).join('');
  const langHtml = person.languages.map(l=>`<div class="lang"><span>${l.name}</span><span>${l.level}</span></div>`).join('');

  // Main
  const expHtml = experience.map(e => `
    <div class="exp"><div class="exp-h"><span class="exp-r">${e.role}</span><span class="exp-d">${e.date}</span></div>
    <div class="exp-c">${e.company}</div>
    <ul>${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div>`).join('');

  const projHtml = projects.map(p => `
    <div class="proj"><div class="proj-n">${p.name}</div><div class="proj-t">${p.tech}</div>
    ${p.client?`<div class="proj-cl">${p.client}</div>`:''}<div class="proj-d">${p.desc}</div></div>`).join('');

  const eduHtml = person.education.map(e=>`
    <div class="edu"><div><div class="edu-d">${e.degree}</div><div class="edu-s">${e.school}</div>
    <div class="edu-dt">${e.detail}</div></div><span class="edu-y">${e.year}</span></div>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${person.name} — CV</title>
<style>
:root{--a:${accent}}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Segoe UI',system-ui,sans-serif;background:#f0f2f5;color:#1a1a2e;line-height:1.6;-webkit-font-smoothing:antialiased}
.page{display:grid;grid-template-columns:260px 1fr;max-width:1000px;margin:24px auto;background:#fff;box-shadow:0 4px 24px rgba(0,0,0,.12);border-radius:8px;overflow:hidden;min-height:100vh}
.toolbar{position:fixed;top:16px;right:16px;display:flex;gap:8px;z-index:100}
.toolbar a,.toolbar button{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;cursor:pointer;border:none;transition:all .2s}
.btn-back{background:#0f1629;color:#fff}.btn-back:hover{background:#1a2340}
.btn-print{background:var(--a);color:#fff}.btn-print:hover{opacity:.85}

/* Sidebar */
.side{background:linear-gradient(180deg,#0f1629,#162040);color:#c8cfe0;padding:28px 20px;font-size:13px}
.side h2{color:#fff;font-size:12px;letter-spacing:2.5px;text-transform:uppercase;margin:22px 0 10px;padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,.08)}
.avatar{width:90px;height:90px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:700;color:#fff;border:3px solid rgba(255,255,255,.15);overflow:hidden;background:linear-gradient(135deg,var(--a),#6c8cff)}
.avatar img{width:100%;height:100%;object-fit:cover}
.contact{list-style:none}
.contact li{display:flex;align-items:center;gap:8px;margin:6px 0;font-size:12px;word-break:break-all}
.sb-item{margin:6px 0}
.sb-lbl{display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px;color:#d0d6e4}
.sb-track{height:5px;background:rgba(255,255,255,.08);border-radius:4px;overflow:hidden}
.sb-fill{height:100%;background:linear-gradient(90deg,var(--a),#6c8cff);border-radius:4px}
.tg-group{margin:8px 0}
.tg-title{font-size:10px;color:#8892a8;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:5px}
.tg-wrap{display:flex;flex-wrap:wrap;gap:4px}
.tg{background:rgba(79,110,247,.12);color:#8badff;border:1px solid rgba(79,110,247,.2);padding:2px 8px;border-radius:4px;font-size:10px;font-weight:500}
.lang{display:flex;justify-content:space-between;font-size:12px;margin:4px 0}
.lang span:last-child{color:#6c8cff;font-weight:600;font-size:11px}
.ct{margin:6px 0;font-size:11px;color:#d0d6e4}
.ct-y{font-size:10px;color:#6b7794}

/* Main */
.main{padding:32px 36px}
.main header h1{font-size:30px;font-weight:800;color:#0f1629;letter-spacing:-.5px;line-height:1.2}
.main .title{color:var(--a);font-size:15px;font-weight:600;margin:4px 0 10px}
.main .summary{font-size:13px;color:#4a5068;line-height:1.7;margin-bottom:16px}
.sec{margin:20px 0}
.sec-t{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#0f1629;border-left:3px solid var(--a);padding-left:10px;margin-bottom:12px}
.exp{margin:14px 0;padding-left:14px;border-left:2px solid #e0e4ec;position:relative}
.exp::before{content:'';position:absolute;left:-5px;top:6px;width:8px;height:8px;border-radius:50%;background:var(--a);border:2px solid #fff}
.exp-h{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:4px}
.exp-r{font-size:14px;font-weight:700;color:#0f1629}
.exp-d{font-size:11px;color:#7a8299;font-weight:500;white-space:nowrap}
.exp-c{font-size:12px;color:var(--a);margin:2px 0 6px;font-weight:500}
.exp ul{margin:0;padding-left:16px;font-size:12px;color:#4a5068}
.exp li{margin:3px 0;line-height:1.55}
.proj{margin:10px 0;padding:10px 14px;border:1px solid #e8ecf2;border-radius:8px;background:#fafbfd}
.proj-n{font-size:13px;font-weight:700;color:#0f1629}
.proj-t{font-size:11px;color:var(--a);margin:2px 0 4px}
.proj-cl{font-size:10px;color:#4f6ef7;font-weight:600;margin-bottom:3px}
.proj-d{font-size:11px;color:#5a6178;line-height:1.55}
.edu{display:flex;justify-content:space-between;align-items:flex-start;margin:8px 0;gap:10px}
.edu-d{font-size:13px;font-weight:700;color:#0f1629}
.edu-s{font-size:12px;color:var(--a)}
.edu-dt{font-size:11px;color:#7a8299}
.edu-y{font-size:11px;color:#7a8299;background:#f0f2f5;padding:2px 8px;border-radius:4px;white-space:nowrap;font-weight:600}

@media(max-width:768px){.page{grid-template-columns:1fr;margin:0;border-radius:0}}
@media print{
@page{size:A4;margin:8mm}
*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}
body{background:#fff;font-size:9px}
.page{margin:0;box-shadow:none;border-radius:0;max-width:100%;grid-template-columns:200px 1fr}
.toolbar{display:none!important}
.side{padding:12px;font-size:9px}
.main{padding:12px 16px}
}
</style>
</head>
<body>
<div class="toolbar">
  <a href="index.html" class="btn-back">← Portfolio</a>
  <button class="btn-print" onclick="window.print()">🖨 Print CV</button>
</div>
<div class="page">
<aside class="side">
  <div class="avatar">${photo ? `<img src="${photo}" alt="${person.name}">` : person.initials}</div>
  <h2>Contact</h2>
  <ul class="contact">${contactItems.join('')}</ul>
  <h2>Core Expertise</h2>
  ${skillBars}
  <h2>Tech Stack</h2>
  ${techHtml}
  <h2>Languages</h2>
  ${langHtml}
  <h2>Certifications</h2>
  ${certHtml}
</aside>
<main class="main">
  <header>
    <h1>${person.name}</h1>
    <div class="title">${title}</div>
    <p class="summary">${cat.name} professional with 5+ years delivering high-impact solutions. Expert in ${skills.slice(0,3).map(s=>s.name).join(', ')} with proven track record at top companies.</p>
  </header>
  <section class="sec"><div class="sec-t">Professional Experience</div>${expHtml}</section>
  <section class="sec"><div class="sec-t">Featured Projects</div>${projHtml}</section>
  <section class="sec"><div class="sec-t">Education</div>${eduHtml}</section>
</main>
</div>
</body>
</html>`;
}

/* ═══════════════════════════════════════════════════════
   PREVIEW & DOWNLOAD
   ═══════════════════════════════════════════════════════ */
function previewWebsite(person, cat, color) {
  const html = generatePortfolioPage(person, cat, color);
  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  return html;
}

function previewCV(person, cat, color) {
  const html = generateCVPage(person, cat, color);
  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  return html;
}

async function downloadWebsiteZIP(person, cat, color) {
  // Load JSZip from CDN if not present
  if (typeof JSZip === 'undefined') {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  const portfolioHtml = generatePortfolioPage(person, cat, color);
  const cvHtml = generateCVPage(person, cat, color);
  const slug = person.id + '-' + cat.id;

  const zip = new JSZip();
  zip.file('index.html', portfolioHtml);
  zip.file('cv.html', cvHtml);

  // Add a simple vercel.json for clean URLs
  zip.file('vercel.json', JSON.stringify({
    rewrites: [{ source: "/cv", destination: "/cv.html" }]
  }, null, 2));

  const blob = await zip.generateAsync({ type: 'blob' });

  // Download
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = slug + '-website.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);

  return slug;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generatePortfolioPage, generateCVPage, downloadWebsiteZIP, SITE_IMAGES };
}
