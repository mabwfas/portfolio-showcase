/* ══════════════════════════════════════════════════════════════
   PERSON PROFILES
   Used by the dashboard to populate person-specific fields
   ══════════════════════════════════════════════════════════════ */

const PEOPLE = [
  {
    id: "navya-singh",
    name: "Navya Singh",
    initials: "NS",
    photo: null,
    contact: {
      email: "navyasingh@example.com",
      phone: "+91 98765 43210",
      location: "Lucknow, UP, India",
      linkedin: "linkedin.com/in/navya-singh",
      github: "github.com/navya-singh"
    },
    education: [
      { degree: "B.Tech Computer Science & Engineering", school: "Indian Institute of Technology (IIT), Kanpur", detail: "Department Rank 3 | ACM ICPC Regionalist | CGPA: 9.4/10", year: "2019" },
      { degree: "Senior Secondary (XII) — Science", school: "City Montessori School (CMS), Lucknow", detail: "ICSE Board | Physics, Chemistry, Mathematics & Computer Science", year: "2015" },
      { degree: "Secondary (X)", school: "City Montessori School (CMS), Lucknow", detail: "ICSE Board | School topper in Computer Science", year: "2013" }
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Native" }
    ]
  },
  {
    id: "divyansh-singh",
    name: "Divyansh Singh",
    initials: "DS",
    photo: null,
    contact: {
      email: "divyanshsingh@example.com",
      phone: "+91 98765 43211",
      location: "Lucknow, UP, India",
      linkedin: "linkedin.com/in/divyansh-singh",
      github: "github.com/divyansh-singh"
    },
    education: [
      { degree: "B.Tech Computer Science & Engineering", school: "National Institute of Technology (NIT), Allahabad", detail: "Smart India Hackathon Finalist | Open Source Contributor | CGPA: 9.1/10", year: "2020" },
      { degree: "Senior Secondary (XII) — Science", school: "City Montessori School (CMS), Lucknow", detail: "CBSE Board | Physics, Chemistry, Mathematics & Computer Science", year: "2016" },
      { degree: "Secondary (X)", school: "City Montessori School (CMS), Lucknow", detail: "CBSE Board | District topper in Mathematics", year: "2014" }
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Native" }
    ]
  },
  {
    id: "shreyansh-singh",
    name: "Shreyansh Singh",
    initials: "SS",
    photo: "https://shreyansh-singh-dev.vercel.app/shreyansh.jpg",
    contact: {
      email: "realshreyanshsingh@gmail.com",
      phone: "+91 88277 41992",
      location: "Lucknow, UP, India",
      linkedin: "linkedin.com/in/realshreyanshsingh",
      website: "shreyansh-singh-dev.vercel.app",
      github: "github.com/mabwfas"
    },
    education: [
      { degree: "B.Tech Computer Science & Engineering", school: "Jaypee University of Engineering and Technology (JUET), Guna", detail: "Smart India Hackathon Winner | Google Summer of Code (2x) | CGPA: 9.2/10", year: "2019" },
      { degree: "Senior Secondary (XII) — Science", school: "City Montessori School (CMS), Lucknow", detail: "ICSE Board | Physics, Chemistry, Mathematics & Computer Science", year: "2015" },
      { degree: "Secondary (X)", school: "City Montessori School (CMS), Lucknow", detail: "ICSE Board | School topper in Computer Science", year: "2013" }
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Native" }
    ]
  },
  {
    id: "sarthak-singh",
    name: "Sarthak Singh",
    initials: "SR",
    photo: null,
    contact: {
      email: "sarthaksingh@example.com",
      phone: "+91 98765 43212",
      location: "Lucknow, UP, India",
      linkedin: "linkedin.com/in/sarthak-singh",
      github: "github.com/sarthak-singh"
    },
    education: [
      { degree: "B.Tech Computer Science & Engineering", school: "Birla Institute of Technology and Science (BITS), Pilani", detail: "Google HashCode Finalist | Open Source Contributor | CGPA: 9.3/10", year: "2020" },
      { degree: "Senior Secondary (XII) — Science", school: "City Montessori School (CMS), Lucknow", detail: "ICSE Board | Physics, Chemistry, Mathematics & Computer Science", year: "2016" },
      { degree: "Secondary (X)", school: "City Montessori School (CMS), Lucknow", detail: "ICSE Board | School topper in Science", year: "2014" }
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Native" }
    ]
  },
  {
    id: "vivek-raj-singh",
    name: "Vivek Raj Singh",
    initials: "VR",
    photo: null,
    contact: {
      email: "vivekrajsingh@example.com",
      phone: "+91 98765 43213",
      location: "Lucknow, UP, India",
      linkedin: "linkedin.com/in/vivek-raj-singh",
      github: "github.com/vivek-raj-singh"
    },
    education: [
      { degree: "B.Tech Information Technology", school: "Indian Institute of Information Technology (IIIT), Allahabad", detail: "ACM ICPC Regionalist | Research Paper Published | CGPA: 9.0/10", year: "2019" },
      { degree: "Senior Secondary (XII) — Science", school: "City Montessori School (CMS), Lucknow", detail: "CBSE Board | Physics, Chemistry, Mathematics & Computer Science", year: "2015" },
      { degree: "Secondary (X)", school: "City Montessori School (CMS), Lucknow", detail: "CBSE Board | School topper in Computer Applications", year: "2013" }
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Native" }
    ]
  }
];

// Export for browser and Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PEOPLE };
}
