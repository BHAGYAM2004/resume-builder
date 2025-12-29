// resumeData.js - Extracted from your Flask portfolio
export const resumeData = {
  main: {
    name: "Pardhu",
    occupation: "B.Tech CSE-AIML | Full-Stack Developer",
    description: "Final-year B.Tech student at St. Mary's Engineering College, specializing in Artificial Intelligence and Machine Learning (AIML). Strong foundation in AI/ML concepts with practical exposure in Cybersecurity, Python/Flask development, and Web Scraping. GATE aspirant with hands-on experience beyond classroom.",
    image: "/profile.png", // Add your photo to public/
    contact: {
      email: "pardhu@email.com", // Update with your real email
      phone: "+91-XXXXXXXXXX",   // Update with your number
      linkedin: "linkedin.com/in/pardhu" // Update link
    },
    address: {
      city: "Hyderabad",
      state: "Telangana"
    }
  },
  
  // Skills from your portfolio
  skills: [
    { id: "flask", name: "Flask (Python Web Framework)" },
    { id: "python", name: "Python (Core)" },
    { id: "java", name: "Java (Core)" },
    { id: "c", name: "C (Core)" },
    { id: "mysql", name: "MySQL (Basic SQL)" },
    { id: "firebase", name: "Firebase (Realtime DB, Auth)" },
    { id: "htmlcss", name: "HTML, CSS, JavaScript" },
    { id: "scraping", name: "Web Scraping" },
    { id: "cybersec", name: "Cybersecurity" },
    { id: "pandas", name: "Python Data Analysis" }
  ],
  
  // Experience from portfolio
  experience: [
    {
      id: "cybersec-intern",
      title: "Cybersecurity Intern",
      company: "St. Mary's Tech Club",
      years: "2024",
      description: [
        "Completed internship with hands-on cybersecurity projects",
        "Applied basic security principles and threat analysis",
        "Collaborated with team on vulnerability assessments"
      ]
    },
    {
      id: "flask-dev",
      title: "Flask Developer",
      company: "Personal Projects",
      years: "2024-2025",
      description: [
        "Built portfolio website (flask-portfolio-guog.onrender.com)",
        "Implemented Flask backend with HTML/CSS/JS frontend",
        "Deployed on Render with custom domain"
      ]
    }
  ],
  
  // Projects from portfolio
  projects: [
    {
      id: "flask-portfolio",
      title: "Flask Portfolio",
      tech: "Flask, HTML/CSS/JS, Render",
      years: "2025",
      description: "Personal portfolio showcasing AIML skills, cybersecurity experience, and full-stack development. Live at flask-portfolio-guog.onrender.com"
    },
    {
      id: "automation",
      title: "Python Automation Scripts",
      tech: "Python, Pandas",
      years: "2024",
      description: "Data collection, processing, analysis, and presentation automation using Python libraries"
    }
  ],
  
  // Education from portfolio
  education: [
    {
      id: "btech",
      school: "St. Mary's Engineering College",
      degree: "B.Tech CSE-AIML (Final Year)",
      graduated: "2026",
      description: "JNTUH affiliated | Specializing in Artificial Intelligence & Machine Learning | GATE Preparation | CGPA 8.5+"
    }
  ]
};
