const projectsData = {
  "autoplan": {
    title: "AutoPlan ENI",
    category: "Full-Stack",
    image: "./assets/images/capture adomc/miniature.png",
    github: "https://github.com/shanny-lala/CDC_ADOMC_EmploiDuTemps_ENI",
    demo: "",
    youtube: "https://youtu.be/j92P8c5s7J4",
    screenshots: [
      { src: "./assets/images/capture adomc/interface connexion.png", caption: "Connexion", class: "desktop" },
      { src: "./assets/images/capture adomc/dashboard.png", caption: "Tableau de Bord", class: "desktop" },
      { src: "./assets/images/capture adomc/interfaces salles.png", caption: "Gestion des Salles", class: "desktop" },
      { src: "./assets/images/capture adomc/interfaces enseignants.png", caption: "Gestion des Enseignants", class: "desktop" },
      { src: "./assets/images/capture adomc/interface matiere.png", caption: "Configuration Matières", class: "desktop" },
      { src: "./assets/images/capture adomc/interface groupe.png", caption: "Gestion des Groupes", class: "desktop" },
      { src: "./assets/images/capture adomc/interface génération automatique des mes EDT.png", caption: "Configuration Génération", class: "desktop" },
      { src: "./assets/images/capture adomc/génération d'emploi du temps 50%.png", caption: "En cours de génération", class: "desktop" },
      { src: "./assets/images/capture adomc/Planing.png", caption: "Résultat (Planning)", class: "desktop" }
    ],
    desc_fr: `<h3>1. Vue d'ensemble</h3>
<p><strong>AutoPlan ENI</strong> est une solution complète de génération et de gestion automatique d'emplois du temps conçue spécifiquement pour l'École Nationale d'Informatique (ENI). Le système repose sur un puissant moteur de contraintes (CSP) couplé à une API moderne et une application multiplateforme.</p>

<h4>Fonctionnalités Principales</h4>
<ul>
  <li><strong>Génération Automatique</strong> : Algorithme CSP avancé avec propagation AC-3, heuristiques MRV + Degré, et Min-Conflicts pour trouver des horaires optimaux.</li>
  <li><strong>Gestion Complète</strong> : Interface intuitive pour gérer les enseignants, les groupes, les matières et les salles.</li>
  <li><strong>Tableau de Bord</strong> : Vue d'ensemble des statistiques et de l'état du système.</li>
  <li><strong>Visualisation Interactive</strong> : Affichage clair et détaillé des plannings générés.</li>
</ul>

<h3>2. Architecture du Projet</h3>
<p>Le projet est divisé en trois composants majeurs :</p>
<ul>
  <li><strong>autoplan_app (Frontend)</strong> : Application cliente développée avec <strong>Flutter (Dart)</strong> offrant l'interface utilisateur pour les administrateurs et les utilisateurs.</li>
  <li><strong>autoplan-api (Backend Principal)</strong> : API REST en <strong>Node.js (Express, Prisma, PostgreSQL/MySQL)</strong> servant d'intermédiaire entre l'application, la base de données et le solveur. Elle gère l'authentification et le CRUD des entités.</li>
  <li><strong>autoplan-solver (Moteur de Contraintes)</strong> : Microservice en <strong>Python (FastAPI)</strong> qui reçoit les données, applique l'algorithme CSP et renvoie un emploi du temps valide.</li>
</ul>

<h3>Récapitulatif chiffré</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">Flutter</span><span class="stat-label">Frontend App</span></div>
  <div class="stat-card"><span class="stat-number">Node.js</span><span class="stat-label">Backend API</span></div>
  <div class="stat-card"><span class="stat-number">Python</span><span class="stat-label">Solveur CSP</span></div>
  <div class="stat-card"><span class="stat-number">CSP</span><span class="stat-label">Algorithme</span></div>
</div>`,
    desc_en: `<h3>1. Overview</h3>
<p><strong>AutoPlan ENI</strong> is a complete automated schedule generation and management solution designed specifically for the National School of Computer Science (ENI). The system relies on a powerful Constraint Satisfaction Problem (CSP) engine coupled with a modern API and a cross-platform application.</p>

<h4>Key Features</h4>
<ul>
  <li><strong>Automated Generation</strong>: Advanced CSP algorithm with AC-3 propagation, MRV + Degree heuristics, and Min-Conflicts to find optimal schedules.</li>
  <li><strong>Comprehensive Management</strong>: Intuitive interface to manage teachers, groups, subjects, and rooms.</li>
  <li><strong>Dashboard</strong>: Overview of statistics and system status.</li>
  <li><strong>Interactive Visualization</strong>: Clear and detailed display of generated schedules.</li>
</ul>

<h3>2. Project Architecture</h3>
<p>The project is divided into three major components:</p>
<ul>
  <li><strong>autoplan_app (Frontend)</strong>: Client application developed with <strong>Flutter (Dart)</strong> providing the user interface for administrators and users.</li>
  <li><strong>autoplan-api (Main Backend)</strong>: REST API in <strong>Node.js (Express, Prisma, PostgreSQL/MySQL)</strong> acting as an intermediary between the application, database, and solver. It handles authentication and entity CRUD.</li>
  <li><strong>autoplan-solver (Constraint Engine)</strong>: Microservice in <strong>Python (FastAPI)</strong> that receives data, applies the CSP algorithm, and returns a valid schedule.</li>
</ul>

<h3>Quantitative Summary</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">Flutter</span><span class="stat-label">Frontend App</span></div>
  <div class="stat-card"><span class="stat-number">Node.js</span><span class="stat-label">Backend API</span></div>
  <div class="stat-card"><span class="stat-number">Python</span><span class="stat-label">CSP Solver</span></div>
  <div class="stat-card"><span class="stat-number">CSP</span><span class="stat-label">Algorithm</span></div>
</div>`
  },
  "gestion-produits": {
    title: "Gestion de Produits",
    category: "Applications",
    image: "./assets/images/capture react native/miniature.png",
    github: "https://github.com/shanny-lala/gestion-de-produits",
    demo: "",
    youtube: "",
    screenshots: [
      { src: "./assets/images/capture react native/tableau de bord.jpg", caption: "Tableau de Bord" },
      { src: "./assets/images/capture react native/les actions editer et supprimer.jpg", caption: "Actions (Éditer / Supprimer)" },
      { src: "./assets/images/capture react native/editer un produit.jpg", caption: "Formulaire d'édition" },
      { src: "./assets/images/capture react native/statistiques 1.jpg", caption: "Statistiques — Histogramme" },
      { src: "./assets/images/capture react native/statistiques 2.jpg", caption: "Statistiques — Camembert" }
    ],
    desc_fr: `<h3>1. Vue d'ensemble</h3>
<p><strong>Gestion de Produits</strong> est une application mobile full-stack de gestion d'inventaire développée avec <strong>React Native (Expo)</strong>. Elle permet de gérer un catalogue de produits avec les fonctionnalités CRUD complètes, des statistiques agrégées en temps réel et une visualisation graphique via histogramme et camembert.</p>

<h4>Fonctionnalités</h4>
<ul>
  <li><strong>Ajouter un produit</strong> : Formulaire avec <code>numProduit</code>, <code>design</code>, <code>prix</code>, <code>quantité</code>.</li>
  <li><strong>Afficher la liste</strong> : FlatList scrollable avec <code>montant = prix × quantité</code> calculé automatiquement.</li>
  <li><strong>Modifier / Supprimer</strong> : Édition via modal pré-rempli, suppression avec confirmation.</li>
  <li><strong>Statistiques globales</strong> : Barre fixe affichant montant Min / Max / Total.</li>
  <li><strong>Graphiques</strong> : Visualisation en histogramme (bar chart) et camembert (pie chart).</li>
  <li><strong>Synchronisation</strong> : Pull-to-refresh pour recharger les données depuis le serveur.</li>
</ul>

<h3>2. Architecture du Projet</h3>
<ul>
  <li><strong>mobile/</strong> (Frontend) : Application <strong>React Native + Expo</strong> avec React Navigation, Axios et react-native-chart-kit.</li>
  <li><strong>server/</strong> (Backend) : API REST <strong>Node.js + Express</strong> connectée à une base de données <strong>PostgreSQL</strong>.</li>
</ul>

<h3>Récapitulatif chiffré</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">React Native</span><span class="stat-label">Frontend Mobile</span></div>
  <div class="stat-card"><span class="stat-number">Node.js</span><span class="stat-label">Backend API</span></div>
  <div class="stat-card"><span class="stat-number">PostgreSQL</span><span class="stat-label">Base de données</span></div>
  <div class="stat-card"><span class="stat-number">CRUD</span><span class="stat-label">+ Graphiques</span></div>
</div>`,
    desc_en: `<h3>1. Overview</h3>
<p><strong>Product Management</strong> is a full-stack mobile inventory management application built with <strong>React Native (Expo)</strong>. It allows managing a product catalog with full CRUD features, real-time aggregated statistics, and graphical visualization via bar chart and pie chart.</p>

<h4>Features</h4>
<ul>
  <li><strong>Add a product</strong>: Form with <code>productNum</code>, <code>design</code>, <code>price</code>, <code>quantity</code>.</li>
  <li><strong>Display list</strong>: Scrollable FlatList with <code>amount = price × quantity</code> auto-calculated.</li>
  <li><strong>Edit / Delete</strong>: Editing via pre-filled modal, deletion with confirmation.</li>
  <li><strong>Global Statistics</strong>: Fixed bar displaying Min / Max / Total amount.</li>
  <li><strong>Charts</strong>: Visualization via bar chart and pie chart.</li>
  <li><strong>Synchronization</strong>: Pull-to-refresh to reload data from the server.</li>
</ul>

<h3>2. Project Architecture</h3>
<ul>
  <li><strong>mobile/</strong> (Frontend): <strong>React Native + Expo</strong> app with React Navigation, Axios, and react-native-chart-kit.</li>
  <li><strong>server/</strong> (Backend): REST API <strong>Node.js + Express</strong> connected to a <strong>PostgreSQL</strong> database.</li>
</ul>

<h3>Quantitative Summary</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">React Native</span><span class="stat-label">Mobile Frontend</span></div>
  <div class="stat-card"><span class="stat-number">Node.js</span><span class="stat-label">Backend API</span></div>
  <div class="stat-card"><span class="stat-number">PostgreSQL</span><span class="stat-label">Database</span></div>
  <div class="stat-card"><span class="stat-number">CRUD</span><span class="stat-label">+ Charts</span></div>
</div>`
  },
  "bg-remover": {
    title: "BG Remover Pro",
    category: "IA & Data",
    image: "./assets/images/capture background remover/miniature.png",
    github: "https://github.com/shanny-lala/bg-remover-pro",
    demo: "https://shanny01-bg-remover-api.hf.space",
    youtube: "https://youtu.be/PDmwpifNIvY",
    screenshots: [
      { src: "./assets/images/capture background remover/capture 1.png", caption: "Interface Principale", class: "desktop" },
      { src: "./assets/images/capture background remover/capture 2.png", caption: "Résultat IA (Transparent)", class: "desktop" },
      { src: "./assets/images/capture background remover/capture 3.png", caption: "Outil Gomme / Canvas", class: "desktop" },
      { src: "./assets/images/capture background remover/capture 4.png", caption: "Changement de fond", class: "desktop" },
      { src: "./assets/images/capture background remover/mobile 1.jpg", caption: "Vue Mobile 1" },
      { src: "./assets/images/capture background remover/mobile 2.jpg", caption: "Vue Mobile 2" },
      { src: "./assets/images/capture background remover/mobile 3.jpg", caption: "Vue Mobile 3" },
      { src: "./assets/images/capture background remover/mobile 4.jpg", caption: "Vue Mobile 4" },
      { src: "./assets/images/capture background remover/image fond transparent.png", caption: "Export PNG", class: "desktop" }
    ],
    desc_fr: `<h3>1. Aperçu de l'Application</h3>
<p>Une application web full-stack qui supprime automatiquement l'arrière-plan des images grâce au modèle IA <strong>ISNet</strong> (via <code>rembg</code>). L'interface glassmorphism moderne permet également de retoucher le résultat, changer le fond en temps réel et télécharger l'image dans plusieurs formats.</p>

<h4>Fonctionnalités Clés</h4>
<ul>
  <li><strong>IA haute qualité</strong> : Modèle <code>isnet-general-use</code> avec alpha matting agressif</li>
  <li><strong>Multi-formats</strong> : Export en PNG (fond transparent), JPEG (fond blanc) ou SVG (vectoriel)</li>
  <li><strong>Changement de fond</strong> : Fond transparent, couleur unie, couleur personnalisée ou image importée</li>
  <li><strong>Retouche à la gomme</strong> : Outil gomme interactif sur canvas avec taille de pinceau réglable</li>
  <li><strong>Drag & Drop</strong> : Glisser-déposer ou clic pour uploader (PNG, JPG, WEBP — max 20 Mo)</li>
  <li><strong>Aperçu en temps réel</strong> : Comparaison Avant/Après instantanée après traitement</li>
</ul>

<h3>2. Architecture Clean / Hexagonale</h3>
<p>Le projet suit une architecture <strong>Clean Architecture / Hexagonale</strong> côté backend, séparant clairement l'infrastructure de la logique métier.</p>
<ul>
  <li><strong>Core</strong> : <code>ImageProcessorInterface</code> abstrait et Cas d'usage (<code>RemoveBackgroundUseCase</code>)</li>
  <li><strong>Infrastructure</strong> : Implémentation concrète via <code>RembgProcessor</code> et post-processing NumPy</li>
  <li><strong>Web</strong> : Routes API avec Flask</li>
</ul>

<h3>3. Technologies & Déploiement</h3>
<ul>
  <li><strong>Backend</strong> : Flask 3.0, flask-cors, rembg 2.0 (ISNet), Pillow 10, NumPy, Gunicorn 21</li>
  <li><strong>Frontend</strong> : HTML5, Vanilla CSS (Glassmorphism), JavaScript (Canvas API), sans framework externe</li>
  <li><strong>Déploiement</strong> : Conteneurisé avec Docker (Python 3.11) et déployé sur Hugging Face Spaces</li>
</ul>

<h3>Récapitulatif chiffré</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">ISNet</span><span class="stat-label">Modèle IA</span></div>
  <div class="stat-card"><span class="stat-number">Flask</span><span class="stat-label">Backend API</span></div>
  <div class="stat-card"><span class="stat-number">3</span><span class="stat-label">Formats (PNG/JPG/SVG)</span></div>
  <div class="stat-card"><span class="stat-number">Docker</span><span class="stat-label">Conteneurisation</span></div>
</div>`,
    desc_en: `<h3>1. Application Overview</h3>
<p>A full-stack web application that automatically removes image backgrounds using the <strong>ISNet</strong> AI model (via <code>rembg</code>). The modern glassmorphism interface also allows users to retouch the result, change the background in real-time, and download the image in multiple formats.</p>

<h4>Key Features</h4>
<ul>
  <li><strong>High-quality AI</strong>: <code>isnet-general-use</code> model with aggressive alpha matting</li>
  <li><strong>Multi-format</strong>: Export to PNG (transparent), JPEG (white), or SVG (vector)</li>
  <li><strong>Background Change</strong>: Transparent, solid colors, custom colors, or imported image</li>
  <li><strong>Eraser Retouch</strong>: Interactive eraser tool on canvas with adjustable brush size</li>
  <li><strong>Drag & Drop</strong>: Drag and drop or click to upload (PNG, JPG, WEBP — max 20 MB)</li>
  <li><strong>Real-time Preview</strong>: Instant Before/After comparison post-processing</li>
</ul>

<h3>2. Clean / Hexagonal Architecture</h3>
<p>The project follows a <strong>Clean / Hexagonal Architecture</strong> on the backend, clearly separating infrastructure from business logic.</p>
<ul>
  <li><strong>Core</strong>: Abstract <code>ImageProcessorInterface</code> and Use Cases (<code>RemoveBackgroundUseCase</code>)</li>
  <li><strong>Infrastructure</strong>: Concrete implementation via <code>RembgProcessor</code> and NumPy post-processing</li>
  <li><strong>Web</strong>: API Routes with Flask</li>
</ul>

<h3>3. Technologies & Deployment</h3>
<ul>
  <li><strong>Backend</strong>: Flask 3.0, flask-cors, rembg 2.0 (ISNet), Pillow 10, NumPy, Gunicorn 21</li>
  <li><strong>Frontend</strong>: HTML5, Vanilla CSS (Glassmorphism), JavaScript (Canvas API), frameworkless</li>
  <li><strong>Deployment</strong>: Containerized with Docker (Python 3.11) and deployed on Hugging Face Spaces</li>
</ul>

<h3>Quantitative Summary</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">ISNet</span><span class="stat-label">AI Model</span></div>
  <div class="stat-card"><span class="stat-number">Flask</span><span class="stat-label">API Backend</span></div>
  <div class="stat-card"><span class="stat-number">3</span><span class="stat-label">Formats (PNG/JPG/SVG)</span></div>
  <div class="stat-card"><span class="stat-number">Docker</span><span class="stat-label">Containerization</span></div>
</div>`
  },
  "multi-agent": {
    title: "Plateforme Multi-Agents IA",
    category: "IA & Data",
    image: "./assets/images/project_multi_agent.png",
    github: "https://github.com/shanny-lala/ai-multi-agent-orchestrator",
    demo: "",
    youtube: "",
    desc_fr: `<h3>1. Vue d'ensemble</h3>
<p>Plateforme d'orchestration multi-agents pour automatiser le traitement d'articles web : scraping, résumé, traduction et publication automatique sur Notion.</p>

<h4>Workflow automatisé</h4>
<ul>
  <li><strong>Agent A (Scraper)</strong> : Récupération intelligente du contenu avec <code>newspaper3k</code> et <code>BeautifulSoup</code>.</li>
  <li><strong>Agent B (Summarizer)</strong> : Génération de résumés concis via l'API <strong>OpenAI GPT-4</strong>.</li>
  <li><strong>Agent C (Translator)</strong> : Traduction multilingue (8 langues supportées) avec <strong>OpenAI GPT-4</strong>.</li>
  <li><strong>Agent D (Publisher)</strong> : Publication automatique sur <strong>Notion</strong> avec gestion des métadonnées et tags.</li>
</ul>

<h3>2. Architecture & Orchestration</h3>
<p>Le système est coordonné par un <strong>Superviseur (Orchestrator)</strong> qui gère le workflow séquentiel, assure un retry automatique en cas d'échec (robustesse) et génère un reporting détaillé du traitement.</p>

<h3>3. Technologies & Déploiement</h3>
<ul>
  <li><strong>Langage & Outils</strong> : Python 3.12, Pydantic (validation de configuration)</li>
  <li><strong>APIs</strong> : OpenAI GPT-4 API, Notion API</li>
  <li><strong>Déploiement</strong> : Application entièrement <strong>Dockerisée</strong> (Dockerfile et docker-compose) pour un déploiement simplifié et prêt pour la production.</li>
</ul>

<h3>Récapitulatif chiffré</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">4</span><span class="stat-label">Agents IA</span></div>
  <div class="stat-card"><span class="stat-number">GPT-4</span><span class="stat-label">Modèle IA</span></div>
  <div class="stat-card"><span class="stat-number">8</span><span class="stat-label">Langues</span></div>
  <div class="stat-card"><span class="stat-number">Docker</span><span class="stat-label">Conteneurisation</span></div>
</div>`,
    desc_en: `<h3>1. Overview</h3>
<p>Multi-agent orchestration platform to automate the processing of web articles: scraping, summarization, translation, and automatic publishing on Notion.</p>

<h4>Automated Workflow</h4>
<ul>
  <li><strong>Agent A (Scraper)</strong>: Intelligent content retrieval using <code>newspaper3k</code> and <code>BeautifulSoup</code>.</li>
  <li><strong>Agent B (Summarizer)</strong>: Generation of concise summaries via the <strong>OpenAI GPT-4</strong> API.</li>
  <li><strong>Agent C (Translator)</strong>: Multilingual translation (8 supported languages) with <strong>OpenAI GPT-4</strong>.</li>
  <li><strong>Agent D (Publisher)</strong>: Automatic publication on <strong>Notion</strong> with metadata and tag management.</li>
</ul>

<h3>2. Architecture & Orchestration</h3>
<p>The system is coordinated by a <strong>Supervisor (Orchestrator)</strong> that manages the sequential workflow, ensures automatic retry in case of failure (robustness), and generates detailed processing reports.</p>

<h3>3. Technologies & Deployment</h3>
<ul>
  <li><strong>Language & Tools</strong>: Python 3.12, Pydantic (configuration validation)</li>
  <li><strong>APIs</strong>: OpenAI GPT-4 API, Notion API</li>
  <li><strong>Deployment</strong>: Fully <strong>Dockerized</strong> application (Dockerfile and docker-compose) for simplified, production-ready deployment.</li>
</ul>

<h3>Quantitative Summary</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">4</span><span class="stat-label">AI Agents</span></div>
  <div class="stat-card"><span class="stat-number">GPT-4</span><span class="stat-label">AI Model</span></div>
  <div class="stat-card"><span class="stat-number">8</span><span class="stat-label">Languages</span></div>
  <div class="stat-card"><span class="stat-number">Docker</span><span class="stat-label">Containerization</span></div>
</div>`
  },

  "hotel-bpm": {
    title: "Hotel & Restaurant SOA — Life Smoothly",
    category: "Full-Stack",
    image: "./assets/images/project_bpm.png",
    github: "https://github.com/shanny-lala/hotel-soa",
    demo: "",
    youtube: "https://youtu.be/rNbR_hTxMvM",
    screenshots: [
      { src: "./assets/images/capture bpm/1-Introduction arcitecture.png", caption: "Architecture SOA", class: "desktop" },
      { src: "./assets/images/capture bpm/2- Tableau de bord(Miniature).png", caption: "Tableau de Bord", class: "desktop" },
      { src: "./assets/images/capture bpm/3- Réservation.png", caption: "Gestion des réservations", class: "desktop" },
      { src: "./assets/images/capture bpm/3 prime- Nouvelle Réservation.png", caption: "Nouvelle réservation", class: "desktop" },
      { src: "./assets/images/capture bpm/4- Facturation et stock.png", caption: "Facturation & Stock", class: "desktop" },
      { src: "./assets/images/capture bpm/5- Menage.png", caption: "Ménage & Entretien", class: "desktop" },
      { src: "./assets/images/capture bpm/6- Restaurant.png", caption: "Restaurant", class: "desktop" },
      { src: "./assets/images/capture bpm/7- N8n-automatisation facebook.png", caption: "Automatisation Facebook (n8n)", class: "desktop" },
      { src: "./assets/images/capture bpm/8- Conclusion - BPMN.png", caption: "Diagrammes BPMN", class: "desktop" }
    ],
    desc_fr: `<h3>1. Vue d'ensemble</h3>
<p><strong>Life Smoothly</strong> est un système complet de gestion d'hôtel et restaurant basé sur une <strong>Architecture Orientée Services (SOA)</strong> avec modélisation BPMN des processus métier. Il orchestre automatiquement tous les processus : réservation, facturation, ménage, gestion des stocks et suivi en temps réel via un tableau de bord.</p>

<h4>Processus automatisés (chaîne complète)</h4>
<ul>
  <li>Réservation → Consommation stock (4 articles)</li>
  <li>→ Chambre OCCUPÉE</li>
  <li>→ Facture générée automatiquement</li>
  <li>→ [Checkout] Chambre SALE</li>
  <li>→ Tâche de ménage créée</li>
  <li>→ [Ménage terminé] Articles réapprovisionnés</li>
  <li>→ Chambre PROPRE (disponible à la revente)</li>
</ul>

<h3>2. Architecture Microservices (SOA)</h3>
<p>Le projet est découpé en plusieurs microservices interdépendants :</p>
<ul>
  <li><strong>chambre-service</strong> : Gestion des chambres et catégories</li>
  <li><strong>reservation-service</strong> : Réservations, checkout, orchestration</li>
  <li><strong>facture-service</strong> : Facturation hôtel + restaurant</li>
  <li><strong>stock-service</strong> : Consommation et réapprovisionnement</li>
  <li><strong>menage-service</strong> : Tâches de ménage, notifications</li>
  <li><strong>dashboard-service</strong> : Agrégation KPI journaliers</li>
  <li><strong>restaurant-service</strong> : Menus, commandes, intégration facture</li>
</ul>

<h3>3. Technologies & Déploiement</h3>
<ul>
  <li><strong>Backend</strong> : Node.js, Express.js, Prisma ORM</li>
  <li><strong>Frontend</strong> : React 18, Vite, Lucide React</li>
  <li><strong>Base de données</strong> : PostgreSQL 16 (×2 : hotel_db, restaurant_db)</li>
  <li><strong>Automatisation & Stockage</strong> : n8n (workflows Facebook), MinIO (compatible S3)</li>
  <li><strong>Déploiement</strong> : Conteneurisé avec Docker et Docker Compose</li>
  <li><strong>Modélisation</strong> : 5 diagrammes BPMN (.drawio)</li>
</ul>

<h3>Récapitulatif chiffré</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">7</span><span class="stat-label">Microservices</span></div>
  <div class="stat-card"><span class="stat-number">Node.js</span><span class="stat-label">Backend API</span></div>
  <div class="stat-card"><span class="stat-number">React</span><span class="stat-label">Frontend</span></div>
  <div class="stat-card"><span class="stat-number">5</span><span class="stat-label">Processus BPMN</span></div>
</div>`,
    desc_en: `<h3>1. Overview</h3>
<p><strong>Life Smoothly</strong> is a comprehensive hotel and restaurant management system based on a <strong>Service-Oriented Architecture (SOA)</strong> with BPMN modeling of business processes. It automatically orchestrates all processes: booking, billing, housekeeping, stock management, and real-time monitoring via a dashboard.</p>

<h4>Automated Processes (Complete Chain)</h4>
<ul>
  <li>Booking → Stock consumption (4 items)</li>
  <li>→ Room OCCUPIED</li>
  <li>→ Invoice automatically generated</li>
  <li>→ [Checkout] Room DIRTY</li>
  <li>→ Housekeeping task created</li>
  <li>→ [Housekeeping done] Items restocked</li>
  <li>→ Room CLEAN (available for resale)</li>
</ul>

<h3>2. Microservices Architecture (SOA)</h3>
<p>The project is divided into several interdependent microservices:</p>
<ul>
  <li><strong>chambre-service</strong>: Room and category management</li>
  <li><strong>reservation-service</strong>: Bookings, checkout, orchestration</li>
  <li><strong>facture-service</strong>: Hotel + restaurant billing</li>
  <li><strong>stock-service</strong>: Consumption and restocking</li>
  <li><strong>menage-service</strong>: Housekeeping tasks, notifications</li>
  <li><strong>dashboard-service</strong>: Daily KPI aggregation</li>
  <li><strong>restaurant-service</strong>: Menus, orders, invoice integration</li>
</ul>

<h3>3. Technologies & Deployment</h3>
<ul>
  <li><strong>Backend</strong>: Node.js, Express.js, Prisma ORM</li>
  <li><strong>Frontend</strong>: React 18, Vite, Lucide React</li>
  <li><strong>Database</strong>: PostgreSQL 16 (×2: hotel_db, restaurant_db)</li>
  <li><strong>Automation & Storage</strong>: n8n (Facebook workflows), MinIO (S3 compatible)</li>
  <li><strong>Deployment</strong>: Containerized with Docker and Docker Compose</li>
  <li><strong>Modeling</strong>: 5 BPMN diagrams (.drawio)</li>
</ul>

<h3>Quantitative Summary</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">7</span><span class="stat-label">Microservices</span></div>
  <div class="stat-card"><span class="stat-number">Node.js</span><span class="stat-label">Backend API</span></div>
  <div class="stat-card"><span class="stat-number">React</span><span class="stat-label">Frontend</span></div>
  <div class="stat-card"><span class="stat-number">5</span><span class="stat-label">BPMN Processes</span></div>
</div>`
  },
  "churn": {
    title: "Prédiction du Churn Telecom",
    category: "IA & Data",
    image: "./assets/images/capture datamining/miniature.png",
    github: "https://github.com/shanny-lala/telco-churn-analysis-knime",
    demo: "",
    youtube: "",
    report: "./assets/images/capture datamining/Rapport projet SID : DataMining_KNIME_ENI.pdf",
    screenshots: [
      { src: "./assets/images/capture datamining/Workflow ETL complet — noeuds 1 a 7 connectes et tous en vert.png", caption: "Workflow ETL complet", class: "desktop" },
      { src: "./assets/images/capture datamining/Workflow complet — tous les noeuds connectes et en vert.png", caption: "Workflow ML complet", class: "desktop" },
      { src: "./assets/images/capture datamining/CSV Reader — table de donnees (7 043 lignes x 21 colonnes).png", caption: "Dataset : 7 043 lignes × 21 colonnes", class: "desktop" },
      { src: "./assets/images/capture datamining/Statistics — tableau des statistiques descriptives de toutes les colonnes.png", caption: "Statistiques descriptives", class: "desktop" },
      { src: "./assets/images/capture datamining/Rule Engine — regle creant la colonne Churn_Num (0 ou 1).png", caption: "Feature Engineering — Churn_Num", class: "desktop" },
      { src: "./assets/images/capture datamining/Arbre de decision visualise — Decision Tree View avec branches et noeuds.png", caption: "Arbre de Décision visualisé", class: "desktop" },
      { src: "./assets/images/capture datamining/Scorer Decision Tree — matrice de confusion et metriques de performance.png", caption: "Scorer — Decision Tree", class: "desktop" },
      { src: "./assets/images/capture datamining/Scorer Random Forest — matrice de confusion et metriques de performance.png", caption: "Scorer — Random Forest", class: "desktop" },
      { src: "./assets/images/capture datamining/Courbe ROC — comparaison Decision Tree vs Random Forest.png", caption: "Courbe ROC — Comparaison des modèles", class: "desktop" },
      { src: "./assets/images/capture datamining/K-Means — centres des 3 clusters et repartition des clients.png", caption: "K-Means : 3 clusters de clients", class: "desktop" },
      { src: "./assets/images/capture datamining/Silhouette Coefficient — evaluation de la qualite des clusters.png", caption: "Coefficient de Silhouette", class: "desktop" },
      { src: "./assets/images/capture datamining/Excel Writer — fichier resultats_churn.xlsx genere.png", caption: "Export Excel des prédictions", class: "desktop" }
    ],
    desc_fr: `<h3>1. Vue d'ensemble</h3>
<p>Projet de <strong>Data Mining</strong> réalisé avec <strong>KNIME Analytics Platform</strong> dans le cadre du module <em>Systèmes d'Information Décisionnels (SID)</em> à l'ENI. L'objectif est de prédire et segmenter les <strong>7 043 clients</strong> d'un opérateur télécom américain susceptibles de résilier leur abonnement.</p>

<h4>Dataset IBM Telco Churn</h4>
<ul>
  <li><strong>Source</strong> : IBM Sample Data (disponible sur Kaggle)</li>
  <li><strong>Taille</strong> : 7 043 lignes × 21 variables</li>
  <li><strong>Variable cible</strong> : <code>Churn</code> (Yes / No) — taux de churn ~26.5%</li>
  <li><strong>Variables clés</strong> : <code>tenure</code>, <code>Contract</code>, <code>MonthlyCharges</code>, <code>InternetService</code></li>
</ul>

<h3>2. Architecture du Workflow KNIME</h3>
<p>Le projet est structuré en <strong>deux pipelines</strong> principaux :</p>
<ul>
  <li><strong>Pipeline ETL</strong> : CSV Reader → Statistics → Rule Engine → Missing Value Handler → Normalizer</li>
  <li><strong>Pipeline ML</strong> : Decision Tree, Random Forest, K-Means, Scoring, Export Excel</li>
</ul>

<h3>3. Résultats et Algorithmes</h3>
<ul>
  <li><strong>Decision Tree</strong> : Classification supervisée avec visualisation de l'arbre (branches, noeuds, feuilles)</li>
  <li><strong>Random Forest</strong> : Meilleure précision — surpasse le Decision Tree sur la courbe ROC</li>
  <li><strong>K-Means (k=3)</strong> : Segmentation en 3 profils de risque (clients fidèles, risque moyen, churners potentiels)</li>
  <li><strong>Évaluation</strong> : Matrice de confusion, Courbe ROC, Coefficient de Silhouette</li>
</ul>

<h3>Récapitulatif chiffré</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">7 043</span><span class="stat-label">Clients analysés</span></div>
  <div class="stat-card"><span class="stat-number">21</span><span class="stat-label">Variables</span></div>
  <div class="stat-card"><span class="stat-number">85%</span><span class="stat-label">Accuracy (Random Forest)</span></div>
  <div class="stat-card"><span class="stat-number">3</span><span class="stat-label">Clusters K-Means</span></div>
</div>`,
    desc_en: `<h3>1. Overview</h3>
<p><strong>Data Mining</strong> project built with <strong>KNIME Analytics Platform</strong> as part of the <em>Decision Information Systems (SID)</em> module at ENI. The goal is to predict and segment <strong>7,043 customers</strong> of an American telecom operator likely to cancel their subscription.</p>

<h4>IBM Telco Churn Dataset</h4>
<ul>
  <li><strong>Source</strong>: IBM Sample Data (available on Kaggle)</li>
  <li><strong>Size</strong>: 7,043 rows × 21 variables</li>
  <li><strong>Target variable</strong>: <code>Churn</code> (Yes / No) — churn rate ~26.5%</li>
  <li><strong>Key variables</strong>: <code>tenure</code>, <code>Contract</code>, <code>MonthlyCharges</code>, <code>InternetService</code></li>
</ul>

<h3>2. KNIME Workflow Architecture</h3>
<p>The project is structured into <strong>two main pipelines</strong>:</p>
<ul>
  <li><strong>ETL Pipeline</strong>: CSV Reader → Statistics → Rule Engine → Missing Value Handler → Normalizer</li>
  <li><strong>ML Pipeline</strong>: Decision Tree, Random Forest, K-Means, Scoring, Excel Export</li>
</ul>

<h3>3. Results and Algorithms</h3>
<ul>
  <li><strong>Decision Tree</strong>: Supervised classification with visual tree rendering (branches, nodes, leaves)</li>
  <li><strong>Random Forest</strong>: Best accuracy — outperforms Decision Tree on the ROC curve</li>
  <li><strong>K-Means (k=3)</strong>: Segmentation into 3 risk profiles (loyal customers, medium risk, potential churners)</li>
  <li><strong>Evaluation</strong>: Confusion Matrix, ROC Curve, Silhouette Coefficient</li>
</ul>

<h3>Quantitative Summary</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">7,043</span><span class="stat-label">Customers analyzed</span></div>
  <div class="stat-card"><span class="stat-number">21</span><span class="stat-label">Variables</span></div>
  <div class="stat-card"><span class="stat-number">85%</span><span class="stat-label">Accuracy (Random Forest)</span></div>
  <div class="stat-card"><span class="stat-number">3</span><span class="stat-label">K-Means Clusters</span></div>
</div>`
  },
  "irrigation": {
    title: "SMA Irrigation Intelligente",
    category: "IA & Data",
    image: "./assets/images/capture sma/miniature.png",
    github: "https://github.com/shanny-lala/smart-irrigation-sma",
    demo: "",
    youtube: "https://youtu.be/4XEiVhKXBgE",
    screenshots: [
      { src: "./assets/images/capture sma/miniature.png", caption: "Aperçu de la simulation NetLogo", class: "desktop" }
    ],
    desc_fr: `<h3>1. Vue d'ensemble</h3>
<p>Système Multi-Agents (SMA) simulant un réseau de capteurs IoT et un moteur de décision pour l'irrigation agricole de précision. Développé sous <strong>NetLogo 6.4.0</strong> (Java) dans le cadre du module Intelligence Artificielle et Systèmes Multi-Agents.</p>

<h4>Architecture BDI (Beliefs-Desires-Intentions)</h4>
<ul>
  <li><strong>Agent Capteur IoT (<code>sensor</code>)</strong> : Lit l'humidité/température, transmet avec bruit gaussien, gère sa batterie (recharge solaire).</li>
  <li><strong>Agent Irrigateur (<code>irrigator</code>)</strong> : Distribue l'eau dans un rayon défini selon l'ordre du moteur de décision.</li>
  <li><strong>Agent Environnement (<code>Patches</code>)</strong> : Modélise la physique du sol (évapotranspiration, précipitations).</li>
  <li><strong>Moteur de Décision (<code>Observer</code>)</strong> : Logique à hystérésis pour éviter les oscillations (seuils à 30% et 70%).</li>
</ul>

<h3>2. Résultats et Performances</h3>
<p>La simulation, exécutée sur 67 jours (1617 ticks), a permis de valider les KPIs suivants :</p>
<ul>
  <li><strong>WUE (Water Use Efficiency)</strong> : 10.85 (Objectif > 1.5 dépassé).</li>
  <li><strong>Économie d'eau</strong> : 12.4% par rapport à un arrosage continu.</li>
  <li><strong>Humidité moyenne</strong> : Maintenue dans la zone optimale (39.8%).</li>
  <li><strong>Stress hydrique</strong> : Quasi-nul (1 heure cumulée sur 67 jours).</li>
</ul>

<h3>Récapitulatif chiffré</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">12.4%</span><span class="stat-label">Économie d'eau</span></div>
  <div class="stat-card"><span class="stat-number">10.85</span><span class="stat-label">Score WUE</span></div>
  <div class="stat-card"><span class="stat-number">30</span><span class="stat-label">Capteurs IoT</span></div>
  <div class="stat-card"><span class="stat-number">67</span><span class="stat-label">Jours simulés</span></div>
</div>`,
    desc_en: `<h3>1. Overview</h3>
<p>Multi-Agent System (MAS) simulating an IoT sensor network and a decision engine for precision agricultural irrigation. Developed in <strong>NetLogo 6.4.0</strong> (Java) for the Artificial Intelligence and Multi-Agent Systems module.</p>

<h4>BDI Architecture (Beliefs-Desires-Intentions)</h4>
<ul>
  <li><strong>IoT Sensor Agent (<code>sensor</code>)</strong>: Reads moisture/temperature, transmits with Gaussian noise, manages battery via solar charging.</li>
  <li><strong>Irrigator Agent (<code>irrigator</code>)</strong>: Distributes water within a defined radius according to the decision engine's command.</li>
  <li><strong>Environment Agent (<code>Patches</code>)</strong>: Models soil physics (evapotranspiration, precipitation).</li>
  <li><strong>Decision Engine (<code>Observer</code>)</strong>: Hysteresis logic to prevent oscillations (thresholds at 30% and 70%).</li>
</ul>

<h3>2. Results and Performance</h3>
<p>The simulation, running over 67 days (1617 ticks), validated the following KPIs:</p>
<ul>
  <li><strong>WUE (Water Use Efficiency)</strong>: 10.85 (Target > 1.5 exceeded).</li>
  <li><strong>Water Savings</strong>: 12.4% compared to continuous watering.</li>
  <li><strong>Average Moisture</strong>: Maintained in the optimal zone (39.8%).</li>
  <li><strong>Water Stress</strong>: Almost non-existent (1 cumulative hour over 67 days).</li>
</ul>

<h3>Quantitative Summary</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">12.4%</span><span class="stat-label">Water Savings</span></div>
  <div class="stat-card"><span class="stat-number">10.85</span><span class="stat-label">WUE Score</span></div>
  <div class="stat-card"><span class="stat-number">30</span><span class="stat-label">IoT Sensors</span></div>
  <div class="stat-card"><span class="stat-number">67</span><span class="stat-label">Simulated Days</span></div>
</div>`
  },
  "e-collecte": {
    title: "Projet E-Collecte",
    category: "Full-Stack",
    image: "./assets/images/capture e-collecte/miniature e-collecte.png",
    github: "https://github.com/shanny-lala/e-collecte-showcase",
    demo: "",
    youtube: "https://youtube.com/shorts/lKEkaF7jN48",
    screenshots: [
      { src: "./assets/images/capture e-collecte/Intro 1.jpg", caption: "Écran d'introduction 1" },
      { src: "./assets/images/capture e-collecte/Intro 2.jpg", caption: "Écran d'introduction 2" },
      { src: "./assets/images/capture e-collecte/Intro 3.jpg", caption: "Écran d'introduction 3" },
      { src: "./assets/images/capture e-collecte/Module iserp.jpg", caption: "Module ISERP" },
      { src: "./assets/images/capture e-collecte/Types de formulaires.jpg", caption: "Types de formulaires" },
      { src: "./assets/images/capture e-collecte/Détails de l'enquête.jpg", caption: "Détails de l'enquête" },
      { src: "./assets/images/capture e-collecte/Analyse des réponses.jpg", caption: "Analyse des réponses" },
      { src: "./assets/images/capture e-collecte/Analyse des réponse 2.jpg", caption: "Analyse des réponses (vue 2)" },
      { src: "./assets/images/capture e-collecte/Gestions des utilisateurs.jpg", caption: "Gestion des utilisateurs" },
      { src: "./assets/images/capture e-collecte/Mon profil admin.jpg", caption: "Profil administrateur" },
      { src: "./assets/images/capture e-collecte/Statistique.jpg", caption: "Statistiques" },
      { src: "./assets/images/capture e-collecte/Traçabilité.jpg", caption: "Traçabilité" }
    ],
    desc_fr: `<h3>1. Vue d'ensemble</h3>
<p><strong>E-COLLECTE ISERP</strong> est une application mobile de collecte de données sur le terrain, conçue pour les agents enquêteurs et les administrateurs. Elle permet la gestion complète du cycle de collecte : création de formulaires, saisie de données, suivi des agents, analyses statistiques et gestion des enquêtes ISERP.</p>

<h4>Architecture technique</h4>
<ul>
  <li><strong>Application mobile</strong> : Flutter (Dart) — Android & iOS</li>
  <li><strong>Backend API</strong> : Node.js + Express.js + TypeScript</li>
  <li><strong>Base de données serveur</strong> : PostgreSQL avec Prisma ORM</li>
  <li><strong>Base de données locale</strong> : SQLite (sqflite)</li>
  <li><strong>Authentification</strong> : JWT (JSON Web Tokens)</li>
</ul>

<h4>Modes de fonctionnement</h4>
<p>L'application fonctionne en <strong>mode offline-first</strong> : les données sont stockées localement (SQLite) et se synchronisent automatiquement avec le serveur lors du retour de la connectivité réseau. Ce mécanisme garantit une utilisation ininterrompue sur le terrain.</p>

<h3>2. Authentification et gestion des comptes</h3>
<ul>
  <li><strong>Écran de connexion</strong> : Validation en temps réel, visibilité du mot de passe, token JWT.</li>
  <li><strong>Écran d'inscription</strong> : Nom, prénom, email, téléphone et mot de passe. Attente de validation.</li>
  <li><strong>Mot de passe oublié / Réinitialisation</strong> : Envoi de code par email.</li>
</ul>

<h3>3. Espace Agent (Utilisateur)</h3>
<ul>
  <li><strong>Tableau de bord</strong> : Statistiques personnelles, raccourcis, connectivité, notifications.</li>
  <li><strong>Profil Agent</strong> : Modification des informations, upload de photo depuis galerie/caméra.</li>
</ul>

<h3>4. Gestion des Clients</h3>
<ul>
  <li><strong>Liste et carte géographique</strong> : Recherche, pull-to-refresh, mode hors-ligne, géolocalisation GPS.</li>
  <li><strong>Historique et détail</strong> : Chronologie des interactions avec chaque client.</li>
</ul>

<h3>5. Formulaires d'enquête</h3>
<ul>
  <li><strong>Saisie de données complexes</strong> : Texte, nombre, choix multiples, dates, géolocalisation et photos.</li>
  <li><strong>Saisie vocale (Speech-to-Text)</strong> : Pour accélérer la collecte des champs textuels longs sur le terrain.</li>
  <li><strong>Sauvegarde automatique</strong> : Gestion des brouillons, export PDF.</li>
</ul>

<h3>6. Module ISERP (Statistiques et Recherche)</h3>
<ul>
  <li><strong>Échantillonnage</strong> : Création d'échantillons basés sur 2 à 10 critères croisés.</li>
  <li><strong>Questionnaires Quantitatifs</strong> : Une variable, deux variables, échelle de Likert. Statistiques générées automatiquement.</li>
  <li><strong>Questionnaires Qualitatifs</strong> : Analyse thématique, attribution de codes, génération de thèmes via IA/API.</li>
</ul>

<h3>7. Synchronisation et mode hors-ligne</h3>
<p>Service de synchronisation <code>SyncService</code> automatique avec détection de connectivité, file d'attente (SQLite) et gestion des conflits.</p>

<h3>8. Panel d'Administration</h3>
<ul>
  <li><strong>Tableau de bord & Stats</strong> : Statistiques globales, graphiques de tendance, analyse des réponses et export CSV.</li>
  <li><strong>Gestion</strong> : Validation des utilisateurs, gestion des types de formulaires et questions, journal d'activités, traçabilité.</li>
</ul>

<h3>9. Gamification</h3>
<p>Classement général des agents par score de performance, avec l'obtention de badges et récompenses.</p>

<h3>Récapitulatif chiffré</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">47</span><span class="stat-label">Écrans</span></div>
  <div class="stat-card"><span class="stat-number">11</span><span class="stat-label">Providers (State)</span></div>
  <div class="stat-card"><span class="stat-number">15</span><span class="stat-label">Routes API</span></div>
  <div class="stat-card"><span class="stat-number">12</span><span class="stat-label">Tables BDD</span></div>
  <div class="stat-card"><span class="stat-number">8</span><span class="stat-label">Widgets réutilisables</span></div>
  <div class="stat-card"><span class="stat-number">3</span><span class="stat-label">Services</span></div>
</div>`,
    desc_en: `<h3>1. Overview</h3>
<p><strong>E-COLLECTE ISERP</strong> is a mobile field data collection application designed for surveyors and administrators. It covers the full data collection lifecycle: form creation, data entry, agent tracking, statistical analysis, and ISERP survey management.</p>

<h4>Technical Architecture</h4>
<ul>
  <li><strong>Mobile App</strong>: Flutter (Dart) — Android & iOS</li>
  <li><strong>Backend API</strong>: Node.js + Express.js + TypeScript</li>
  <li><strong>Server Database</strong>: PostgreSQL with Prisma ORM</li>
  <li><strong>Local Database</strong>: SQLite (sqflite)</li>
  <li><strong>Authentication</strong>: JWT (JSON Web Tokens)</li>
</ul>

<h4>Operational Modes</h4>
<p>The application works in an <strong>offline-first mode</strong>: data is stored locally (SQLite) and syncs automatically with the server when network connectivity is restored. This ensures uninterrupted use in the field.</p>

<h3>2. Key Features</h3>
<ul>
  <li><strong>Authentication & Account Management</strong>: Login, Registration with admin approval, JWT token management, and Password Reset.</li>
  <li><strong>Agent Workspace</strong>: Personalized dashboard with real-time stats, connectivity indicators, notifications, and profile management (with camera/gallery upload).</li>
  <li><strong>Client Management</strong>: Offline-first client list, interactive maps with GPS geolocation, and detailed interaction history.</li>
  <li><strong>Survey Forms</strong>: Complex data entry (text, number, multiple choice, dates, geolocation, photos), automatic draft saving, and <strong>Voice Input (Speech-to-Text)</strong>.</li>
  <li><strong>ISERP Statistics Module</strong>: Advanced sampling based on multiple criteria, Quantitative questionnaires (Likert scale, single/double variables) with auto-generated stats, and Qualitative questionnaires for thematic analysis.</li>
  <li><strong>Synchronization</strong>: Automatic <code>SyncService</code> with connectivity detection and conflict management.</li>
  <li><strong>Admin Dashboard</strong>: Global statistics, CSV data export, user validation, form management, activity logs, and traceability.</li>
  <li><strong>Gamification</strong>: Agent leaderboard based on performance scores, badges, and rewards to encourage healthy competition.</li>
</ul>

<h3>Quantitative Summary</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">47</span><span class="stat-label">Screens</span></div>
  <div class="stat-card"><span class="stat-number">11</span><span class="stat-label">State Providers</span></div>
  <div class="stat-card"><span class="stat-number">15</span><span class="stat-label">API Routes</span></div>
  <div class="stat-card"><span class="stat-number">12</span><span class="stat-label">DB Tables</span></div>
  <div class="stat-card"><span class="stat-number">8</span><span class="stat-label">Reusable Widgets</span></div>
  <div class="stat-card"><span class="stat-number">3</span><span class="stat-label">Services</span></div>
</div>`
  },
  "gke-mern": {
    title: "MERN sur Kubernetes/GKE",
    category: "Full-Stack",
    image: "./assets/images/capture gcp/miniature.png",
    github: "https://github.com/shanny-lala/mern-k8s-gke",
    demo: "",
    youtube: "",
    screenshots: [
      { src: "./assets/images/capture gcp/Le Déploiement Automatisé avec script d'automatisation, Vérification de la santé de l'API .png", caption: "Déploiement Automatisé", class: "desktop" },
      { src: "./assets/images/capture gcp/Le Clou : L'Autoscaling HPA, Terminal 1 — Monitoring en temps réel, Terminal 2 — Test de charge Apache Benchmark.png", caption: "Autoscaling HPA", class: "desktop" },
      { src: "./assets/images/capture gcp/dashboard capture 1.png", caption: "Dashboard 1", class: "desktop" },
      { src: "./assets/images/capture gcp/dashboard capture 2.png", caption: "Dashboard 2", class: "desktop" },
      { src: "./assets/images/capture gcp/tâches capture 1.png", caption: "Tâches 1", class: "desktop" },
      { src: "./assets/images/capture gcp/tâches capture 2.png", caption: "Tâches 2", class: "desktop" },
      { src: "./assets/images/capture gcp/formulaire création d' une nouvelle tâche.png", caption: "Formulaire création", class: "desktop" },
      { src: "./assets/images/capture gcp/à propos capture 1.png", caption: "À propos 1", class: "desktop" },
      { src: "./assets/images/capture gcp/à propos capture 2.png", caption: "À propos 2", class: "desktop" },
      { src: "./assets/images/capture gcp/à propos capture 3.png", caption: "À propos 3", class: "desktop" }
    ],
    desc_fr: `<h3>1. Vue d'ensemble</h3>
<p>Application web MERN (MongoDB, Express, React, Node.js) conteneurisée avec Docker et orchestrée par Kubernetes avec Horizontal Pod Autoscaler (HPA). Déploiement sur cluster local (Minikube) et Google Cloud Platform (GKE).</p>

<h4>Architecture</h4>
<ul>
  <li><strong>Frontend</strong> : React + Vite (Service NodePort / LoadBalancer)</li>
  <li><strong>Backend</strong> : Node.js + Express (Service ClusterIP) avec 2 à 10 pods (HPA)</li>
  <li><strong>Base de données</strong> : MongoDB (PersistentVolume)</li>
</ul>

<h3>2. Fonctionnalités et Endpoints API</h3>
<ul>
  <li><strong>Gestion des Tâches</strong> : Liste (paginée avec filtrage), Création, Modification, Suppression et Statistiques agrégées.</li>
  <li><strong>Monitoring</strong> : Probes Kubernetes (Liveness via <code>/health</code>, Readiness via <code>/ready</code>).</li>
</ul>

<h3>3. Déploiement et Autoscaling</h3>
<ul>
  <li><strong>Déploiement Local (Minikube)</strong> : Script d'automatisation complet avec configuration du metrics-server.</li>
  <li><strong>Déploiement Cloud (GCP/GKE)</strong> : Cluster GKE provisionné, images hébergées sur GCR (Google Container Registry).</li>
  <li><strong>Test de Charge</strong> : Scripts avec Apache Benchmark (ab) pour déclencher l'autoscaling CPU/Mémoire en simulant jusqu'à 10 000 requêtes.</li>
</ul>

<h3>Récapitulatif chiffré</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">GKE</span><span class="stat-label">Déploiement Cloud</span></div>
  <div class="stat-card"><span class="stat-number">HPA</span><span class="stat-label">Autoscaling</span></div>
  <div class="stat-card"><span class="stat-number">Docker</span><span class="stat-label">Multi-stage build</span></div>
  <div class="stat-card"><span class="stat-number">MERN</span><span class="stat-label">Stack complète</span></div>
</div>`,
    desc_en: `<h3>1. Overview</h3>
<p>MERN web application (MongoDB, Express, React, Node.js) containerized with Docker and orchestrated by Kubernetes with Horizontal Pod Autoscaler (HPA). Deployed on local cluster (Minikube) and Google Cloud Platform (GKE).</p>

<h4>Architecture</h4>
<ul>
  <li><strong>Frontend</strong>: React + Vite (NodePort / LoadBalancer Service)</li>
  <li><strong>Backend</strong>: Node.js + Express (ClusterIP Service) with 2 to 10 pods (HPA)</li>
  <li><strong>Database</strong>: MongoDB (PersistentVolume)</li>
</ul>

<h3>2. Features and API Endpoints</h3>
<ul>
  <li><strong>Task Management</strong>: List (paginated with filtering), Creation, Modification, Deletion, and Aggregated Statistics.</li>
  <li><strong>Monitoring</strong>: Kubernetes Probes (Liveness via <code>/health</code>, Readiness via <code>/ready</code>).</li>
</ul>

<h3>3. Deployment and Autoscaling</h3>
<ul>
  <li><strong>Local Deployment (Minikube)</strong>: Full automation script with metrics-server configuration.</li>
  <li><strong>Cloud Deployment (GCP/GKE)</strong>: Provisioned GKE cluster, images hosted on GCR (Google Container Registry).</li>
  <li><strong>Load Testing</strong>: Scripts using Apache Benchmark (ab) to trigger CPU/Memory autoscaling by simulating up to 10,000 requests.</li>
</ul>

<h3>Quantitative Summary</h3>
<div class="stats-grid">
  <div class="stat-card"><span class="stat-number">GKE</span><span class="stat-label">Cloud Deployment</span></div>
  <div class="stat-card"><span class="stat-number">HPA</span><span class="stat-label">Autoscaling</span></div>
  <div class="stat-card"><span class="stat-number">Docker</span><span class="stat-label">Multi-stage build</span></div>
  <div class="stat-card"><span class="stat-number">MERN</span><span class="stat-label">Full Stack</span></div>
</div>`
  }
};
