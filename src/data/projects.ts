export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string | null
  live: string | null
  featured: boolean
  privateRepo?: boolean
}

export const projects: Project[] = [
  {
    title: "Sportznic",
    description:
      "Live score updates along with commentary focusing on websockets for fast updates.",
    tech: ["WebSockets", "Node.js", "React", "Express", "PostgreSql(Neon)","JavaScript"],
    image: "/sportznic.png",
    github: "https://github.com/manishgupta412/Sportz",
    live: "https://sportznic.netlify.app/",
    featured: true,
  },
  {
    title: "HR Analytics Dashboard",
    description: "Engineered an end-to-end HR analytics dashboard by performing data cleansing, transformation, and feature engineering using Power Query and optimized relational data modeling. advanced DAX measures ",
    tech: ["Power BI", "Power Query (M)", "DAX", "Data Modeling (Star Schema)", "ETL", "Excel/CSV", "Interactive Data Visualization"],
    image: "/dev_portal.png",
    github: null,
    live: "https://app.powerbi.com/groups/me/reports/7abcec09-52cb-4b82-a1da-8d69fe651787/29eaa2e5a60ed7e33259?experience=power-bi",
    featured: true,
    privateRepo: true,
  },
  {
    title: "House price prediction model",
    description: "This project builds a Machine Learning model to predict median house values based on housing and demographic features using the California Housing dataset.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "NumPy"],
    image: "/covid_prediction.png",
    github: "https://github.com/manishgupta412/House-Prediction-ML-Model",
    live: null,
    featured: true,
    privateRepo: false,
  },
] 