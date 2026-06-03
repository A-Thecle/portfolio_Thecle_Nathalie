import React from "react";
import Link from "next/link";
import dataStyles from "./data.module.css";
import { FaGithub, FaFilePdf } from "react-icons/fa";

export default function DataProjectsPage() {
  return (
    <section className={dataStyles.projectsPage}>

      {/* EN-TÊTE */}
      <div className={dataStyles.header}>
        <h2>
          Projets <span>Data</span>
        </h2>

        <p>
          Cette section présente mes travaux en analyse de données et en data science.
          Ces projets démontrent ma capacité à analyser des données, construire
          des modèles prédictifs et transformer des ensembles de données bruts en
          informations exploitables pour l'aide à la décision.
        </p>
      </div>

      
      {/* ================= ANALYSE DE DONNÉES ================= */}

      <div className={dataStyles.category}>
        <h3>📊 Analyse de Données</h3>

        <div className={dataStyles.horizontalScroll}>

          <div className={dataStyles.projectCard}>
            <a href="/images/RH.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/images/RH.jpg" alt="Projet d'analyse de données" style={{cursor: 'pointer'}} />
            </a>

            <h4>Tableau de Bord d'Analyse des Données RH</h4>

            <p>
            Ce projet analyse les données des ressources humaines pour fournir des informations clés sur les effectifs. 
            Le tableau de bord met en évidence des indicateurs importants tels que le nombre total d'employés, 
            la répartition par genre et le nombre d'employés par département. Grâce à des visualisations interactives, 
            l'analyse aide les organisations à mieux comprendre leur structure d'effectifs et à soutenir une prise de décision RH basée sur les données.
            </p>

            <div className={dataStyles.tech}>
              PowerBI • Dax • Power Query
            </div>

            <div className={dataStyles.buttons}>
              <a href="https://github.com/A-Thecle/Human-Resources-Data-Analysis"><FaGithub className={dataStyles.icon}/> GitHub</a>
             
            </div>
          </div>

          
          <div className={dataStyles.projectCard}>
            <a href="/images/vue globale des ventes.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/vue globale des ventes.png" alt="Projet d'analyse de données" style={{cursor: 'pointer'}} />
            </a>

           <h4>Tableau de Bord de Performance Commerciale 2025</h4>

            <p>
            Un tableau de bord d'analyse commerciale complet offrant une vue d'ensemble claire des performances de l'entreprise tout au long de l'année 2025. 
            Le tableau de bord suit des indicateurs clés tels que le chiffre d'affaires total, le nombre total de ventes, les tendances mensuelles des revenus, le chiffre d'affaires par produit 
            et le chiffre d'affaires par ville. Les visualisations interactives aident à identifier les opportunités de croissance, les produits les plus performants 
            et les schémas régionaux de vente pour soutenir les décisions commerciales basées sur les données.
            </p>

            <div className={dataStyles.tech}>
              Excel • Dax • Power Query • Power Pivot • VBA
            </div>

            <div className={dataStyles.buttons}>
              <a href="https://github.com/A-Thecle/Vue-globale-de-ventes-.git"><FaGithub className={dataStyles.icon}/> GitHub</a>
              
            </div>
          </div>

            <div className={dataStyles.projectCard}>
            <a href="/images/hopital.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/hopital.png" alt="Projet d'analyse de données" style={{cursor: 'pointer'}} />
            </a>

            <h4>Tableau de Bord d'Analyse de la Performance Hospitalière et de la Qualité des Soins</h4>

            <p>
            Ce projet d'analyse de données de santé transforme les données hospitalières en informations exploitables. Le tableau de bord surveille des indicateurs de performance 
            critiques tels que le coût moyen par patient, la durée moyenne de séjour, la satisfaction des patients par maladie, 
            les taux de réadmission et les résultats de traitement réussis. En révélant des schémas dans la prestation des soins de santé, il soutient 
            des décisions basées sur des preuves visant à améliorer l'efficacité opérationnelle, les soins aux patients et la performance globale de l'hôpital.
            </p>

            <div className={dataStyles.tech}>
                Excel • Dax • Power Query • Power Pivot • VBA
            </div>

            <div className={dataStyles.buttons}>
              <a href="https://github.com/A-Thecle/Analyse-performance-hospitaliere.git"><FaGithub className={dataStyles.icon}/> GitHub</a>
             
            </div>
          </div>

            <div className={dataStyles.projectCard}>
            <a href="/images/Dashboard_ventes.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/Dashboard_ventes.png" alt="Projet d'analyse de données" style={{cursor: 'pointer'}} />
            </a>

            <h4>Tableau de Bord d'Analyse des Ventes avec Power BI</h4>

            <p>
            Ce tableau de bord d'analyse commerciale Power BI offre une vue d'ensemble complète des performances de l'entreprise. 
            Il suit des indicateurs clés tels que l'évolution mensuelle du chiffre d'affaires, le chiffre d'affaires total, le nombre total de commandes et la quantité vendue. 
            L'analyse détaille également les performances commerciales par région et par catégorie de produit, offrant des informations claires sur les 
            tendances commerciales et la demande des clients. Grâce à des visualisations interactives, le tableau de bord soutient une prise de décision 
            basée sur les données pour optimiser la stratégie commerciale et améliorer la performance globale.
            </p>

            <div className={dataStyles.tech}>
              PowerBI • Dax • Power Query
            </div>

            <div className={dataStyles.buttons}>
              <a href="https://github.com/A-Thecle/Human-Resources-Data-Analysis"><FaGithub className={dataStyles.icon}/> GitHub</a>
              
            </div>
          </div>

          <div className={dataStyles.projectCard}>
            <a href="/images/Analyse_RH.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/Analyse_RH.png" alt="Projet d'analyse de données" style={{cursor: 'pointer'}} />
            </a>

         <h4>Analytique RH : Performance des Effectifs et de l'Organisation</h4>

              <p>
              Un tableau de bord interactif d'analytique RH conçu pour transformer les données relatives aux effectifs en informations exploitables. 
              L'analyse explore la répartition des employés par département, niveau d'éducation et pays, tout en mesurant la performance 
              par département, type de contrat et région. En révélant les schémas clés des effectifs et les indicateurs de performance, 
              le tableau de bord permet une prise de décision basée sur les données dans la gestion des talents, la planification des effectifs et le développement organisationnel.
              </p>

            <div className={dataStyles.tech}>
             Excel • Dax • Power Query • Power Pivot • VBA
            </div>

            <div className={dataStyles.buttons}>
              <a href="https://github.com/A-Thecle/Analyse-RH.git"><FaGithub className={dataStyles.icon}/> GitHub</a>
              
            </div>
          </div>


            <div className={dataStyles.projectCard}>
            <a href="/images/Analyse des ventes.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/Analyse des ventes.png" alt="Projet d'analyse de données" style={{cursor: 'pointer'}} />
            </a>

            <h4>Tableau de Bord d'Analyse des Performances Commerciales et des Commandes</h4>

            <p>
            Un tableau de bord interactif d'analyse commerciale conçu pour surveiller les performances de l'entreprise et le comportement des commandes. 
            Il explore le chiffre d'affaires total, les commandes annulées, le chiffre d'affaires par région, produit et catégorie de produit, ainsi que 
            les tendances mensuelles des commandes. En identifiant les schémas de vente clés et les fluctuations dans le temps, le tableau de bord permet 
            des informations basées sur les données pour améliorer la stratégie commerciale et la prise de décision opérationnelle.
            </p>

            <div className={dataStyles.tech}>
              Excel • Dax • Power Query • Power Pivot • VBA
            </div>

            <div className={dataStyles.buttons}>
              <a href="https://github.com/A-Thecle/Analyse-de-ventes-.git"><FaGithub className={dataStyles.icon}/> GitHub</a>
            
            </div>
          </div>

          

        </div>
      </div>

      {/* ================= DATA SCIENCE ================= */}

      <div className={dataStyles.category}>
        <h3>🤖 Data Science</h3>

        <div className={dataStyles.horizontalScroll}>

          <div className={dataStyles.projectCard}>
            <a href="/images/student.png" target="_blank" rel="noopener noreferrer">
              <img src="/images/student.png" alt="Projet Data Science" style={{cursor: 'pointer'}} />
            </a>

           <h4>Prédiction des Notes aux Examens des Étudiants avec Deep Learning</h4>

         <p>
            Ce projet prédit les notes aux examens des étudiants en fonction de leurs habitudes de productivité et de leur mode de vie. 
            Un réseau de neurones implémenté avec NumPy analyse des facteurs tels que le temps d'étude, la durée de sommeil, l'utilisation des réseaux sociaux et la santé mentale.

            L'ensemble de données contient 5 000 échantillons avec 21 caractéristiques, fournissant des informations riches pour comprendre l'impact des différentes variables sur la performance académique.

            Le modèle est évalué à l'aide de métriques telles que la perte (Loss), l'erreur quadratique moyenne (MSE) et le score R² pour mesurer la progression de l'apprentissage et la précision des prédictions.
</p>

            <div className={dataStyles.tech}>
              Python • Scikit-Learn • Numpy • Pandas • Matplotlib
            </div>

            <div className={dataStyles.buttons}>
              <a href="https://github.com/A-Thecle/student-exam-score-prediction">
                <FaGithub className={dataStyles.icon}/> GitHub
              </a>
            </div>
          </div>

            <div className={dataStyles.projectCard}>
        <a href="/images/learning_curve.png" target="_blank" rel="noopener noreferrer">
          <img src="/images/learning_curve.png" alt="Projet Data" style={{cursor: 'pointer'}} />
        </a>
        <h4>Prédiction Titanic avec Machine Learning</h4>
        
            <p>
              Développement d'un modèle de machine learning utilisant AdaBoost pour prédire si un passager a survécu au naufrage du Titanic en se basant sur les données historiques des passagers.

              L'ensemble de données contient 891 échantillons avec 16 caractéristiques, capturant les principales caractéristiques des passagers telles que l'âge, la classe et le prix du billet.

              Le modèle a obtenu une performance solide avec une matrice de confusion de [[95, 15], [17, 52]]. 
              En particulier, le rappel était de 0,86 pour la classe 0 (n'a pas survécu) et de 0,75 pour la classe 1 (a survécu), indiquant que le modèle identifie correctement la plupart des passagers dans chaque classe.
              </p>
    
        
        <div className={dataStyles.tech}>
          Python • Pandas • Numpy • Scikit-learn
        </div>
        <div className={dataStyles.buttons}>
         <a href="https://github.com/A-Thecle/titanic-ml-prediction"><FaGithub className={dataStyles.icon}/> GitHub</a>
        {/* <a href="#">Live Demo</a> */}
        </div>
      </div>


        </div>
      </div>


      

      {/* BOUTON DE RETOUR */}

      <div className={dataStyles.backHome}>
        <Link href="/">⬅ Retour à l'Accueil</Link>
      </div>

    </section>
  );
}