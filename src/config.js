// config.js - KEEP THESE (required)
export const sectionConfig = {
  header: { label: 'Personal Info', enabledByDefault: true },
  skills: { label: 'Technical Skills', enabledByDefault: true },
  experience: { label: 'Experience', enabledByDefault: true },
  projects: { label: 'Projects', enabledByDefault: true },
  education: { label: 'Education', enabledByDefault: true }
};

// KEEP PRESETS - they control which items show by default
export const presets = {
  'gate-fresher': {
    name: '🎓 GATE/Fresher',
    sections: { header: true, skills: true, experience: false, projects: true, education: true },
    items: {
      skills: { 'python': true, 'java': true, 'c': true, 'mysql': true }, // Just IDs needed
      projects: { 'flask-portfolio': true, 'automation': true },
      education: { 'btech': true }
    }
  },
  // ... other presets
};

// KEEP TEMPLATES
export const templates = {
  classic: { name: '📝 Classic', layout: 'one-column' },
  compact: { name: '⚡ Compact', layout: 'one-column-tight' },
  modern: { name: '🪶 Modern', layout: 'two-column' }
};

// KEEP UTILITIES
export const getDefaultVisibleSections = () => 
  Object.fromEntries(Object.entries(sectionConfig).map(([key]) => [key, sectionConfig[key].enabledByDefault]));
