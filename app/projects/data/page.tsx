import React from "react";
import Link from "next/link";
import dataStyles from "./data.module.css";
import { FaGithub, FaFilePdf } from "react-icons/fa";

export default function DataProjectsPage() {
  return (
    <section className={dataStyles.projectsPage}>

      {/* HEADER */}
      <div className={dataStyles.header}>
        <h2>
          Data <span>Projects</span>
        </h2>

        <p>
          This section presents my work in data analysis and data science.
          These projects demonstrate my ability to analyze data, build
          predictive models, and transform raw datasets into valuable
          insights for decision-making.
        </p>
      </div>

      {/* ================= DATA SCIENCE ================= */}

      <div className={dataStyles.category}>
        <h3>🤖 Data Science</h3>

        <div className={dataStyles.horizontalScroll}>

          <div className={dataStyles.projectCard}>
            <img src="/images/student.png" alt="Data Science Project"/>

           <h4>Student Exam Score Prediction using Deep Learning</h4>

            <p>
        This project predicts students’ exam scores based on their productivity and lifestyle habits. 
        A neural network implemented with NumPy analyzes factors such as study time, sleep duration, 
        social media usage, and mental health to understand their impact on academic performance. 
        The model is evaluated using metrics such as Loss, MSE, and R² score to measure learning progress and prediction accuracy.
            </p>

            <div className={dataStyles.tech}>
              Python • Scikit-Learn •Numpy • Pandas • Matplotlib
            </div>

            <div className={dataStyles.buttons}>
              <a href="https://github.com/A-Thecle/student-exam-score-prediction">
                <FaGithub className={dataStyles.icon}/> GitHub
              </a>
            </div>
          </div>


        </div>
      </div>

      {/* ================= DATA ANALYSIS ================= */}

      <div className={dataStyles.category}>
        <h3>📊 Data Analysis</h3>

        <div className={dataStyles.horizontalScroll}>

          <div className={dataStyles.projectCard}>
            <img src="/images/RH.jpg" alt="Data Analysis Project"/>

            <h4>Human Resources Data Analysis Dashboard</h4>

            <p>
            This project analyzes human resources data to provide key insights about the workforce. 
            The dashboard highlights important indicators such as the total number of employees, 
            gender distribution, and the number of employees by department. Using interactive 
            visualizations, the analysis helps organizations better understand their workforce 
            structure and support data-driven HR decision making.
            </p>

            <div className={dataStyles.tech}>
              PowerBI • Dax • Power Query
            </div>

            <div className={dataStyles.buttons}>
              <a href="https://github.com/A-Thecle/Human-Resources-Data-Analysis"><FaGithub className={dataStyles.icon}/> GitHub</a>
              <a href="/RH.pdf" target="_blank" rel="noopener noreferrer"><FaFilePdf className={dataStyles.icon}/>.pdf</a> 
            </div>
          </div>

          

        </div>
      </div>

      

      {/* RETURN BUTTON */}

      <div className={dataStyles.backHome}>
        <Link href="/">⬅ Back to Home</Link>
      </div>

    </section>
  );
}