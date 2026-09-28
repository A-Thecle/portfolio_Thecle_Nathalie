"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook, FaEye , FaYoutube, FaFileExcel, FaBars} from "react-icons/fa";
import { FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiTensorflow,  SiNextdotjs, SiFlutter, SiFigma } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import styles from "./css/about.module.css";
import serviceStyles from "./css/services.module.css";
import skillStyles from "./css/skills.module.css";
import projectStyles from "./css/projects.module.css";
import contactStyles from "./css/contact.module.css"
import ContactForm from "./components/contactForm";
import Homestyles from "./css/home.module.css";
import { useState } from "react";




export default function Home() {
    // ÉTAT DU MENU MOBILE
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#112240] text-white">

      

      {/* BARRE DE NAVIGATION */}
 <nav className={Homestyles.navbar}>
  <div className={Homestyles.logo}>
    Tech_<span>Thècle</span>
  </div>

   {/* MENU HAMBURGER */}
  <div 
    className={Homestyles.menuIcon}
    onClick={()=>setMenuOpen(!menuOpen)}
  >
    <FaBars/>
  </div>

  <ul className={`${Homestyles.navLinks} ${menuOpen ? Homestyles.activeMenu : ""}`}>
    <li className={Homestyles.active}><a href="#home">Accueil</a></li>
    <li><a href="#competition">Compétitions</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#skills">Compétences</a></li>
    <li><a href="#projects">Projets</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

      {/* ================= SECTION ACCUEIL ================= */}
<section id="home" className={Homestyles.home}>

  {/* Formes flottantes en arrière-plan */}
  <div className={Homestyles.bgShapes}>
    <span className={Homestyles.shape1}></span>
    <span className={Homestyles.shape2}></span>
    <span className={Homestyles.shape3}></span>
  </div>

  <div className={Homestyles.homeContent}>

    {/* Badge disponibilité */}
    <div className={Homestyles.statusBadge}>
      <span className={Homestyles.statusDot}></span>
      Disponible pour de nouvelles opportunités
    </div>

    <h1 className={Homestyles.fadeIn1}>
      Bonjour, je suis <span>Nathalie</span>
    </h1>

    <h2 className={Homestyles.fadeIn2}>Data Scientist & Data Analyst</h2>

    <p className={Homestyles.fadeIn3}>
      Je suis une Data Scientist, Analyste passionnée et dévouée,
      animée par la résolution de problèmes et l'apprentissage continu. Je conçois
      des solutions intelligentes basées sur les données et des applications web évolutives
      qui génèrent un impact business réel. Je suis ouverte à de nouvelles opportunités
      où je peux contribuer, évoluer et apporter de la valeur.
    </p>

    <div className={`${Homestyles.socialIcons} ${Homestyles.fadeIn4}`}>
      <div className={Homestyles.topIcons}>
        <a href="https://www.linkedin.com/in/thècle-nathalie-916244433" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/A-Thecle" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.facebook.com/thecle.nathalie.3/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
      </div>

      <div className={Homestyles.viewCVContainer}>
        <a
          href="/CV_Nathalie.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={Homestyles.viewCV}
        >
          <FaEye size={20} />
          <span>Voir mon CV</span>
        </a>
      </div>
    </div>
  </div>

  <div className={Homestyles.imageContainer}>
    <div className={Homestyles.imageRing}>
      <Image
        src="/images/nathanatha.jpg"
        alt="Photo de profil"
        width={400}
        height={400}
        className={Homestyles.profileImage}
      />
    </div>
  </div>

  {/* Indicateur de scroll */}
  <div className={Homestyles.scrollIndicator}>
    <span className={Homestyles.scrollText}>Scroll</span>
    <div className={Homestyles.scrollWheel}>
      <span className={Homestyles.scrollDot}></span>
    </div>
  </div>

</section>


    

{/* SECTION COMPÉTITIONS */}
{/* SECTION COMPÉTITIONS */}
<section id="competition" className={styles.about}>
  <div className={styles.container}>
    <div className={styles.textContent}>

      <h2 className={styles.sectionTitle}>
        Compétitions <span>& Distinctions</span>
      </h2>

      <p className={styles.intro}>
        Participer à des compétitions technologiques m'a permis de mettre en pratique
        mes compétences en analyse de données, intelligence artificielle,
        développement logiciel et résolution de problèmes dans des environnements
        exigeants et stimulants.
      </p>

      <div className={styles.timeline}>

        {/* 01 — EXCEL PRODUCTIVITY */}
        <div className={`${styles.timelineItem} ${styles.left}`}>
          <div className={styles.timelineNode}>01</div>
          <div className={styles.timelineCard}>
            <div className={styles.medallion}>
              <Image
                src="/images/certificat.jpg"
                alt="Excel Productivity Challenge"
                width={180}
                height={180}
                className={styles.medallionImg}
              />
              <span className={styles.medallionBadge}>🥈</span>
            </div>
            <div className={styles.timelineText}>
              <span className={styles.timelinePlace}>2ème Place</span>
              <h3>Excel Productivity Challenge</h3>
              <p>
                Distinguée lors de l'Ivo Egnana Tech Meeting organisé par
                <span className={styles.highlight}> Youth Computing</span>.
              </p>
              <p>
                Une compétition exigeante centrée sur l'analyse de données,
                la logique décisionnelle et la maîtrise avancée d'Excel.
              </p>
            </div>
          </div>
        </div>

        
        {/* 03 — CIRT MDG */}
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <div className={styles.timelineNode}>02</div>
          <div className={styles.timelineCard}>
            <div className={styles.medallion}>
              <Image
                src="/images/CTF.jpg"
                alt="Symposium National de la Cybersécurité"
                width={180}
                height={180}
                className={styles.medallionImg}
              />
              <span className={styles.medallionBadge}>🏆</span>
            </div>
            <div className={styles.timelineText}>
              <span className={styles.timelinePlace}>Prix de la Mixité</span>
              <h3>Symposium National de la Cybersécurité</h3>
              <p>
                Lauréate lors du Symposium organisé par <span className={styles.highlight}>CIRT-MDG</span>.
              </p>
              <p>
                Challenge de <span className={styles.highlight}>24h</span> : application intelligente pour
                <span className={styles.highlight}> l'agriculture à Madagascar</span> — détection des maladies du
                <span className={styles.highlight}> riz, manioc et maïs</span>.
              </p>
            </div>
          </div>
        </div>

        {/* 03 — SMART CITY */}
        <div className={`${styles.timelineItem} ${styles.left}`}>
          <div className={styles.timelineNode}>03</div>
          <div className={styles.timelineCard}>
            <div className={styles.medallion}>
              <Image
                src="/images/shedevs.jpg"
                alt="Smart City Hackathon"
                width={180}
                height={180}
                className={styles.medallionImg}
              />
              <span className={styles.medallionBadge}>🚀</span>
            </div>
            <div className={styles.timelineText}>
              <span className={styles.timelinePlace}>Hackathon 24h</span>
              <h3>Smart City Hackathon</h3>
              <p>
                Hackathon intensif de <span className={styles.highlight}>24 heures</span> organisé par
                <span className={styles.highlight}> Youth Computing</span>.
              </p>
              <p>
                Conception d'un prototype pour la transformation de
                <span className={styles.highlight}> Fianarantsoa en Smart City</span>.
              </p>
            </div>
          </div>
        </div>


        {/* 04 — HACKATHON ENI */}
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <div className={styles.timelineNode}>04</div>
          <div className={styles.timelineCard}>
            <div className={styles.medallion}>
              <Image
                src="/images/Ako.jpg"
                alt="Hackathon interne ENI Fianarantsoa"
                width={180}
                height={180}
                className={styles.medallionImg}
              />
              <span className={styles.medallionBadge}>🏆</span>
            </div>
            <div className={styles.timelineText}>
              <span className={styles.timelinePlace}>Top 6 / 14 équipes</span>
              <h3>Hackathon interne — ENI Fianarantsoa</h3>
              <p>
                Participation au <span className={styles.highlight}>Dev Hunt</span>, organisé par
                <span className={styles.highlight}> l&apos;ENI Fianarantsoa</span>.
              </p>
              <p>
                Solution développée en <span className={styles.highlight}>24h</span> pour motiver les étudiants
                à poursuivre leurs projets.
              </p>
            </div>
          </div>
        </div>

      </div>

      <a href="#projects" className={styles.btn}>
        Découvrir mes projets →
      </a>

    </div>
  </div>
</section>


{/* SECTION SERVICES */}
<section id="services" className={serviceStyles.services}>
  <div className={serviceStyles.container}>
    
    <h1 className={serviceStyles["sub-title"]}>
      Mes <span>Services</span>
    </h1>

    <div className={serviceStyles["services-list"]}>
      
      {/* Analyse de Données */}
      <div className={serviceStyles["service-card"]}>
        <span className={serviceStyles.number}>01</span>
        <div className={serviceStyles.icon}>📊</div>
        <h2>Analyse de Données</h2>
        <p>
          Transformation de données brutes en insights exploitables à l'aide d'outils d'analyse modernes
          tels que Power BI, Excel et Python pour aider les entreprises à prendre des décisions basées sur les données.
        </p>
        <a href="#contact" className={serviceStyles.read}>
          Demander un projet <span className={serviceStyles.arrow}>→</span>
        </a>
      </div>

      {/* Data Science & IA */}
      <div className={serviceStyles["service-card"]}>
        <span className={serviceStyles.number}>02</span>
        <div className={serviceStyles.icon}>🤖</div>
        <h2>Data Science & IA</h2>
        <p>
          Conception de systèmes intelligents utilisant des modèles de Machine Learning et de
          Deep Learning pour analyser des données complexes et construire des solutions
          prédictives pour des problèmes concrets.
        </p>
        <a href="#contact" className={serviceStyles.read}>
          Démarrer un projet IA <span className={serviceStyles.arrow}>→</span>
        </a>
      </div>

      {/* Développement Full-Stack */}
      <div className={serviceStyles["service-card"]}>
        <span className={serviceStyles.number}>03</span>
        <div className={serviceStyles.icon}>💻</div>
        <h2>Développement Full-Stack</h2>
        <p>
          Création d'applications web modernes, évolutives et responsives
          utilisant Angular, Node.js et les frameworks JavaScript modernes
          avec une forte attention portée à la performance et à l'expérience utilisateur.
        </p>
        <a href="#contact" className={serviceStyles.read}>
          Démarrer un projet <span className={serviceStyles.arrow}>→</span>
        </a>
      </div>

    </div>
  </div>
</section>
{/* SECTION COMPÉTENCES */}
<section id="skills" className={skillStyles.skillsSection}>
  <h2 className={skillStyles.skillsTitle}>
    Mes <span>Compétences</span>
  </h2>

  <div className={skillStyles.skillsContainer}>

    {/* LIGNE 1 : DATA SCIENCE - défile de gauche à droite */}
    <div className={skillStyles.skillGroupWrapper}>
      <h3 className={skillStyles.skillRowTitle}>
        Compétences en <span>Data Analyste & Scientist</span>
      </h3>
      <div className={skillStyles.marqueeRow}>
        <div className={`${skillStyles.marqueeTrack} ${skillStyles.moveRight}`}>
          {[...Array(2)].map((_, i) => (
            <div className={skillStyles.marqueeGroup} key={i}>
              <div className={skillStyles.skillItem}><FaPython /> Python</div>
              <div className={skillStyles.skillItem}>📊 Power BI</div>
              <div className={skillStyles.skillItem}>🗄️ MySQL</div>
              <div className={skillStyles.skillItem}>🍃 MongoDB</div>
              <div className={skillStyles.skillItem}>📊 Excel</div>
              <div className={skillStyles.skillItem}>⚡ Power Query</div>
              <div className={skillStyles.skillItem}><GiArtificialIntelligence /> Machine Learning</div>
              <div className={skillStyles.skillItem}><GiArtificialIntelligence /> Deep Learning</div>
              <div className={skillStyles.skillItem}><SiTensorflow /> PyTorch</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* LIGNE 2 : DÉVELOPPEMENT - défile de droite à gauche */}
    <div className={skillStyles.skillGroupWrapper}>
      <h3 className={skillStyles.skillRowTitle}>
        Compétences en <span>Développement Web & Mobile</span>
      </h3>
      <div className={skillStyles.marqueeRow}>
        <div className={`${skillStyles.marqueeTrack} ${skillStyles.moveLeft}`}>
          {[...Array(2)].map((_, i) => (
            <div className={skillStyles.marqueeGroup} key={i}>
              <div className={skillStyles.skillItem}><FaNodeJs /> Node.js</div>
              <div className={skillStyles.skillItem}><FaAngular /> Angular</div>
              <div className={skillStyles.skillItem}><SiNextdotjs /> Next.js</div>
              <div className={skillStyles.skillItem}><SiFlutter /> Flutter</div>
              <div className={skillStyles.skillItem}><FaHtml5 /> HTML</div>
              <div className={skillStyles.skillItem}><FaCss3Alt /> CSS</div>
              <div className={skillStyles.skillItem}><MdDesignServices /> Design UI/UX</div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
</section>

 {/* SECTION PROJETS */}
<section id="projects" className={projectStyles.projectsSection}>
  <h2 className={projectStyles.projectsTitle}>
    Mes Projets
  </h2>

  {/* PROJETS DATA */}
  <div className={projectStyles.projectCategory}>
    <h3>📊 Projets d'Analyse de Données & Data Science</h3>

    <div className={projectStyles.projectsGrid}>
   
<div className={projectStyles.projectCard}>
  <a
    href="/images/interfaceNLP.png"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/interfaceNLP.png"
      alt="Projet NLP - Analyse de sentiments des avis de films"
      style={{ cursor: 'pointer' }}
    />
  </a>

  <h4>Analyse de Sentiments - NLP</h4>

  <p>
    Développement d’un modèle de <strong>classification de sentiments</strong>
    appliqué à des avis de films afin d’identifier automatiquement les
    opinions <strong>positives ou négatives</strong>. Le projet comprend le
    <strong>nettoyage et le prétraitement des textes</strong>, la suppression
    des stopwords, l’exploration des données avec des
    <strong>WordClouds</strong>, ainsi que la représentation des textes avec
    <strong>TF-IDF</strong>. Plusieurs modèles de Machine Learning ont été
    entraînés et comparés : <strong>Naive Bayes, Régression Logistique et
    SVM linéaire</strong>. Les performances sont évaluées avec
    l’accuracy, le precision, le recall, le F1-score et la matrice de
    confusion. Une fonction de prédiction permet également d’analyser de
    nouveaux avis avec un score de confiance.
  </p>

  <div className={projectStyles.techStack}>
    Python • NLP • Scikit-learn • NLTK • TF-IDF • Machine Learning • Streamlit
  </div>

  <div className={projectStyles.projectButtons}>
    <a
      href="TON_LIEN_GITHUB"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub className={projectStyles.icon} />
      GitHub
    </a>
  </div>
</div>

<div className={projectStyles.projectCard}>
  <a href="/images/Ecommerce.png" target="_blank" rel="noopener noreferrer">
    <img
      src="/images/e-commerce.png"
      alt="Dashboard Power BI - Analyse de la performance e-commerce"
      style={{ cursor: 'pointer' }}
    />
  </a>

  <h4>Analyse de la Performance E-commerce</h4>

  <p>
  Analyse d’un dataset e-commerce de <strong>42 047 lignes et 25 variables</strong>
  pour évaluer la performance commerciale, la rentabilité et la logistique.
  Le projet comprend une <strong>Vue générale de la performance commerciale</strong>
  (CA, ventes et performances par région) ainsi qu’une
  <strong>Analyse de la performance logistique et de la rentabilité</strong>
  (délais de livraison, types d’expédition, remises, profit, marge et
  rentabilité par produit et segment client).
  Préparation et transformation des données avec <strong>Power Query</strong>,
  création de <strong>KPI et mesures DAX</strong> et réalisation de visualisations
  interactives pour faciliter la prise de décision.
</p>


  <div className={projectStyles.techStack}>
    Power BI • DAX • Power Query • Data Analysis
  </div>

  <div className={projectStyles.projectButtons}>
    <a href="https://github.com/A-Thecle/Analyse-e-commerce">
      <FaGithub className={projectStyles.icon} />
      GitHub
    </a>
  </div>
</div>


    </div>
      
      

    <div className={projectStyles.seeAll}>
      <a href="/projects/data">Voir tous les projets Data →</a>
    </div>
  </div>

  {/* PROJETS WEB & MOBILE */}
  <div className={projectStyles.projectCategory}>
    <h3>💻 Développement Web & Mobile</h3>

    <div className={projectStyles.projectsGrid}>
      <div className={projectStyles.projectCard}>
        <a href="/images/innov.png" target="_blank" rel="noopener noreferrer">
          <img src="/images/innov.png" alt="Projet Web" style={{cursor: 'pointer'}} />
        </a>
        <h4>Application de Gestion de Commandes de Services Numériques pour l'entreprise INNOV-T</h4>
        <p>
          Développement d'une plateforme professionnelle en ligne permettant aux clients de commander des services numériques tels que la création de sites web, le design graphique et d'autres solutions digitales. L'application inclut une authentification sécurisée, un tableau de bord intuitif et un suivi de l'avancement des projets en temps réel pour garantir une expérience client fluide et transparente.
        </p>
        <div className={projectStyles.techStack}>
          Angular.js • Nest.js • MySQL
        </div>
        <div className={projectStyles.projectButtons}>
          <a href="https://github.com/A-Thecle/gestion_de_projets_et_commandes_de_services_numerique"><FaGithub className={projectStyles.icon}/>GitHub</a>
          <a href="https://youtu.be/HwtGe_TCxcM"><FaYoutube className={projectStyles.icon}/>Démo en direct</a>
        </div>
      </div>

      <div className={projectStyles.projectCard}>
        <a href="/images/fermes1.png" target="_blank" rel="noopener noreferrer">
          <img src="/images/fermes1.png" alt="Projet Web" style={{cursor: 'pointer'}} />
        </a>
        <h4>Application de Gestion d'Exploitation Agricole</h4>
        <p>
          Développement d'une plateforme complète de gestion agricole permettant un suivi efficace du bétail, des calendriers de vaccination, des ventes de produits et des opérations d'alimentation animale. Le système aide à rationaliser les activités agricoles et à améliorer la productivité globale grâce à un suivi et une gestion organisés des données.
        </p>
        <div className={projectStyles.techStack}>
          Angular.js • Express.js • MySQL
        </div>
        <div className={projectStyles.projectButtons}>
          <a href="https://github.com/A-Thecle/Gestion_De_Ferme"  
          target="_blank" 
          rel="noopener noreferrer"><FaGithub className={projectStyles.icon}/>GitHub</a>
          <a href="https://youtu.be/5PlJVJZ1xbU"><FaYoutube className={projectStyles.icon}/>Démo en direct</a>
        </div>
      </div>

     
    </div>

    

    <div className={projectStyles.seeAll}>
      <a href="/projects">Voir tous les projets Web →</a>
    </div>
  </div>
</section>


  {/* SECTION CONTACT */}
      <section id="contact" className={contactStyles.contact}>
        
        {/* PARTIE GAUCHE */}
        <div className={contactStyles.contactText}>
          <h2>
            Contactez <span>Moi</span>
          </h2>

          <h4>Construisons Ensemble Quelque Chose de Grand</h4>

          <p>
            Vous avez une idée de projet, une collaboration ou une opportunité ?
            Je serais ravie d'échanger avec vous. N'hésitez pas à me contacter
            et créons ensemble quelque chose d'impactant.
          </p>

          <div className={contactStyles.contactInfo}>
  
  <div className={contactStyles.infoItem}>
    <span>📧</span>
    <a href="mailto:nathathecle@gmail.com">
      nathathecle@gmail.com
    </a>
  </div>

  <div className={contactStyles.infoItem}>
    <span>📱</span>
    <span>+261 38 46 875 35</span>
  </div>

  <div className={contactStyles.socialLinks}>
    
    <a
      href="https://www.linkedin.com/in/thècle-nathalie-916244433"
      target="_blank"
      rel="noopener noreferrer"
      className={contactStyles.socialItem}
    >
      <FaLinkedin />
      <span>Thècle Nathalie RAMANAMPAMONJY</span>
    </a>

    <a
      href="https://github.com/A-Thecle"
      target="_blank"
      rel="noopener noreferrer"
      className={contactStyles.socialItem}
    >
      <FaGithub />
      <span>A-Thecle</span>
    </a>

    <a
      href="https://www.facebook.com/thecle.nathalie.3/?locale=fr_FR"
      target="_blank"
      rel="noopener noreferrer"
      className={contactStyles.socialItem}
    >
      <FaFacebook />
      <span>Thècle Nathalie</span>
    </a>

  </div>

</div>

            
      
      
 </div>

        {/* PARTIE DROITE - FORMULAIRE */}
        <ContactForm />

      </section>
    </div>
  );
}