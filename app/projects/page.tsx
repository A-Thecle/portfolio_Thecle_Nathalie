// app/projects/page.jsx
import React from "react";
import Link from "next/link";
import projectStyles from "../projects/project_page.module.css";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

export default function ProjectsPage() {
  return (
    <section className={projectStyles.projectsPage}>

      {/* EN-TÊTE */}
      <div className={projectStyles.header}>
        <h2>
          Mes <span>Projets</span>
        </h2>
        <p>
          Explorez mes projets en design UI/UX et en développement d'applications.
          Ces travaux démontrent ma capacité à concevoir et à construire des
          produits numériques modernes pour les plateformes web et mobiles.
        </p>
      </div>

        {/* ================= DÉVELOPPEMENT WEB ================= */}

      <div className={projectStyles.category}>
        <h3>💻 Développement Web</h3>

        <div className={projectStyles.horizontalScroll}>

          <div className={projectStyles.projectCard}>
            <a href="/images/innov.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/innov.png" alt="Projet Web" style={{cursor: 'pointer'}} />
            </a>
            <h4>Gestion de Commandes de Services Numériques</h4>
            <p>
               Développement d'une plateforme professionnelle en ligne permettant aux clients de commander des services numériques tels que la création de sites web, le design graphique et d'autres solutions digitales. L'application inclut une authentification sécurisée, un tableau de bord intuitif et un suivi de l'avancement des projets en temps réel pour garantir une expérience client fluide et transparente.
            </p>

            <div className={projectStyles.tech}>
              Angular • NestJS • MySQL
            </div>

            <div className={projectStyles.buttons}>
              <a href="https://github.com/A-Thecle/gestion_de_projets_et_commandes_de_services_numerique"><FaGithub className={projectStyles.icon}/>GitHub</a>
              <a href="https://youtu.be/HwtGe_TCxcM"><FaYoutube className={projectStyles.icon}/>Démo</a>
            </div>
          </div>

          <div className={projectStyles.projectCard}>
            <a href="/images/fermes1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/fermes1.png" alt="Projet Web" style={{cursor: 'pointer'}} />
            </a>
            <h4>Plateforme de Gestion d'Exploitation Agricole</h4>
            <p>
               Développement d'une plateforme complète de gestion agricole permettant un suivi efficace du bétail, des calendriers de vaccination, des ventes de produits et des opérations d'alimentation animale. Le système aide à rationaliser les activités agricoles et à améliorer la productivité globale grâce à un suivi et une gestion organisés des données.
            </p>

            <div className={projectStyles.tech}>
              Angular • Express • MySQL
            </div>

            <div className={projectStyles.buttons}>
              <a href="https://github.com/A-Thecle/Gestion_De_Ferme"><FaGithub className={projectStyles.icon}/>GitHub</a>
              <a href="https://youtu.be/5PlJVJZ1xbU"><FaYoutube className={projectStyles.icon}/>Démo</a>
            </div>
          </div>

        </div>
      </div>

     
 {/* ================= DÉVELOPPEMENT MOBILE ================= */}
  <h3 className={projectStyles.titleSection}>📲 Développement Mobile</h3>

  <div className={projectStyles.mobileSection}>

    <div className={projectStyles.mobileCard}>
      <a href="/images/mobile1 .jpg" target="_blank" rel="noopener noreferrer">
        <img src="/images/mobile1 .jpg" alt="Application Mobile" style={{cursor: 'pointer'}} />
      </a>

      <div className={projectStyles.projectInfo}>
        <h4>Application Flutter – Détection de Plantes</h4>
        <p>
          Une application mobile Flutter qui identifie les plantes par scan et suggère des instructions d'entretien en utilisant TensorFlow Lite.
        </p>

        <div className={projectStyles.tech}>
          Flutter • Firebase
        </div>

        <div className={projectStyles.buttons}>
         {/*<a href="#">GitHub</a> 
          <a href="#">Démo</a> */}
        </div>
      </div>

    </div>

     <div className={projectStyles.mobileCard}>
      <a href="/images/eSignPro.jpg" target="_blank" rel="noopener noreferrer">
        <img src="/images/eSignPro.jpg" alt="Application Mobile" style={{cursor: 'pointer'}} />
      </a>

      <div className={projectStyles.projectInfo}>
       <h4>Application Flutter – eSignPro</h4>
<p>
    Une application qui permet aux utilisateurs de signer des documents en quelques secondes, de consulter l'historique des documents signés, et de les ouvrir, télécharger ou partager facilement.
</p>

        <div className={projectStyles.tech}>
          Flutter • Firebase
        </div>

        <div className={projectStyles.buttons}>
         {/*<a href="#">GitHub</a> 
          <a href="#">Démo</a> */}
        </div>
      </div>

    </div>


    

  </div>
      
       {/* ================= DESIGN MOBILE ================= */}


  <h3 className={projectStyles.titleSection}>📲 Design Mobile</h3>

  <div className={projectStyles.mobileSection}>

    <div className={projectStyles.mobileCard}>
      <a href="/images/mobile.png" target="_blank" rel="noopener noreferrer">
        <img src="/images/mobile.png" alt="Application Mobile" style={{cursor: 'pointer'}} />
      </a>

      <div className={projectStyles.projectInfo}>
       <h4>Application Mobile de Signature Électronique</h4>
      <p>Design UI/UX pour une application mobile permettant aux utilisateurs de signer et gérer des documents de manière sécurisée via la plateforme eSignPro.</p>
        <div className={projectStyles.buttons}>
          <a href="https://www.figma.com/design/JWzV3xBTRPOG3tlDVyIlti/Untitled?node-id=0-1&p=f&t=mEHJXys5UPtb9ch9-0" target="_blank"><SiFigma className={projectStyles.icon}/> Voir sur Figma</a>
          
        </div>
      </div>
    </div>

     <div className={projectStyles.mobileCard}>
      <a href="/images/figma6.png" target="_blank" rel="noopener noreferrer">
        <img src="/images/figma6.png" alt="Application Mobile" style={{cursor: 'pointer'}} />
      </a>

      <div className={projectStyles.projectInfo}>
      <h4>Application Mobile de Réservation de Salles</h4>
       <p>Design UI/UX pour une application mobile permettant aux utilisateurs de rechercher, visualiser et réserver des salles facilement.</p>


        <div className={projectStyles.buttons}>
         <a href="https://www.figma.com/design/fv0ooZQ5cytBEcyHokbziG/Try?node-id=34-11&t=pgKJULk4UmjD9z6i-0"><SiFigma className={projectStyles.icon}/>Voir sur Figma</a> 
        
        </div>
      </div>
    </div>
  </div>


{/* ================= DESIGN WEB ================= */}

      <div className={projectStyles.category}>
        <h3>🎨 Design Web</h3>

        <div className={projectStyles.horizontalScroll}>

          <div className={projectStyles.projectCard}>
            <a href="/images/figma2.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/figma2.png" alt="Design Web" style={{cursor: 'pointer'}} />
            </a>
            <h4>Interface UI de Site Web d'Agence Créative</h4>
            <p>Design UI moderne pour un site web d'agence numérique créative.</p>
            <div className={projectStyles.buttons}>
              
              <a href="https://www.figma.com/design/97yCgnNzDWfTs8KwbbQvnI/Untitled?node-id=2-4&t=SAFoNbth5Bbwmd9J-0"><SiFigma className={projectStyles.icon}/>Figma</a>
            </div>
          </div>

          <div className={projectStyles.projectCard}>
            <a href="/images/figma1.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/figma1.png" alt="Design Web" style={{cursor: 'pointer'}} />
            </a>
            <h4>Interface UI de Site Web d'Agence Créative</h4>
            <p>Design UI moderne pour un site web d'agence numérique créative.</p>
            <div className={projectStyles.buttons}>
              
              <a href="https://www.figma.com/design/iQUfOYmTmAehLL383iU6yq/Animation_image?node-id=1-2&t=zecuiKFG2gfGMz5k-0"><SiFigma className={projectStyles.icon}/>Figma</a>
            </div>
          </div>

          <div className={projectStyles.projectCard}>
            <a href="/images/home.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/home.png" alt="Design Web" style={{cursor: 'pointer'}} />
            </a>
            <h4>Interface UI de Site Web d'Agence Créative</h4>
            <p>Design UI moderne pour un site web d'agence numérique créative.</p>
            <div className={projectStyles.buttons}>
              
              <a href="https://www.figma.com/design/oJLrivuBPEwSM6XBrYt2kv/projet-ventes-de-sacs?node-id=36-65&t=hmHUgx4Ncbzh1And-0"><SiFigma className={projectStyles.icon}/>Figma</a>
            </div>
          </div>

          

        </div>
      </div>

     

    

      {/* BOUTON DE RETOUR */}

      <div className={projectStyles.backHome}>
        <Link href="/">⬅ Retour à l'Accueil</Link>
      </div>

    </section>
  );
}