import { Project } from '@/types';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* We use standard img for the scroll effect as it's easier to manipulate with simple CSS transforms on height. 
            Next.js Image component can be used but requires more setup for this specific effect (object-fit: cover, etc).
            For simplicity and the specific 'scroll on hover' requirement where the image needs to be fully rendered in DOM:
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {/* Tags can be added here in future */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
