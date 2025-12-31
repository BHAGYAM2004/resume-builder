// src/resumeData.js - OPEN SOURCE TEMPLATE VERSION
export const resumeData = {
  main: {
    name: "Your Name",
    occupation: "B.Tech CSE-AIML | Full-Stack Developer",
    description: `Final-year B.Tech student specializing in AI/ML. 
    Customize this resume builder for your skills, experience, and projects. 
    Edit resumeData.js → npm run build → Deploy instantly!`,
    image: "/profile.png", 
    contact: {
      email: "your.email@example.com",
      phone: "+91-XXXXXXXXXX", 
      linkedin: "linkedin.com/in/yourprofile"
    },
    address: {
      city: "Your City",
      state: "Your State"
    }
  },
  
  skills: [  // ADD YOUR SKILLS HERE
    { id: "react", name: "React" },
    { id: "flask", name: "Flask (Python)" },
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "mysql", name: "MySQL" },
    { id: "git", name: "Git & GitHub" },
    { id: "css", name: "CSS/Tailwind" },
    { id: "html", name: "HTML5" }
  ],
  
  experience: [  // ADD YOUR EXPERIENCE
    {
      id: "internship",
      title: "Full-Stack Developer Intern",
      company: "Your Company",
      years: "2025",
      description: [
        "Built full-stack web applications",
        "Deployed projects on Netlify/Vercel",
        "Collaborated with cross-functional teams"
      ]
    }
  ],
  
  projects: [  // ADD YOUR PROJECTS
    {
      id: "portfolio",
      title: "Personal Portfolio",
      tech: "React, Vite, Netlify",
      years: "2025",
      description: "Multi-template resume builder with live preview and PDF export"
    }
  ],
  
  education: [  // YOUR EDUCATION
    {
      id: "btech",
      school: "Your College",
      degree: "B.Tech CSE-AIML",
      graduated: "2026",
      description: "Specializing in AI/ML | CGPA 8.5+ | GATE Preparation"
    }
  ]
};
