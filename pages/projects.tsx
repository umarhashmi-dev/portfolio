import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import styles from '@/styles/ProjectsPage.module.css';
import Script from 'next/script';

const ProjectsPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "My Projects",
    "description": "A collection of my recent web development and design projects.",
    "hasPart": projects.map(project => ({
      "@type": "SoftwareSourceCode",
      "name": project.title,
      "description": project.description,
      "url": project.link
    }))
  };

  return (
    <div className={styles.layout}>
      <Script
        id="schema-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <h1 className={styles.pageTitle}>My Projects</h1>
      <p className={styles.pageSubtitle}>
        Here&apos;s a collection of my recent work. These projects showcase my
        skills in web development, design, and problem-solving.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
