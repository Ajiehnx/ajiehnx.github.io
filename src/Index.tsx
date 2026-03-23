export default function Index() {
  return (
    <main style={{
      padding: '60px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      {/* Hero */}
      <section style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>
          Ernest Ajieh
        </h1>
        <p style={{ fontSize: '20px', color: '#555' }}>
          Business Analyst | Digital Transformation | AI & Automation
        </p>
      </section>

      {/* About */}
      <section style={{ marginBottom: '50px' }}>
        <h2>About Me</h2>
        <p>
          I am a Business Analyst with experience delivering system transformation,
          process optimisation, and data-driven solutions across consulting and
          technology environments.
        </p>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: '50px' }}>
        <h2>Key Projects</h2>
        <ul>
          <li>Digital Onboarding Chatbot (Banking Use Case)</li>
          <li>AI LinkedIn Content Automation Agent</li>
          <li>Job Scraping & Application Tracking System</li>
        </ul>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '50px' }}>
        <h2>Skills</h2>
        <p>
          Business Analysis · Agile · Scrum · SQL · Power BI · Process Mapping ·
          Stakeholder Management · Requirements Engineering
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>Email: ernest.c.ajieh@gmail.com</p>
        <p>
          LinkedIn: <a href="https://linkedin.com" target="_blank">Your Profile</a>
        </p>
      </section>
    </main>
  )
}
