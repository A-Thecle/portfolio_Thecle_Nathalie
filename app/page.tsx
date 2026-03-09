import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook, FaEye , FaYoutube, FaFilePdf} from "react-icons/fa";
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



export default function Home() {
  return (
    <div className="min-h-screen bg-[#112240] text-white">

      {/* NAVBAR */}
 <nav className={Homestyles.navbar}>
  <div className={Homestyles.logo}>
    Tech_<span>Thècle</span>
  </div>

  <ul className={Homestyles.navLinks}>
    <li className={Homestyles.active}><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

      {/* ================= HOME SECTION ================= */}
      <section id="home" className={Homestyles.home}>
        <div className={Homestyles.homeContent}>
          
          <h1>
            Hi, I'm <span>Thècle Nathalie</span>
          </h1>

          <h2>Data Analyst &  Developer FullStack JS</h2>

          <p>
            I am a passionate and dedicated Data Scientist, Analyst,  and Web Developer,
            driven by problem-solving and continuous learning. I build
            intelligent data-driven solutions and scalable web applications
            that create real business impact. I am open to new opportunities
            where I can contribute, grow, and deliver value.
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

  {/* Bouton View CV en dessous */}
  <div className={Homestyles.viewCVContainer}>
    <a
      href="/CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={Homestyles.viewCV}
    >
      <FaEye size={20} />
      <span>View CV</span>
    </a>
  </div>
</div>
        </div>

        <div className={Homestyles.imageContainer}>
          <Image
            src="/images/myImage.png"
            alt="Profile Photo"
            width={400}
            height={400}
            className={Homestyles.profileImage}
          />
        </div>
      </section>


      {/* About SECTION */}
  <section id="about" className={styles.about}>
  <div className={styles.container}>
    
    <div className={styles.photoWrapper}>
      <div className={styles.photo}>
        <Image
          src="/images/soute.png"
          alt="Thècle Nathalie - Data Analyst & Developer"
          width={500}
          height={650}
          priority
          className="object-cover"
        />
      </div>
    </div>

    <div className={styles.textContent}>
      <h2>
        About <span>Me</span>
      </h2>

      <h3>Data Analyst & Full-Stack JavaScript Developer</h3>

      <p>
        I am a <span className={styles.highlight}>Data Analyst</span> and <span className={styles.highlight}>Full-Stack JavaScript Developer</span> with strong expertise in Angular, React, and Node.js.
      </p>

      <p>
        Passionate about turning complex data into actionable insights, I design modern, scalable, and user-centered web applications.
      </p>

      <p>
        Combining a sharp analytical mindset with solid technical skills, I build high-performance back-end systems, intuitive front-end interfaces, and data-driven solutions that deliver real business value.
      </p>

      <a href="#projects" className={styles.btn}>
        Explore My Projects →
      </a>
    </div>

  </div>
</section>

      {/* services SECTION */}
     {/* services SECTION */}
<section id="services" className={serviceStyles.services}>
  <div className={serviceStyles.container}>
    
    <h1 className={serviceStyles["sub-title"]}>
      My <span>Services</span>
    </h1>

    <div className={serviceStyles["services-list"]}>
      
      {/* Data Analysis */}
      <div className={serviceStyles["service-card"]}>
        <div className={serviceStyles.icon}>📊</div>
        <h2>Data Analysis</h2>
        <p>
          Transform raw datasets into actionable insights using modern
          analytics tools such as Power BI, Excel and Python to help
          businesses make data-driven decisions.
        </p>
        <a href="#contact" className={serviceStyles.read}>
          Request a Project
        </a>
      </div>

      {/* Data Science */}
      <div className={serviceStyles["service-card"]}>
        <div className={serviceStyles.icon}>🤖</div>
        <h2>Data Science & AI</h2>
        <p>
          Designing intelligent systems using Machine Learning and
          Deep Learning models to analyze complex data and build
          predictive solutions for real-world problems.
        </p>
        <a href="#contact" className={serviceStyles.read}>
          Start AI Project
        </a>
      </div>

      {/* Full Stack */}
      <div className={serviceStyles["service-card"]}>
        <div className={serviceStyles.icon}>💻</div>
        <h2>Full-Stack Development</h2>
        <p>
          Building modern, scalable and responsive web applications
          using Angular, Node.js and modern JavaScript frameworks
          with a strong focus on performance and user experience.
        </p>
        <a href="#contact" className={serviceStyles.read}>
          Start a Project
        </a>
      </div>

    </div>
  </div>
</section>

 {/* services Skills */}
<section id="skills" className={skillStyles.skillsSection}>
  <h2 className={skillStyles.skillsTitle}>
    My <span>Skills</span>
  </h2>

  <div className={skillStyles.skillsContainer}>
    
    {/* DATA SCIENCE */}
    <div className={skillStyles.skillBox}>
      <h3>Data Science & Analytics</h3>
      <div className={skillStyles.skillList}>
        <div className={skillStyles.skillItem}><FaPython /> Python</div>
        <div className={skillStyles.skillItem}> 📊 Power BI</div>
        <div className={skillStyles.skillItem}><GiArtificialIntelligence /> Machine Learning</div>
        <div className={skillStyles.skillItem}><GiArtificialIntelligence /> Deep Learning</div>
        <div className={skillStyles.skillItem}><SiTensorflow /> TensorFlow</div>
        <div className={skillStyles.skillItem}>📊 Excel</div>
        <div className={skillStyles.skillItem}>⚡ Power Query</div>
      </div>
    </div>

    {/* DEVELOPMENT */}
   <div className={skillStyles.skillBox}>
  <h3>Web & Mobile Development</h3>
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
      <MdDesignServices /> UI/UX Design
    </div>
  </div>
</div>

  </div>
</section>

 {/* projetcs SECTION */}
<section id="projects" className={projectStyles.projectsSection}>
  <h2 className={projectStyles.projectsTitle}>
    My Projects
  </h2>

  {/* DATA PROJECTS */}
  <div className={projectStyles.projectCategory}>
    <h3>📊 Data Analytics & Science Projects</h3>

    <div className={projectStyles.projectsGrid}>
      <div className={projectStyles.projectCard}>
        <img src="/images/learning_curve.png" alt="Data Project" />
        <h4>Titanic_ml_prediction</h4>
        
            <p>
            Developed a machine learning model using AdaBoost to predict whether a passenger survived the Titanic disaster based on historical passenger data.
            The model achieved a strong performance with a confusion matrix of [[95, 15], [17, 52]]. 
            In particular, the recall was 0.86 for class 0 (did not survive) and 0.75 for class 1 (survived), indicating that the model correctly identifies most passengers in each class.
            </p>
    
        
        <div className={projectStyles.techStack}>
          Python • Pandas • Numpy • Scikit-learn
        </div>
        <div className={projectStyles.projectButtons}>
         <a href="https://github.com/A-Thecle/titanic-ml-prediction"><FaGithub className={projectStyles.icon}/> GitHub</a>
        {/* <a href="#">Live Demo</a> */}
        </div>
      </div>

      <div className={projectStyles.projectCard}>
        <img src="/images/Dashboard_ventes.png" alt="Data Project" />
        <h4>Sales Data Analysis</h4>
        
            <p>
                    Developed an interactive Power BI dashboard to analyze a company's sales data for 2023. 
                    The project involved importing, exploring, and cleaning the dataset, then visualizing key metrics such as total revenue, quantity sold, number of orders, and sales trends by product, category, and region. 
                    The dashboard provides actionable insights into business performance and highlights top-selling products and seasonal trends.
            </p>
    
        
        <div className={projectStyles.techStack}>
           Power BI • DAX • Power Query
        </div>
        <div className={projectStyles.projectButtons}>
          <a href="https://github.com/A-Thecle/Sales-Data-Analysis-2023"><FaGithub className={projectStyles.icon}/>GitHub</a>
          <a href="/Dashboard_ventes .pdf" target="_blank" rel="noopener noreferrer"><FaFilePdf className={projectStyles.icon}/>.pdf</a> 
        </div>
      </div>
    </div>
      
      

    {/*<div className={projectStyles.seeAll}>
      <a href="/projects/data">See All Data Projects →</a>
    </div>*/}
  </div>

  {/* WEB & MOBILE PROJECTS */}
  <div className={projectStyles.projectCategory}>
    <h3>💻 Web & Mobile Development</h3>

    <div className={projectStyles.projectsGrid}>
      <div className={projectStyles.projectCard}>
        <img src="/images/innov.png" alt="Web Project" />
        <h4>Digital Services Order Management Application for company INNOV-T</h4>
        <p>
          Developed a professional online platform that allows clients to order digital services such as website creation, graphic design, and other digital solutions. The application includes secure authentication, an intuitive dashboard, and real-time project progress tracking to ensure a smooth and transparent client experience.
        </p>
        <div className={projectStyles.techStack}>
          Angular.js • Nest.js • MySQL
        </div>
        <div className={projectStyles.projectButtons}>
          <a href="https://github.com/A-Thecle/gestion_de_projets_et_commandes_de_services_numerique"><FaGithub className={projectStyles.icon}/>GitHub</a>
          <a href="https://youtu.be/HwtGe_TCxcM"><FaYoutube className={projectStyles.icon}/>Live Demo</a>
        </div>
      </div>

      <div className={projectStyles.projectCard}>
        <img src="/images/fermes1.png" alt="Web Project" />
        <h4>Farm Management Application</h4>
        <p>
          Developed a comprehensive farm management platform that enables efficient monitoring of livestock, vaccination schedules, product sales, and animal feeding operations. The system helps streamline farm activities and improve overall productivity through organized data tracking and management.
        </p>
        <div className={projectStyles.techStack}>
          Angular.js • Express.js • MySQL
        </div>
        <div className={projectStyles.projectButtons}>
          <a href="https://github.com/A-Thecle/Gestion_De_Ferme"  
          target="_blank" 
          rel="noopener noreferrer"><FaGithub className={projectStyles.icon}/>GitHub</a>
          <a href="https://youtu.be/5PlJVJZ1xbU"><FaYoutube className={projectStyles.icon}/>Live Demo</a>
        </div>
      </div>

     
    </div>

    

    <div className={projectStyles.seeAll}>
      <a href="/projects">See All Web Projects →</a>
    </div>
  </div>
</section>


  {/* CONTACT SECTION */}
      <section id="contact" className={contactStyles.contact}>
        
        {/* LEFT SIDE */}
        <div className={contactStyles.contactText}>
          <h2>
            Contact <span>Me</span>
          </h2>

          <h4>Let's Build Something Great Together</h4>

          <p>
            Have a project idea, collaboration, or opportunity?
            I would love to hear from you. Feel free to reach out
            and let’s create something impactful together.
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

        {/* RIGHT SIDE FORM */}
        <ContactForm />

      </section>
    </div>
  );
}
