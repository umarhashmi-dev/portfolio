import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Umar Hashmi</h1>
        <div className={styles.subtitle}>Full-Stack Web Developer · UI/UX Designer · Database Expert</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              I’m a Full-Stack Web Developer, UI/UX Designer, and Database Expert with 6+ years of experience building modern, fast, and intelligent web solutions.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React, but
              you&apos;ll also find me working with Node.js, MongoDB and Express
              while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>

            <div className={styles.experienceItem}>
              <h3 className={styles.experienceTitle}>Full-Stack Web Developer / UI-UX Designer</h3>
              <p className={styles.experienceSubtitle}>Freelance & Independent Projects | 2018 – Present</p>
              <ul className={styles.experienceList}>
                <li>Designed and developed modern, responsive, and high-performance web applications.</li>
                <li>Built scalable frontend systems using modern JavaScript frameworks and clean UI architectures.</li>
                <li>Integrated AI and automation solutions to optimize workflows and enhance user experiences.</li>
                <li>Delivered end-to-end solutions including UI/UX design, development, optimization, and deployment.</li>
                <li>Worked with global clients across the USA, UK, UAE, Canada, Germany, Australia, and Pakistan.</li>
                <li>Successfully completed 250+ projects across multiple industries.</li>
              </ul>
            </div>

            <div className={styles.experienceItem}>
              <h3 className={styles.experienceTitle}>AI & Automation Specialist</h3>
              <p className={styles.experienceSubtitle}>Independent Research & Product Development | 2022 – Present</p>
              <ul className={styles.experienceList}>
                <li>Developed AI-powered tools using OpenAI and Gemini APIs.</li>
                <li>Designed automation systems for content generation, data processing, and workflow optimization.</li>
                <li>Experimented with AI-assisted software development and prompt-driven systems.</li>
                <li>Focused on building intelligent, performance-oriented digital products.</li>
              </ul>
            </div>

            <div className={styles.experienceItem}>
              <h3 className={styles.experienceTitle}>UI/UX Designer</h3>
              <p className={styles.experienceSubtitle}>Product & Web Interfaces | 2018 – Present</p>
              <ul className={styles.experienceList}>
                <li>Designed user-centered interfaces with a strong focus on usability and clarity.</li>
                <li>Built design systems and component-based UI structures.</li>
                <li>Improved user engagement through data-driven UX decisions.</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Highlights</h2>
            <ul className={styles.experienceList}>
              <li>6+ years of professional experience</li>
              <li>Strong focus on performance, scalability, and innovation</li>
              <li>Hands-on experience with AI, automation, and modern web systems</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
