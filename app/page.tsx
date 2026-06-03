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
        <div className={Homestyles.homeContent}>
          
          <h1>
            Bonjour, je suis <span>Thècle Nathalie</span>
          </h1>

          <h2>Analyste de Données & Développeuse FullStack JS</h2>

          <p>
            Je suis une Data Scientist, Analyste et Développeuse Web passionnée et dévouée,
            animée par la résolution de problèmes et l'apprentissage continu. Je conçois
            des solutions intelligentes basées sur les données et des applications web évolutives
            qui génèrent un impact business réel. Je suis ouverte à de nouvelles opportunités
            où je peux contribuer, évoluer et apporter de la valeur.
          </p>
    <div className={Homestyles.socialIcons}>
  {/* Les 3 icônes sociales principales */}
  <div className={Homestyles.topIcons}>
    <a
      href="https://www.linkedin.com/in/th%C3%A8cle-nathalie-ramanampamonjy-03897b355" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} />
    </a>
    <a  href="https://github.com/A-Thecle" target="_blank"  rel="noopener noreferrer" >
      <FaGithub size={24} />
    </a>
    <a href="https://www.facebook.com/thecle.nathalie.3/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={24} />
    </a>
  </div>

  {/* Bouton Voir CV en dessous */}
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
          <Image
            src="/images/myImage.png"
            alt="Photo de profil"
            width={400}
            height={400}
            className={Homestyles.profileImage}
          />
        </div>
      </section>


      {/* SECTION COMPÉTITIONS */}
<section id="competition" className={styles.about}>
  <div className={styles.container}>

    <div className={styles.textContent}>

      <h2>
        Compétitions <span>& Distinctions</span>
      </h2>

      <p className={styles.intro}>
        Participer à des compétitions technologiques m'a permis de mettre en pratique
        mes compétences en analyse de données, résolution de problèmes et développement
        logiciel dans des environnements exigeants et stimulants.
      </p>

      <div className={styles.competitionCardWrapper}>
        {/* Image à l'extérieur de la carte - GAUCHE */}
        <div className={styles.cardImageOutside}>
          <div className={styles.imageGlow}></div>
          <Image
            src="/images/certificat.jpg"
            alt="Excel Productivity Challenge"
            width={320}
            height={240}
            className={styles.cardImgOutside}
          />
          <div className={styles.badge}>🥈 2ème Place</div>
        </div>

        {/* Carte texte */}
        <div className={styles.competitionCard}>
          <div className={styles.cardContent}>
            <h3>Excel Productivity Challenge</h3>
            <p>
              Distinguée par une <span className={styles.highlight}> 2ème place</span>
              lors de l'Ivo Egnana Tech Meeting organisé par
              <span className={styles.highlight}> Youth Computing</span>.
            </p>
            <p>
              Une compétition exigeante centrée sur l'analyse de données,
              la logique décisionnelle et la maîtrise avancée d'Excel à travers
              plusieurs défis chronométrés.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.competitionCardWrapper}>
        {/* Image à l'extérieur de la carte - DROITE */}
        <div className={styles.cardImageOutsideRight}>
          <div className={styles.imageGlow}></div>
          <Image
            src="/images/shedevs.jpg"
            alt="Hackathon Smart City"
            width={320}
            height={240}
            className={styles.cardImgOutside}
          />
          <div className={styles.badge}>🚀 Hackathon 24h</div>
        </div>

        {/* Carte texte */}
        <div className={styles.competitionCard}>
          <div className={styles.cardContent}>
            <h3>Smart City Hackathon</h3>
            <p>
              Participation à un hackathon intensif de
              <span className={styles.highlight}> 24 heures</span>
              organisé par
              <span className={styles.highlight}> Youth Computing</span>.
            </p>
            <p>
              Conception et développement d'un prototype innovant destiné à
              contribuer à la transformation de
              <span className={styles.highlight}> Fianarantsoa en Smart City</span>.
              Une expérience enrichissante en développement, innovation,
              travail d'équipe et résolution de défis réels.
            </p>
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
        <div className={serviceStyles.icon}>📊</div>
        <h2>Analyse de Données</h2>
        <p>
          Transformation de données brutes en insights exploitables à l'aide d'outils d'analyse modernes
          tels que Power BI, Excel et Python pour aider les entreprises à prendre des décisions basées sur les données.
        </p>
        <a href="#contact" className={serviceStyles.read}>
          Demander un projet
        </a>
      </div>

      {/* Data Science & IA */}
      <div className={serviceStyles["service-card"]}>
        <div className={serviceStyles.icon}>🤖</div>
        <h2>Data Science & IA</h2>
        <p>
          Conception de systèmes intelligents utilisant des modèles de Machine Learning et de
          Deep Learning pour analyser des données complexes et construire des solutions
          prédictives pour des problèmes concrets.
        </p>
        <a href="#contact" className={serviceStyles.read}>
          Démarrer un projet IA
        </a>
      </div>

      {/* Développement Full-Stack */}
      <div className={serviceStyles["service-card"]}>
        <div className={serviceStyles.icon}>💻</div>
        <h2>Développement Full-Stack</h2>
        <p>
          Création d'applications web modernes, évolutives et responsives
          utilisant Angular, Node.js et les frameworks JavaScript modernes
          avec une forte attention portée à la performance et à l'expérience utilisateur.
        </p>
        <a href="#contact" className={serviceStyles.read}>
          Démarrer un projet
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
    
    {/* DATA SCIENCE */}
    <div className={skillStyles.skillBox}>
      <h3>Data Science & Analytique</h3>
      <div className={skillStyles.skillList}>
        <div className={skillStyles.skillItem}><FaPython /> Python</div>
        <div className={skillStyles.skillItem}> 📊 Power BI</div>
        <div className={skillStyles.skillItem}><GiArtificialIntelligence /> Machine Learning</div>
        <div className={skillStyles.skillItem}><GiArtificialIntelligence /> Deep Learning</div>
        <div className={skillStyles.skillItem}><SiTensorflow />PyTorch</div>
        <div className={skillStyles.skillItem}>📊 Excel</div>
        <div className={skillStyles.skillItem}>⚡ Power Query</div>
      </div>
    </div>

    {/* DÉVELOPPEMENT */}
   <div className={skillStyles.skillBox}>
  <h3>Développement Web & Mobile</h3>
 <div className={skillStyles.skillList}>
    <div className={skillStyles.skillItem}>
      <FaNodeJs /> Node.js
    </div>
     <div className={skillStyles.skillItem}>
      <FaAngular /> Angular
    </div>
      <div className={skillStyles.skillItem}>
      <SiNextdotjs /> Next.js
    </div>
    <div className={skillStyles.skillItem}>
      <SiFlutter /> Flutter
    </div>
    <div className={skillStyles.skillItem}>
      <FaHtml5 /> HTML
    </div>
  <div className={skillStyles.skillItem}>
      <FaCss3Alt /> CSS
    </div>
    <div className={skillStyles.skillItem}>
      <MdDesignServices /> Design UI/UX
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
     <div className={`${projectStyles.projectCard} ${projectStyles.houseCard}`}>
    <a href="/images/house_price.png" target="_blank" rel="noopener noreferrer">
      <img src="/images/house_price.png" alt="Projet Data" style={{cursor: 'pointer'}} />
    </a>
    <h4>Prédiction des Prix Immobiliers (Deep Learning)</h4>
    
        <p>
        Construction d'un modèle de deep learning avec PyTorch pour prédire les prix immobiliers à partir de données immobilières (21 613 échantillons, 21 caractéristiques).
        La pipeline inclut le prétraitement des données, la normalisation des caractéristiques et la division entraînement/test.
        
        L'architecture du réseau de neurones (16 → 8 → 1 neurones avec ReLU et Dropout 0.3) a été entraînée en utilisant l'optimiseur Adam et la perte MSE sur 5 000 itérations.
        
        Obtention de performances solides avec un score R² d'environ 0,8 sur l'ensemble de test. MLflow a été utilisé pour le suivi des expériences, l'enregistrement des métriques, des artefacts et du modèle entraîné.
        </p>

    
    <div className={projectStyles.techStack}>
      Python • PyTorch • MLflow • Scikit-learn • Pandas • Numpy • Matplotlib
    </div>
    <div className={projectStyles.projectButtons}>
     <a href="https://github.com/your-username/house-price-project"><FaGithub className={projectStyles.icon}/> GitHub</a>
    {/* <a href="#">Live Demo</a> */}
    </div>
</div>

      <div className={projectStyles.projectCard}>
        <a href="/images/Analyse_comerciale.png" target="_blank" rel="noopener noreferrer">
          <img src="/images/Analyse_comerciale.png" alt="Projet Data" style={{cursor: 'pointer'}} />
        </a>
        <h4>Analyse des Données Commerciales</h4>
        
             <p>
    Réalisation d'une analyse des données commerciales et développement d'un tableau de bord interactif Excel pour suivre les indicateurs clés de performance (KPI), incluant le chiffre d'affaires total, le coût d'achat, la marge bénéficiaire et le nombre de clients.
    Le projet a inclus la collecte, le nettoyage et la transformation des données, ainsi que la création de rapports dynamiques et de visualisations pour analyser les performances commerciales par produit, catégorie et région.
            </p>
    
        
        <div className={projectStyles.techStack}>
           Excel • DAX • Power Query • Power Pivot
        </div>
        <div className={projectStyles.projectButtons}>
          <a href="https://github.com/A-Thecle/Sales-Data-Analysis-2023"><FaGithub className={projectStyles.icon}/>GitHub</a>
          
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
      href="https://www.linkedin.com/in/th%C3%A8cle-nathalie-ramanampamonjy-03897b355"
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