import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import { resumeData } from './resumeData';
import { sectionConfig, presets, templates, getDefaultVisibleSections } from './config';

const App = () => {
  const { main, skills, experience, education, projects } = resumeData;
  
  // Fixed initial state - AUTO-generates from data
  const [template, setTemplate] = useState('classic');
  const [preset, setPreset] = useState('gate-fresher');
  const [visibleSections, setVisibleSections] = useState(getDefaultVisibleSections());
  const [visibleItems, setVisibleItems] = useState({
    skills: {},
    experience: {},
    projects: {},
    education: {}
  });

  // AUTO-generate item config from resumeData (no manual config.js needed)
  const itemConfig = useMemo(() => ({
    skills: Object.fromEntries(skills.map(skill => [skill.id, { label: skill.name }])),
    experience: Object.fromEntries(experience.map(job => [job.id, { label: `${job.title} @ ${job.company}` }])),
    projects: Object.fromEntries(projects.map(proj => [proj.id, { label: `${proj.title} (${proj.tech})` }])),
    education: Object.fromEntries(education.map(edu => [edu.id, { label: `${edu.school} - ${edu.degree}` }]))
  }), [skills, experience, projects, education]);

  // Fixed toggle handler
  const toggle = useCallback((type, key) => {
    if (type === 'section') {
      setVisibleSections(prev => ({ ...prev, [key]: !prev[key] }));
    } else {
      setVisibleItems(prev => ({
        ...prev,
        [type]: {
          ...prev[type],
          [key]: !(prev[type]?.[key] ?? true)
        }
      }));
    }
  }, []);

  // FIXED preset loader - works with ANY resumeData changes
  const loadPreset = useCallback((key) => {
    const data = presets[key];
    if (data) {
      setVisibleSections(data.sections);
      
      setVisibleItems(prev => {
        const newItems = { ...prev };
        
        // For each section in preset, toggle specified items OFF, others ON
        Object.entries(data.items || {}).forEach(([section, items]) => {
          newItems[section] = {
            ...Object.fromEntries(
              Object.keys(itemConfig[section]).map(id => [id, true]) // ALL ON by default
            )
          };
          
          // Turn OFF preset-specified items
          Object.keys(items).forEach(id => {
            newItems[section][id] = items[id]; // true/false from preset
          });
        });
        
        return newItems;
      });
    }
  }, [itemConfig]);

  const handlePrint = () => window.print();

  // Memoized filtered data
  const filteredData = useMemo(() => ({
    skills: skills.filter(skill => visibleItems.skills[skill.id] !== false),
    experience: experience.filter(job => visibleItems.experience[job.id] !== false),
    projects: projects.filter(proj => visibleItems.projects[proj.id] !== false),
    education: education.filter(edu => visibleItems.education[edu.id] !== false)
  }), [skills, experience, projects, education, visibleItems]);

  return (
    <div className={`App template-${template}`}>
      {/* Controls */}
      <div className="controls">
        <div className="control-group">
          <label>Template:</label>
          <select value={template} onChange={e => setTemplate(e.target.value)}>
            {Object.entries(templates).map(([k, v]) => (
              <option key={k} value={k}>{v.name}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Preset:</label>
          <select 
            value={preset} 
            onChange={e => {
              setPreset(e.target.value);
              loadPreset(e.target.value);
            }}
          >
            {Object.entries(presets).map(([k]) => (
              <option key={k} value={k}>{presets[k].name}</option>
            ))}
          </select>
        </div>

        {/* Sections */}
        <div className="control-group full-width">
          <label>Sections:</label>
          <div className="section-toggles">
            {Object.entries(sectionConfig).map(([key, cfg]) => (
              <label key={key} className="toggle-label">
                <input
                  type="checkbox"
                  checked={!!visibleSections[key]}
                  onChange={() => toggle('section', key)}
                />
                {cfg.label}
              </label>
            ))}
          </div>
        </div>

        {/* Skills - AUTO from data */}
        <div className="control-group full-width">
          <label>Skills:</label>
          <div className="skills-toggles">
            {skills.map(skill => (
              <label key={skill.id} className="skill-toggle-label">
                <input
                  type="checkbox"
                  checked={visibleItems.skills[skill.id] !== false}
                  onChange={() => toggle('skills', skill.id)}
                />
                {skill.name}
              </label>
            ))}
          </div>
        </div>

        {/* Items - AUTO labels from data */}
        <div className="control-group full-width">
          <label>Items:</label>
          <div className="item-toggles">
            {['experience', 'projects', 'education'].map(section => (
              <div key={section} className="item-section">
                <strong>{sectionConfig[section]?.label || section}:</strong>
                {resumeData[section].map(item => (
                  <label key={item.id} className="item-toggle-label">
                    <input
                      type="checkbox"
                      checked={visibleItems[section]?.[item.id] !== false}
                      onChange={() => toggle(section, item.id)}
                    />
                    {itemConfig[section]?.[item.id]?.label || item.title || item.school}
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button onClick={handlePrint} className="print-btn">👉 PDF</button>
      </div>

      {/* Resume - UNCHANGED */}
      <div className="resume-container">
        {visibleSections.header && (
          <header>
            <div className="header-left">
              <h1>{main.name}</h1>
              <h3>{main.occupation}</h3>
              <p className="summary">{main.description}</p>
            </div>
            <div className="header-right">
              {main.image && <img src={main.image} alt={main.name} className="profile-pic" />}
              <div className="contact-info">
                {main.contact.email && (
                  <p className="contact-item"><span className="contact-icon">📧</span>{main.contact.email}</p>
                )}
                {main.contact.phone && (
                  <p className="contact-item"><span className="contact-icon">📞</span>{main.contact.phone}</p>
                )}
                {main.contact.linkedin && (
                  <p className="contact-item"><span className="contact-icon">💼</span>{main.contact.linkedin}</p>
                )}
                {(main.address.city && main.address.state) && (
                  <p className="contact-item"><span className="contact-icon">📍</span>{main.address.city}, {main.address.state}</p>
                )}
              </div>
            </div>
          </header>
        )}

        {visibleSections.skills && filteredData.skills.length > 0 && (
          <section className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {filteredData.skills.map(skill => (
                <span key={skill.id} className="skill-tag">{skill.name}</span>
              ))}
            </div>
          </section>
        )}

        {visibleSections.experience && filteredData.experience.length > 0 && (
          <section className="experience-section">
            <h2 className="section-title">Experience</h2>
            {filteredData.experience.map(job => (
              <div key={job.id} className="item">
                <div className="item-header">
                  <div>
                    <span className="item-title">{job.title}</span>
                    <span className="separator"> | </span>
                    <span className="item-subtitle">{job.company}</span>
                  </div>
                  <span className="item-date">{job.years}</span>
                </div>
                <ul className="job-details">
                  {job.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {visibleSections.projects && filteredData.projects.length > 0 && (
          <section className="projects-section">
            <h2 className="section-title">Projects</h2>
            {filteredData.projects.map(proj => (
              <div key={proj.id} className="item">
                <div className="item-header">
                  <div>
                    <span className="item-title">{proj.title}</span>
                    <span className="separator"> | </span>
                    <span className="item-subtitle">{proj.tech}</span>
                  </div>
                  <span className="item-date">{proj.years}</span>
                </div>
                <p>{proj.description}</p>
              </div>
            ))}
          </section>
        )}

        {visibleSections.education && filteredData.education.length > 0 && (
          <section className="education-section">
            <h2 className="section-title">Education</h2>
            {filteredData.education.map(edu => (
              <div key={edu.id} className="item">
                <div className="item-header">
                  <div>
                    <span className="item-title">{edu.school}</span>
                    <span className="separator"> | </span>
                    <span className="item-subtitle">{edu.degree}</span>
                  </div>
                  <span className="item-date">{edu.graduated}</span>
                </div>
                <p>{edu.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default App;