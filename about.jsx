// pages/about.jsx  OR  app/about/page.jsx
// Add to layout/head:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet" />

"use client";

export default function AboutPage() {

  const navLinks = ["Home", "Research", "Experience", "Skills", "Certifications", "Contact"];

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "4",  label: "Companies Worked" },
    { value: "2",  label: "Research Papers" },
    { value: "8+", label: "Certifications" },
  ];

  const researchInterests = [
    {
      title: "Machine Learning & Data Science",
      body: "Supervised and unsupervised learning, ensemble methods, and deep learning applied to real-world structured and unstructured datasets.",
    },
    {
      title: "Natural Language Processing",
      body: "Text classification, fraud detection, and information extraction using NLP pipelines and modern transformer-based architectures.",
    },
    {
      title: "Business Intelligence & Analytics",
      body: "EDA, RFM analysis, Power BI dashboards, and statistical modeling to uncover actionable insights from complex datasets.",
    },
    {
      title: "Explainable AI (XAI)",
      body: "Model interpretability techniques applied to healthcare, finance, and social science applications for responsible AI deployment.",
    },
  ];

  const experiences = [
    {
      role: "Executive Data Strategist",
      company: "Zeuz",
      period: "January 2025 – Present",
      detail: "Full Time · Bangladesh",
      bullets: [
        "Lead data strategy development, leveraging analytical insights to inform key business decisions and optimize operational processes.",
        "Work with complex datasets to identify trends, patterns, and growth opportunities for strategic planning.",
        "Develop interactive dashboards and reporting tools to communicate data-driven findings to senior stakeholders.",
      ],
    },
    {
      role: "Web Developer & CRM Administrator",
      company: "Global Education Care",
      period: "January 2024 – December 2024",
      detail: "Full Time · Sylhet, Bangladesh · 1 Year",
      bullets: [
        "Managed full-cycle web development projects from requirements gathering through deployment.",
        "Administered CRM systems to enhance customer engagement and streamline operational workflows.",
        "Improved site performance and maintained responsive web infrastructure for multiple campaigns.",
      ],
    },
    {
      role: "Machine Learning Engineer",
      company: "DataSoft Systems Bangladesh Limited",
      period: "August 2023 – November 2024",
      detail: "Full Time · Bangladesh · 1 Year 4 Months",
      bullets: [
        "Developed and deployed machine learning models for data-driven product enhancements.",
        "Contributed to innovative AI solutions across multiple business verticals.",
        "Collaborated with cross-functional teams to integrate ML models into production-ready pipelines.",
      ],
    },
    {
      role: "IT Support Technician",
      company: "UCEP Bangladesh",
      period: "July 2022 – June 2023",
      detail: "Full Time · UCEP Ghashitola Technical School, Sylhet · 1 Year",
      bullets: [
        "Served as IT Instructor and Technical Skill Level 1 Trainer (Computer).",
        "Planned and executed hardware and software maintenance upgrades for school systems.",
        "Installed and configured computers and networking equipment across the facility.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Metropolitan University Bangladesh",
      period: "2018 – 2022",
      gpa: "Graduated",
      detail: "Specialized in software engineering, algorithms, data structures, database management, and backend development.",
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science",
      institution: "SAARC International College",
      period: "2015 – 2017",
      gpa: "",
      detail: "",
    },
    {
      degree: "Secondary School Certificate (SSC) — Science",
      institution: "Airport High School Sylhet",
      period: "2013 – 2015",
      gpa: "",
      detail: "",
    },
  ];

  const skillGroups = [
    { label: "Programming Languages", items: ["Python", "JavaScript", "Java", "C", "C++", "R"] },
    { label: "Machine Learning & AI", items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Deep Learning", "MLOps", "LLMs"] },
    { label: "BI & Visualization", items: ["Power BI", "Tableau", "Excel", "Matplotlib", "Seaborn"] },
    { label: "Databases", items: ["MySQL", "PostgreSQL", "SQL Server", "PL/SQL"] },
    { label: "Python Libraries", items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"] },
    { label: "Data Processing", items: ["ETL", "Web Scraping", "Data Cleaning", "EDA", "RFM Analysis"] },
  ];

  const certifications = [
    { name: "Data Science & Machine Learning Career Path", issuer: "Interactive Cares" },
    { name: "Data Analytics and BI Career Path", issuer: "Interactive Cares" },
    { name: "Data Analytics", issuer: "Tutorials Point Bangladesh" },
    { name: "Applied Data Science with Python", issuer: "Online" },
    { name: "Data Transformation with Google Cloud", issuer: "Google" },
    { name: "Python (Beginner to Advanced)", issuer: "HackerRank" },
    { name: "SQL (Beginner to Advanced)", issuer: "HackerRank" },
    { name: "Pandas", issuer: "Kaggle" },
  ];

  const extra = [
    { role: "Student Secretary", org: "Metropolitan University Social Services Club", period: "2020–2023" },
    { role: "Office Secretary", org: "CSE Society, Metropolitan University", period: "2020–2021" },
    { role: "Organization Secretary", org: "Metropolitan University Photography Society", period: "2019–2023" },
    { role: "Volunteer", org: "Sexual Harassment Awareness — Metropolitan University", period: "2020" },
    { role: "Volunteer", org: "Tree Plantation Initiative — MU Social Services Club", period: "2023" },
    { role: "Event Organizer", org: "Sylhet Science Olympiad 2023 (~400 students)", period: "2023" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background: #fff; color: #0f172a; }

        .sora { font-family: 'Sora', sans-serif; }

        /* ── Fade in on load ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .au { animation: fadeUp 0.65s ease both; }
        .d1 { animation-delay:0.05s; } .d2 { animation-delay:0.15s; }
        .d3 { animation-delay:0.25s; } .d4 { animation-delay:0.35s; }
        .d5 { animation-delay:0.45s; } .d6 { animation-delay:0.55s; }

        /* ── Nav link hover ── */
        .nl { position:relative; transition:color 0.2s; }
        .nl::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:2px; background:#0369a1; border-radius:2px; transition:width 0.25s; }
        .nl:hover { color:#0369a1 !important; }
        .nl:hover::after { width:100%; }

        /* ── Card hover ── */
        .ch { transition: box-shadow 0.25s, transform 0.25s; }
        .ch:hover { box-shadow: 0 12px 36px rgba(3,105,161,0.10); transform: translateY(-3px); }

        /* ── Skill pill ── */
        .sp { transition: background 0.2s, color 0.2s, border-color 0.2s; cursor:default; }
        .sp:hover { background:#0369a1 !important; color:#fff !important; border-color:#0369a1 !important; }

        /* ── Section heading accent ── */
        .sh { display:flex; align-items:center; gap:14px; margin-bottom:36px; }
        .sh::after { content:''; flex:1; height:1px; background: linear-gradient(90deg,#bae6fd,transparent); }

        /* ── Experience card active border ── */
        .exp-card { border-left:3px solid #e2e8f0; transition:border-color 0.2s, box-shadow 0.25s, transform 0.25s; }
        .exp-card:hover { border-left-color:#0369a1; box-shadow:0 8px 28px rgba(3,105,161,0.09); transform:translateY(-2px); }

        /* ── Research card ── */
        .rc { border-top:3px solid transparent; transition:border-color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .rc:hover { border-top-color:#0369a1; box-shadow:0 10px 32px rgba(3,105,161,0.10); transform:translateY(-3px); }

        /* ── Cert card ── */
        .cc { transition: background 0.2s, box-shadow 0.2s; }
        .cc:hover { background:#f0f9ff !important; box-shadow: 0 4px 16px rgba(3,105,161,0.08); }

        /* ── Social button ── */
        .sb { transition: background 0.2s, color 0.2s, border-color 0.2s; }
        .sb:hover { background:#0369a1 !important; color:#fff !important; border-color:#0369a1 !important; }

        /* ── Stat item ── */
        .si { transition: background 0.2s; }
        .si:hover { background: #f0f9ff; }

        /* Photo ring pulse */
        @keyframes ring { 0%,100%{box-shadow:0 0 0 0 rgba(3,105,161,0.18)} 50%{box-shadow:0 0 0 10px rgba(3,105,161,0)} }
        .photo-ring { animation: ring 3.5s ease infinite; }
      `}</style>

      <div style={{ minHeight:'100vh', background:'#fff', color:'#0f172a' }}>

        {/* ════════════════ NAVBAR ════════════════ */}
        <nav style={{
          position:'sticky', top:0, zIndex:100,
          background:'rgba(255,255,255,0.96)',
          backdropFilter:'blur(16px)',
          borderBottom:'1px solid #f1f5f9',
          padding:'0 32px',
          boxShadow:'0 1px 0 rgba(3,105,161,0.06)',
        }}>
          <div style={{ maxWidth:1080, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', height:60 }}>
            <span className="sora" style={{ fontWeight:700, fontSize:'0.95rem', color:'#0c4a6e', letterSpacing:'-0.01em' }}>
              Nakib Uddin Ahmed
            </span>
            <div style={{ display:'flex', gap:26, fontSize:'0.82rem', fontWeight:500, color:'#475569' }}>
              {navLinks.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="nl" style={{ textDecoration:'none', color:'#475569' }}>{l}</a>
              ))}
            </div>
          </div>
        </nav>

        {/* ════════════════ HERO ════════════════ */}
        <section id="home" style={{
          background:'linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 40%, #fff 100%)',
          padding:'72px 32px 60px',
          borderBottom:'1px solid #e0f2fe',
        }}>
          <div style={{ maxWidth:1080, margin:'0 auto', display:'flex', alignItems:'center', gap:56, flexWrap:'wrap' }}>

            {/* ── Photo ── */}
            <div className="au d1 photo-ring" style={{
              width:170, height:170, borderRadius:'50%', flexShrink:0,
              background:'linear-gradient(135deg,#0c4a6e 0%,#0369a1 100%)',
              display:'flex', alignItems:'center', justifyContent:'center',
              border:'4px solid #fff',
              overflow:'hidden',
            }}>
              {/* Replace inner svg with: <img src="/your-photo.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Nakib" /> */}
              <svg width="88" height="88" fill="rgba(255,255,255,0.7)" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>

            {/* ── Info ── */}
            <div style={{ flex:1, minWidth:260 }}>
              <p className="au d1" style={{ fontSize:'0.72rem', fontWeight:600, color:'#0369a1', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:10 }}>
                Data Analyst · Data Scientist · BI Analyst · Content Creator
              </p>
              <h1 className="sora au d2" style={{ fontSize:'clamp(2rem,4.5vw,3.2rem)', fontWeight:800, color:'#0c4a6e', lineHeight:1.15, letterSpacing:'-0.025em', marginBottom:6 }}>
                NAKIB UDDIN AHMED
              </h1>
              <p className="au d3" style={{ fontSize:'1rem', fontWeight:500, color:'#0369a1', marginBottom:20 }}>
                Machine Learning · Data Science · Business Intelligence
              </p>

              {/* Contact row */}
              <div className="au d4" style={{ display:'flex', flexWrap:'wrap', gap:16, marginBottom:22, fontSize:'0.83rem', color:'#64748b' }}>
                <span>📍 Sylhet, Bangladesh</span>
                <a href="mailto:nakibuddin33@gmail.com" style={{ color:'#0369a1', textDecoration:'none', fontWeight:500 }}>nakibuddin33@gmail.com</a>
                <a href="tel:+8801646819354" style={{ color:'#0369a1', textDecoration:'none', fontWeight:500 }}>+880 1646-819354</a>
              </div>

              {/* Social buttons */}
              <div className="au d5" style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                {[
                  { label:'LinkedIn', href:'https://www.linkedin.com/in/nakib33' },
                  { label:'GitHub', href:'https://github.com/nakib33' },
                ].map(b => (
                  <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer" className="sb" style={{
                    padding:'8px 20px', borderRadius:50,
                    border:'1.5px solid #0369a1', color:'#0369a1',
                    fontSize:'0.82rem', fontWeight:600, textDecoration:'none',
                    background:'transparent',
                  }}>{b.label}</a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════ STATS ════════════════ */}
        <section style={{ background:'#fff', borderBottom:'1px solid #f1f5f9' }}>
          <div style={{ maxWidth:1080, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
            {stats.map((s,i) => (
              <div key={i} className="si" style={{
                padding:'28px 20px', textAlign:'center',
                borderRight: i<3 ? '1px solid #f1f5f9' : 'none',
              }}>
                <p className="sora" style={{ fontSize:'2.2rem', fontWeight:800, color:'#0c4a6e', lineHeight:1 }}>{s.value}</p>
                <p style={{ fontSize:'0.74rem', color:'#94a3b8', fontWeight:500, marginTop:5, textTransform:'uppercase', letterSpacing:'0.06em' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ MAIN CONTENT WRAPPER ════════════ */}
        <div style={{ maxWidth:1080, margin:'0 auto', padding:'0 32px' }}>

          {/* ════════════════ PROFESSIONAL SUMMARY ════════════════ */}
          <section id="home" style={{ padding:'70px 0 56px' }}>
            <div className="sh">
              <h2 className="sora" style={{ fontSize:'1.3rem', fontWeight:700, color:'#0c4a6e', whiteSpace:'nowrap' }}>Professional Summary</h2>
            </div>
            <p style={{ fontSize:'0.97rem', lineHeight:1.9, color:'#334155', maxWidth:860 }}>
              Motivated and goal-oriented Data Scientist and ML professional with <strong>4+ years of experience</strong> across data strategy, machine learning engineering, web development, and IT support. Passionate about machine learning, artificial intelligence, and data-driven problem solving. Experienced in research-related tasks and academic projects, aiming to publish quality research that creates real-world value. Proficient in <strong>Python, SQL, TensorFlow, PyTorch, Power BI</strong>, and modern ML workflows. Strong believer in disciplined, ethical, and consistent effort — committed to long-term growth and contributing to society through knowledge, research, and innovation.
            </p>
          </section>

          {/* ════════════════ RESEARCH INTERESTS ════════════════ */}
          <section style={{ paddingBottom:70 }}>
            <div className="sh">
              <h2 className="sora" style={{ fontSize:'1.3rem', fontWeight:700, color:'#0c4a6e', whiteSpace:'nowrap' }}>Research Interests</h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:18 }}>
              {researchInterests.map((r,i) => (
                <div key={i} className="rc ch" style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:12, padding:'22px 22px' }}>
                  <h3 className="sora" style={{ fontSize:'0.88rem', fontWeight:700, color:'#0c4a6e', marginBottom:8 }}>{r.title}</h3>
                  <p style={{ fontSize:'0.82rem', color:'#64748b', lineHeight:1.7 }}>{r.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════ PROFESSIONAL EXPERIENCE ════════════════ */}
          <section id="experience" style={{ paddingBottom:70 }}>
            <div className="sh">
              <h2 className="sora" style={{ fontSize:'1.3rem', fontWeight:700, color:'#0c4a6e', whiteSpace:'nowrap' }}>Professional Experience</h2>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              {experiences.map((exp,i) => (
                <div key={i} className="exp-card" style={{ background:'#fff', border:'1px solid #f1f5f9', borderLeft:'3px solid #e2e8f0', borderRadius:12, padding:'24px 26px' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:2 }}>
                    <h3 className="sora" style={{ fontSize:'1rem', fontWeight:700, color:'#0c4a6e' }}>{exp.role}</h3>
                    <span style={{ fontSize:'0.74rem', fontWeight:600, color:'#0369a1', background:'#f0f9ff', padding:'3px 12px', borderRadius:50, border:'1px solid #bae6fd', whiteSpace:'nowrap' }}>{exp.period}</span>
                  </div>
                  <p style={{ fontSize:'0.85rem', fontWeight:600, color:'#0369a1', marginBottom:2 }}>{exp.company}</p>
                  <p style={{ fontSize:'0.75rem', color:'#94a3b8', marginBottom:14 }}>{exp.detail}</p>
                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:7 }}>
                    {exp.bullets.map((b,j) => (
                      <li key={j} style={{ display:'flex', gap:10, fontSize:'0.855rem', color:'#475569', lineHeight:1.65 }}>
                        <span style={{ color:'#0369a1', flexShrink:0, fontWeight:700 }}>*</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════ EDUCATIONAL BACKGROUND ════════════════ */}
          <section style={{ paddingBottom:70 }}>
            <div className="sh">
              <h2 className="sora" style={{ fontSize:'1.3rem', fontWeight:700, color:'#0c4a6e', whiteSpace:'nowrap' }}>Educational Background</h2>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
              {education.map((edu,i) => (
                <div key={i} className="ch" style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:12, padding:'22px 26px', display:'flex', gap:20, alignItems:'flex-start' }}>
                  <div style={{ width:48, height:48, borderRadius:10, background:'#f0f9ff', border:'1px solid #bae6fd', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <svg width="22" height="22" fill="none" stroke="#0369a1" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5"/></svg>
                  </div>
                  <div style={{ flex:1 }}>
                    <h3 className="sora" style={{ fontSize:'0.95rem', fontWeight:700, color:'#0c4a6e', marginBottom:3 }}>{edu.degree}</h3>
                    <p style={{ fontSize:'0.85rem', fontWeight:600, color:'#0369a1' }}>{edu.institution}</p>
                    <p style={{ fontSize:'0.76rem', color:'#94a3b8', marginTop:2 }}>{edu.period}{edu.gpa ? ` · ${edu.gpa}` : ''}</p>
                    {edu.detail && <p style={{ fontSize:'0.83rem', color:'#64748b', marginTop:8, lineHeight:1.65 }}>{edu.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════ TECHNICAL SKILLS ════════════════ */}
          <section id="skills" style={{ paddingBottom:70 }}>
            <div className="sh">
              <h2 className="sora" style={{ fontSize:'1.3rem', fontWeight:700, color:'#0c4a6e', whiteSpace:'nowrap' }}>Technical Skills</h2>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
              {skillGroups.map((g,i) => (
                <div key={i} style={{ display:'flex', gap:20, alignItems:'baseline', flexWrap:'wrap', paddingBottom:18, borderBottom:'1px solid #f8fafc' }}>
                  <span style={{ fontSize:'0.78rem', fontWeight:700, color:'#0c4a6e', minWidth:180, flexShrink:0, textTransform:'uppercase', letterSpacing:'0.06em' }}>{g.label}</span>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                    {g.items.map(s => (
                      <span key={s} className="sp" style={{ fontSize:'0.8rem', fontWeight:500, padding:'5px 14px', borderRadius:50, background:'#f8fafc', color:'#0369a1', border:'1px solid #e2e8f0' }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
              {/* Languages row */}
              <div style={{ display:'flex', gap:20, alignItems:'baseline', flexWrap:'wrap', paddingBottom:18, borderBottom:'1px solid #f8fafc' }}>
                <span style={{ fontSize:'0.78rem', fontWeight:700, color:'#0c4a6e', minWidth:180, flexShrink:0, textTransform:'uppercase', letterSpacing:'0.06em' }}>Languages</span>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                  {['English — Professional', 'Bengali — Native'].map(l => (
                    <span key={l} className="sp" style={{ fontSize:'0.8rem', fontWeight:500, padding:'5px 14px', borderRadius:50, background:'#f8fafc', color:'#0369a1', border:'1px solid #e2e8f0' }}>{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════ RESEARCH PUBLICATIONS ════════════════ */}
          <section id="research" style={{ paddingBottom:70 }}>
            <div className="sh">
              <h2 className="sora" style={{ fontSize:'1.3rem', fontWeight:700, color:'#0c4a6e', whiteSpace:'nowrap' }}>Research Publications</h2>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              {[
                {
                  title: "Detecting Fraudulent Job Advertisements Using Artificial Intelligence",
                  body: "Applies natural language processing, feature engineering, and supervised classification models to identify deceptive patterns in online job postings — highlighting the importance of statistical evaluation, model reliability, and responsible AI deployment in real-world recruitment systems.",
                  tags: ["NLP", "Feature Engineering", "Classification", "Fraud Detection"],
                },
                {
                  title: "Machine Learning-Based Classification of Exoplanets",
                  body: "Explores ML-based classification of exoplanets using orbital and physical parameters. Statistical learning techniques are applied to astronomical datasets to support scientific discovery — demonstrating how AI can meaningfully contribute to astrophysics research.",
                  tags: ["Astronomy", "Classification", "Statistical Learning", "Scientific Discovery"],
                },
              ].map((p,i) => (
                <div key={i} className="ch" style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:12, padding:'26px 28px', position:'relative', overflow:'hidden' }}>
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,#0c4a6e,#38bdf8)' }} />
                  <h3 className="sora" style={{ fontSize:'0.97rem', fontWeight:700, color:'#0c4a6e', marginBottom:10, lineHeight:1.45 }}>{p.title}</h3>
                  <p style={{ fontSize:'0.855rem', color:'#475569', lineHeight:1.8, marginBottom:16 }}>{p.body}</p>
                  <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize:'0.72rem', fontWeight:600, padding:'4px 12px', borderRadius:50, background:'#0c4a6e', color:'#fff' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════ CERTIFICATIONS ════════════════ */}
          <section id="certifications" style={{ paddingBottom:70 }}>
            <div className="sh">
              <h2 className="sora" style={{ fontSize:'1.3rem', fontWeight:700, color:'#0c4a6e', whiteSpace:'nowrap' }}>Certifications</h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:14 }}>
              {certifications.map((c,i) => (
                <div key={i} className="cc" style={{ background:'#fafafa', border:'1px solid #f1f5f9', borderRadius:10, padding:'16px 18px', display:'flex', gap:12, alignItems:'flex-start' }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:'#0369a1', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:'#fff', fontSize:'0.8rem', fontWeight:700 }}>✓</div>
                  <div>
                    <p style={{ fontSize:'0.83rem', fontWeight:600, color:'#0c4a6e', lineHeight:1.4 }}>{c.name}</p>
                    <p style={{ fontSize:'0.73rem', color:'#94a3b8', marginTop:3 }}>{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════ EXTRACURRICULAR ════════════════ */}
          <section style={{ paddingBottom:70 }}>
            <div className="sh">
              <h2 className="sora" style={{ fontSize:'1.3rem', fontWeight:700, color:'#0c4a6e', whiteSpace:'nowrap' }}>Extracurricular Activities</h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:14 }}>
              {extra.map((e,i) => (
                <div key={i} className="cc" style={{ background:'#fafafa', border:'1px solid #f1f5f9', borderRadius:10, padding:'16px 18px', display:'flex', gap:12, alignItems:'flex-start' }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:'#0369a1', flexShrink:0, marginTop:5 }} />
                  <div>
                    <p style={{ fontSize:'0.84rem', fontWeight:600, color:'#0c4a6e' }}>{e.role}</p>
                    <p style={{ fontSize:'0.78rem', color:'#64748b', marginTop:2, lineHeight:1.5 }}>{e.org}</p>
                    <p style={{ fontSize:'0.72rem', color:'#94a3b8', marginTop:2 }}>{e.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>{/* END MAIN WRAPPER */}

        {/* ════════════════ CTA / CONTACT ════════════════ */}
        <section id="contact" style={{
          background:'linear-gradient(135deg,#0c4a6e 0%,#0369a1 100%)',
          padding:'72px 32px', textAlign:'center',
          position:'relative', overflow:'hidden',
        }}>
          <div style={{ position:'absolute', top:-80, right:-80, width:320, height:320, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.06)' }} />
          <div style={{ position:'absolute', bottom:-60, left:-60, width:240, height:240, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.06)' }} />
          <div style={{ position:'relative', zIndex:1, maxWidth:640, margin:'0 auto' }}>
            <h2 className="sora" style={{ fontSize:'clamp(1.6rem,3vw,2.2rem)', fontWeight:800, color:'#fff', marginBottom:12 }}>
              Interested in working together?
            </h2>
            <p style={{ color:'#bae6fd', fontSize:'0.93rem', marginBottom:32, lineHeight:1.7 }}>
              Open to full-time roles, freelance projects, and research collaborations.
            </p>
            <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:28 }}>
              <a href="mailto:nakibuddin33@gmail.com" style={{ padding:'11px 26px', borderRadius:50, background:'#fff', color:'#0c4a6e', fontWeight:700, fontSize:'0.87rem', textDecoration:'none', boxShadow:'0 4px 16px rgba(0,0,0,0.15)' }}>
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/nakib33" target="_blank" rel="noopener noreferrer" style={{ padding:'11px 26px', borderRadius:50, border:'1.5px solid rgba(255,255,255,0.35)', color:'#e0f2fe', fontWeight:600, fontSize:'0.87rem', textDecoration:'none' }}>
                LinkedIn
              </a>
              <a href="https://github.com/nakib33" target="_blank" rel="noopener noreferrer" style={{ padding:'11px 26px', borderRadius:50, border:'1.5px solid rgba(255,255,255,0.35)', color:'#e0f2fe', fontWeight:600, fontSize:'0.87rem', textDecoration:'none' }}>
                GitHub
              </a>
            </div>
            <p style={{ color:'#7dd3fc', fontSize:'0.8rem' }}>
              📞 +880 1646-819354 &nbsp;·&nbsp; ✉ nakibuddin33@gmail.com &nbsp;·&nbsp; linkedin.com/in/nakib33
            </p>
          </div>
        </section>

        {/* ════════════════ FOOTER ════════════════ */}
        <footer style={{ background:'#082f49', padding:'20px 32px', textAlign:'center' }}>
          <p style={{ fontSize:'0.77rem', color:'#7dd3fc' }}>© {new Date().getFullYear()} Nakib Uddin Ahmed — All rights reserved.</p>
        </footer>

      </div>
    </>
  );
}
