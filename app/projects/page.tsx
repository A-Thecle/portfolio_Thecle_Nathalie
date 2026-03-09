// app/projects/page.jsx
import React from "react";
import Link from "next/link";
import projectStyles from "../projects/project_page.module.css";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

export default function ProjectsPage() {
  return (
    <section className={projectStyles.projectsPage}>

      {/* HEADER */}
      <div className={projectStyles.header}>
        <h2>
          My <span>Projects</span>
        </h2>
        <p>
          Explore my projects in UI/UX design and application development.
          These works demonstrate my ability to design and build modern
          digital products for web and mobile platforms.
        </p>
      </div>

        {/* ================= WEB DEVELOPMENT ================= */}

      <div className={projectStyles.category}>
        <h3>💻 Web Development</h3>

        <div className={projectStyles.horizontalScroll}>

          <div className={projectStyles.projectCard}>
            <img src="/images/innov.png" alt="Web Project" />
            <h4>Digital Services Order Management</h4>
            <p>
               Developed a professional online platform that allows clients to order digital services such as website creation, graphic design, and other digital solutions. The application includes secure authentication, an intuitive dashboard, and real-time project progress tracking to ensure a smooth and transparent client experience.
            </p>

            <div className={projectStyles.tech}>
              Angular • NestJS • MySQL
            </div>

            <div className={projectStyles.buttons}>
              <a href="https://github.com/A-Thecle/gestion_de_projets_et_commandes_de_services_numerique"><FaGithub className={projectStyles.icon}/>GitHub</a>
              <a href="https://youtu.be/HwtGe_TCxcM"><FaYoutube className={projectStyles.icon}/>Demo</a>
            </div>
          </div>

          <div className={projectStyles.projectCard}>
            <img src="/images/fermes1.png" alt="Web Project" />
            <h4>Farm Management Platform</h4>
            <p>
               Developed a comprehensive farm management platform that enables efficient monitoring of livestock, vaccination schedules, product sales, and animal feeding operations. The system helps streamline farm activities and improve overall productivity through organized data tracking and management.
            </p>

            <div className={projectStyles.tech}>
              Angular • Express • MySQL
            </div>

            <div className={projectStyles.buttons}>
              <a href="https://github.com/A-Thecle/Gestion_De_Ferme"><FaGithub className={projectStyles.icon}/>GitHub</a>
              <a href="https://youtu.be/5PlJVJZ1xbU"><FaYoutube className={projectStyles.icon}/>Demo</a>
            </div>
          </div>

        </div>
      </div>

     
 {/* ================= MOBILE DEVELOPPEMENT ================= */}
  <h3 className={projectStyles.titleSection}>📲 Mobile Development</h3>

  <div className={projectStyles.mobileSection}>

    <div className={projectStyles.mobileCard}>
      <img src="/images/mobile1 .jpg" alt="Mobile App" />

      <div className={projectStyles.projectInfo}>
        <h4>Flutter App – Plant Detection</h4>
        <p>
          A Flutter mobile app that identifies plants through scanning and suggests care instructions using TensorFlow Lite.
        </p>

        <div className={projectStyles.tech}>
          Flutter • Firebase
        </div>

        <div className={projectStyles.buttons}>
         {/*<a href="#">GitHub</a> 
          <a href="#">Demo</a> */}
        </div>
      </div>

    </div>

     <div className={projectStyles.mobileCard}>
      <img src="/images/eSignPro.jpg" alt="Mobile App" />

      <div className={projectStyles.projectInfo}>
       <h4>Flutter App – eSignPro</h4>
<p>
    An app that allows users to sign documents in seconds, view the history of signed documents, and open, download, or share them easily.
</p>

        <div className={projectStyles.tech}>
          Flutter • Firebase
        </div>

        <div className={projectStyles.buttons}>
         {/*<a href="#">GitHub</a> 
          <a href="#">Demo</a> */}
        </div>
      </div>

    </div>


    

  </div>
      
       {/* ================= MOBILE DESIGN ================= */}


  <h3 className={projectStyles.titleSection}>📲 Mobile Design</h3>

  <div className={projectStyles.mobileSection}>

    <div className={projectStyles.mobileCard}>
      <img src="/images/mobile.png" alt="Mobile App" />

      <div className={projectStyles.projectInfo}>
       <h4>Digital Signature Mobile Application</h4>
      <p>UI/UX design for a mobile application that allows users to sign and manage documents securely using the eSignPro platform.</p>
        <div className={projectStyles.buttons}>
          <a href="https://www.figma.com/design/JWzV3xBTRPOG3tlDVyIlti/Untitled?node-id=0-1&p=f&t=mEHJXys5UPtb9ch9-0" target="_blank"><SiFigma className={projectStyles.icon}/> Voir sur Figma</a>
          
        </div>
      </div>
    </div>

     <div className={projectStyles.mobileCard}>
      <img src="/images/figma6.png" alt="Mobile App" />

      <div className={projectStyles.projectInfo}>
      <h4>Room Booking Mobile App</h4>
       <p>UI/UX design for a mobile application that enables users to search, view, and book rooms easily.</p>


        <div className={projectStyles.buttons}>
         <a href="https://www.figma.com/design/fv0ooZQ5cytBEcyHokbziG/Try?node-id=34-11&t=pgKJULk4UmjD9z6i-0"><SiFigma className={projectStyles.icon}/>Voir sur Figma</a> 
        
        </div>
      </div>
    </div>
</div>


{/* ================= WEB DESIGN ================= */}

      <div className={projectStyles.category}>
        <h3>🎨 Web Design</h3>

        <div className={projectStyles.horizontalScroll}>

          <div className={projectStyles.projectCard}>
            <img src="/images/figma2.png" alt="Web Design" />
            <h4>Creative Agency Website UI</h4>
            <p>Modern UI design for a creative digital agency website.</p>
            <div className={projectStyles.buttons}>
              
              <a href="https://www.figma.com/design/97yCgnNzDWfTs8KwbbQvnI/Untitled?node-id=2-4&t=SAFoNbth5Bbwmd9J-0"><SiFigma className={projectStyles.icon}/>Figma</a>
            </div>
          </div>

          <div className={projectStyles.projectCard}>
            <img src="/images/figma1.png" alt="Web Design" />
            <h4>Creative Agency Website UI</h4>
            <p>Modern UI design for a creative digital agency website.</p>
            <div className={projectStyles.buttons}>
              
              <a href="https://www.figma.com/design/iQUfOYmTmAehLL383iU6yq/Animation_image?node-id=1-2&t=zecuiKFG2gfGMz5k-0"><SiFigma className={projectStyles.icon}/>Figma</a>
            </div>
          </div>

          <div className={projectStyles.projectCard}>
            <img src="/images/home.png" alt="Web Design" />
            <h4>Creative Agency Website UI</h4>
            <p>Modern UI design for a creative digital agency website.</p>
            <div className={projectStyles.buttons}>
              
              <a href="https://www.figma.com/design/oJLrivuBPEwSM6XBrYt2kv/projet-ventes-de-sacs?node-id=36-65&t=hmHUgx4Ncbzh1And-0"><SiFigma className={projectStyles.icon}/>Figma</a>
            </div>
          </div>

          

        </div>
      </div>

     

    

      {/* RETURN BUTTON */}

      <div className={projectStyles.backHome}>
        <Link href="/">⬅ Back to Home</Link>
      </div>

    </section>
  );
}