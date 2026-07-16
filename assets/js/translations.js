const translations = {
  fr: {
    "nav_about": "À propos",
    "nav_resume": "Parcours",
    "nav_portfolio": "Portfolio",
    "nav_certifications": "Certifications",
    "nav_contact": "Contact",
    "role": "Développeur IA & Full-Stack",
    "show_contacts": "Afficher les contacts",
    "email": "Email",
    "phone": "Téléphone",
    "location": "Localisation",
    "location_value": "Fianarantsoa, Madagascar",
    "github": "GitHub",
    "linkedin": "LinkedIn",
    "deployed_project": "Projet déployé",
    "about_title": "À propos de moi",
    "about_p1": "Développeur passionné par l'intelligence artificielle, l'orchestration de processus et le cloud. Autonome et curieux, j'ai mené à bien plusieurs projets concrets : applications mobiles (Flutter), API backend (Node.js, Flask), workflows BPM (Bonita), déploiements Kubernetes (GKE, Minikube) et modélisation multi-agents (NetLogo, GPT-4).",
    "about_p2": "Je maîtrise la chaîne complète de développement et je m'adapte rapidement à toute nouvelle technologie. Recherche stage de fin d'études (Master 2) de 3 à 4 mois à Fianarantsoa ou en full remote, disponible immédiatement.",
    "what_im_doing": "Ce que je fais",
    "service_fullstack_title": "Développement Full-Stack Web & Mobile",
    "service_fullstack_desc": "Création d'applications web et mobiles robustes avec React, Node.js, et Flutter. De la conception de l'API à l'interface utilisateur.",
    "service_ia_title": "Intelligence Artificielle & Data",
    "service_ia_desc": "Intégration d'IA générative (GPT-4, Whisper) et de modèles de machine learning (Random Forest, K-Means) pour résoudre des problèmes complexes.",
    "service_devops_title": "DevOps & Cloud",
    "service_devops_desc": "Déploiement d'architectures scalables avec Docker et Kubernetes (GKE, Minikube) et intégration continue.",
    "service_bpm_title": "Orchestration & BPM",
    "service_bpm_desc": "Automatisation et modélisation de processus métiers complexes avec Bonita BPM et n8n.",
    "tech_stack": "Technologies maîtrisées",
    "resume_title": "Parcours",
    "education": "Formations",
    "edu_m2": "Master 2 en Informatique",
    "edu_m2_school": "École Nationale d'Informatique (ENI) - Fianarantsoa",
    "edu_m2_desc": "Parcours Informatique Générale. En cours.",
    "edu_l3": "Licence Professionnelle en Informatique",
    "edu_l3_school": "École Nationale d'Informatique (ENI) - Fianarantsoa",
    "edu_bac": "Baccalauréat Général - Série D",
    "edu_bac_school": "Lycée Raherivelo Ramamonjy - Fianarantsoa",
    "experience": "Expériences & Projets Sélectionnés",
    "exp_churn": "Prédiction du Churn - KNIME & Data Mining",
    "exp_churn_d1": "Pipeline ETL complet (7 043 clients, 21 variables). Random Forest (Accuracy: 85%, AUC: 0.86).",
    "exp_churn_d2": "Clustering K-Means (3 profils de risque). Export Excel avec recommandations métier.",
    "exp_irrigation": "SMA Irrigation Intelligente - NetLogo",
    "exp_irrigation_d1": "Simulation multi-agents IoT : capteurs, irrigateurs, météo dynamique. Économie d'eau > 35%.",
    "exp_hotel": "Hotel/Restaurant - Orchestration Bonita BPM",
    "exp_hotel_d1": "Architecture SOA, 5 processus BPMN. Services REST Node.js. Automatisation Messenger via n8n.",
    "exp_bg": "BG Remover Pro - Suppression d'arrière-plan IA",
    "exp_bg_d1": "Modèle ISNet via rembg (alpha matting, post-processing NumPy), backend Flask hexagonal.",
    "exp_bg_d2": "Frontend vanilla JS : drag & drop, canvas interactif (gomme, pinceau). Docker + Gunicorn sur HF Spaces.",
    "exp_video": "VideoIA - Génération de vidéos virales par IA",
    "exp_video_d1": "Architecture SaaS : Flutter + Node.js/BullMQ (Redis) + GPU worker Python.",
    "exp_video_d2": "Whisper (transcription), SadTalker (animation), Edge-TTS. Paiements Stripe.",
    "exp_multi": "Plateforme Multi-Agents IA",
    "exp_multi_d1": "4 agents Python collaborant via superviseur (scraping, résumé, traduction, publication).",
    "exp_multi_d2": "OpenAI GPT-4 pour résumé automatique et traduction multilingue (8 langues), Notion API.",
    "exp_ecollecte": "Développeur Full-Stack (Stage) — Projet E-Collecte (ISERP)",
    "exp_ecollecte_d1": "Application mobile Flutter de collecte de données sur terrain.",
    "exp_ecollecte_d2": "Back-end Node.js/TypeScript avec Express.js, Prisma ORM et MySQL.",
    "exp_ecollecte_d3": "Projet réalisé en totale autonomie.",
    "exp_commune": "Développeur Web (Stage) — Commune Urbaine de Fianarantsoa",
    "exp_commune_d1": "Application web de gestion de l'urbanisme (PHP & WordPress).",
    "exp_commune_d2": "Réalisé en hybride, en totale autonomie.",
    "exp_autoplan": "AutoPlan ENI - Génération d'emplois du temps",
    "exp_autoplan_d1": "Algorithme CSP (AC-3, MRV, Min-Conflicts) — Flutter + Node.js + Python FastAPI.",
    "exp_mern": "MERN sur Kubernetes/GKE",
    "exp_mern_d1": "Déploiement stack MERN complète sur Google Kubernetes Engine avec CI/CD.",
    "exp_gestion": "Gestion de Produits - React Native",
    "exp_gestion_d1": "Application mobile React Native + backend Node.js/Express pour gestion de stock.",
    "level_avance": "Avancé",
    "level_inter": "Intermédiaire",
    "date_mai2026": "Mai 2026",
    "date_avr2026": "Avril 2026",
    "date_mar2026": "Mars 2026",
    "date_fev2026": "Février 2026",
    "date_sep2025": "Septembre 2025",
    "date_stage2": "Sep. 2024 – Déc. 2024",
    "date_stage1": "Sept. – Nov. 2023",
    "skills_title": "Mes Compétences",
    "skill_lang": "Langages (JS/TS, Python, Dart, SQL, Prolog)",
    "skill_front": "Frontend (React, Flutter, React Native)",
    "skill_back": "Backend (Node.js, Express, Flask, Prisma)",
    "skill_db": "Base de données (PostgreSQL, MySQL, MongoDB)",
    "skill_ai": "IA & Data (GPT-4, rembg, KNIME, scikit-learn)",
    "skill_devops": "DevOps & Cloud (Docker, K8s, GCP, CI/CD)",
    "skill_bpm": "Orchestration (Bonita BPM, n8n)",
    "portfolio_title": "Portfolio",
    "filter_all": "Tous",
    "filter_fs": "Full-Stack",
    "filter_ia": "IA & Data",
    "filter_app": "Applications",
    "cat_fs": "Full-Stack",
    "cat_ia": "IA & Data",
    "cat_app": "Applications",
    "certif_title": "Certifications & Intérêts",
    "certif_subtitle": "Certifications obtenues",
    "certif_huawei": "Huawei ICT Competition - Préliminaires réussies (2025)",
    "certif_odc1": "Hack ta 1ère carte électronique - Orange Digital Center (2025)",
    "certif_odc2": "Monétisation d'applications et services digitaux - Orange Digital Center (2026)",
    "lang_title": "Langues",
    "lang_mg": "Malgache : Langue maternelle",
    "lang_fr": "Français : Courant (écrit, technique)",
    "lang_en": "Anglais : Technique (documentation, échanges pro)",
    "interest_title": "Centres d'intérêt",
    "int_1": "Veille techno (IA générative, cloud native)",
    "int_2": "Open source et partage de connaissances",
    "int_3": "Participation aux compétitions tech",
    "contact_title": "Contact",
    "contact_form_title": "Formulaire de Contact",
    "form_name": "Nom complet",
    "form_email": "Adresse email",
    "form_message": "Votre Message",
    "form_submit": "Envoyer le message"
  },
  en: {
    "nav_about": "About",
    "nav_resume": "Resume",
    "nav_portfolio": "Portfolio",
    "nav_certifications": "Certifications",
    "nav_contact": "Contact",
    "role": "AI & Full-Stack Developer",
    "show_contacts": "Show Contacts",
    "email": "Email",
    "phone": "Phone",
    "location": "Location",
    "location_value": "Fianarantsoa, Madagascar",
    "github": "GitHub",
    "linkedin": "LinkedIn",
    "deployed_project": "Deployed Project",
    "about_title": "About Me",
    "about_p1": "A developer passionate about Artificial Intelligence, process orchestration, and cloud technologies. Autonomous and curious, I have successfully completed several real-world projects: mobile apps (Flutter), backend APIs (Node.js, Flask), BPM workflows (Bonita), Kubernetes deployments (GKE, Minikube), and multi-agent modeling (NetLogo, GPT-4).",
    "about_p2": "I master the complete development chain and adapt quickly to any new technology. Currently seeking a 3 to 4-month end-of-studies internship (Master 2) in Fianarantsoa or full remote, available immediately.",
    "what_im_doing": "What I'm Doing",
    "service_fullstack_title": "Full-Stack Web & Mobile Development",
    "service_fullstack_desc": "Creating robust web and mobile applications with React, Node.js, and Flutter. From API design to user interface.",
    "service_ia_title": "Artificial Intelligence & Data",
    "service_ia_desc": "Integrating generative AI (GPT-4, Whisper) and machine learning models (Random Forest, K-Means) to solve complex problems.",
    "service_devops_title": "DevOps & Cloud",
    "service_devops_desc": "Deploying scalable architectures with Docker and Kubernetes (GKE, Minikube) and continuous integration.",
    "service_bpm_title": "Orchestration & BPM",
    "service_bpm_desc": "Automating and modeling complex business processes using Bonita BPM and n8n.",
    "tech_stack": "Technologies Mastered",
    "resume_title": "Resume",
    "education": "Education",
    "edu_m2": "Master's Degree in Computer Science",
    "edu_m2_school": "National School of Computer Science (ENI) - Fianarantsoa",
    "edu_m2_desc": "General Computer Science major. Ongoing.",
    "edu_l3": "Bachelor's Degree in Computer Science",
    "edu_l3_school": "National School of Computer Science (ENI) - Fianarantsoa",
    "edu_bac": "High School Diploma - Science",
    "edu_bac_school": "Raherivelo Ramamonjy High School - Fianarantsoa",
    "experience": "Selected Experience & Projects",
    "exp_churn": "Churn Prediction - KNIME & Data Mining",
    "exp_churn_d1": "Complete ETL pipeline (7,043 clients, 21 variables). Random Forest (Accuracy: 85%, AUC: 0.86).",
    "exp_churn_d2": "K-Means Clustering (3 risk profiles). Excel export with business recommendations.",
    "exp_irrigation": "Smart Irrigation MAS - NetLogo",
    "exp_irrigation_d1": "IoT multi-agent simulation: sensors, irrigators, dynamic weather. Water savings > 35%.",
    "exp_hotel": "Hotel/Restaurant - Bonita BPM Orchestration",
    "exp_hotel_d1": "SOA architecture, 5 BPMN processes. Node.js REST services. Messenger automation via n8n.",
    "exp_bg": "BG Remover Pro - AI Background Removal",
    "exp_bg_d1": "ISNet model via rembg (alpha matting, NumPy post-processing), hexagonal Flask backend.",
    "exp_bg_d2": "Vanilla JS frontend: drag & drop, interactive canvas. Docker + Gunicorn on HF Spaces.",
    "exp_video": "VideoIA - Viral Video Generation via AI",
    "exp_video_d1": "SaaS Architecture: Flutter + Node.js/BullMQ (Redis) + Python GPU worker.",
    "exp_video_d2": "Whisper (transcription), SadTalker (animation), Edge-TTS. Stripe payments.",
    "exp_multi": "AI Multi-Agent Platform",
    "exp_multi_d1": "4 collaborating Python agents via a supervisor (scraping, summarizing, translation, publishing).",
    "exp_multi_d2": "OpenAI GPT-4 for automatic summarization and multilingual translation (8 languages), Notion API.",
    "exp_ecollecte": "Full-Stack Developer (Internship) — E-Collecte Project (ISERP)",
    "exp_ecollecte_d1": "Flutter mobile application for field data collection.",
    "exp_ecollecte_d2": "Node.js/TypeScript backend with Express.js, Prisma ORM, and MySQL.",
    "exp_ecollecte_d3": "Project carried out in complete autonomy.",
    "exp_commune": "Web Developer (Internship) — Commune Urbaine de Fianarantsoa",
    "exp_commune_d1": "Urban planning management web application (PHP & WordPress).",
    "exp_commune_d2": "Completed in a hybrid setup, in complete autonomy.",
    "exp_autoplan": "AutoPlan ENI - Schedule Generation",
    "exp_autoplan_d1": "CSP Algorithm (AC-3, MRV, Min-Conflicts) — Flutter + Node.js + Python FastAPI.",
    "exp_mern": "MERN on Kubernetes/GKE",
    "exp_mern_d1": "Full MERN stack deployment on Google Kubernetes Engine with CI/CD.",
    "exp_gestion": "Product Management - React Native",
    "exp_gestion_d1": "React Native mobile app + Node.js/Express backend for stock management.",
    "level_avance": "Advanced",
    "level_inter": "Intermediate",
    "date_mai2026": "May 2026",
    "date_avr2026": "April 2026",
    "date_mar2026": "March 2026",
    "date_fev2026": "February 2026",
    "date_sep2025": "September 2025",
    "date_stage2": "Sep. 2024 – Dec. 2024",
    "date_stage1": "Sept. – Nov. 2023",
    "skills_title": "My Skills",
    "skill_lang": "Languages (JS/TS, Python, Dart, SQL, Prolog)",
    "skill_front": "Frontend (React, Flutter, React Native)",
    "skill_back": "Backend (Node.js, Express, Flask, Prisma)",
    "skill_db": "Databases (PostgreSQL, MySQL, MongoDB)",
    "skill_ai": "AI & Data (GPT-4, rembg, KNIME, scikit-learn)",
    "skill_devops": "DevOps & Cloud (Docker, K8s, GCP, CI/CD)",
    "skill_bpm": "Orchestration (Bonita BPM, n8n)",
    "portfolio_title": "Portfolio",
    "filter_all": "All",
    "filter_fs": "Full-Stack",
    "filter_ia": "AI & Data",
    "filter_app": "Applications",
    "cat_fs": "Full-Stack",
    "cat_ia": "AI & Data",
    "cat_app": "Applications",
    "certif_title": "Certifications & Interests",
    "certif_subtitle": "Obtained Certifications",
    "certif_huawei": "Huawei ICT Competition - Passed Preliminaries (2025)",
    "certif_odc1": "Hack your first electronic board - Orange Digital Center (2025)",
    "certif_odc2": "App & Digital Service Monetization - Orange Digital Center (2026)",
    "lang_title": "Languages",
    "lang_mg": "Malagasy: Native",
    "lang_fr": "French: Fluent (written, technical)",
    "lang_en": "English: Technical (documentation, pro exchanges)",
    "interest_title": "Interests",
    "int_1": "Tech watch (Generative AI, Cloud Native)",
    "int_2": "Open source & knowledge sharing",
    "int_3": "Participation in tech competitions",
    "contact_title": "Contact",
    "contact_form_title": "Contact Form",
    "form_name": "Full name",
    "form_email": "Email address",
    "form_message": "Your Message",
    "form_submit": "Send Message"
  }
};

let currentLang = 'fr';

function setLanguage(lang) {
  currentLang = lang;
  
  // Update translation attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Check if it's an input placeholder or standard text
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update active state of language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Save to local storage
  localStorage.setItem('portfolio_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // Determine default language
  let userLang = localStorage.getItem('portfolio_lang') || navigator.language || navigator.userLanguage;
  if (userLang.startsWith('en')) {
    setLanguage('en');
  } else {
    setLanguage('fr');
  }

  // Setup language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      setLanguage(e.target.getAttribute('data-lang'));
    });
  });
});
