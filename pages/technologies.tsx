import { technologies } from '@/data/technologies';
import styles from '@/styles/TechnologiesPage.module.css';

const TechnologiesPage = () => {
    return (
        <div className={styles.layout}>
            <h1 className={styles.pageTitle}>Technologies & Tools</h1>
            <p className={styles.pageSubtitle}>A list of tools, languages, and technologies that I use on a daily basis.</p>

            {technologies.map((category) => (
                <div key={category.category} className={styles.category}>
                    <h2 className={styles.categoryTitle}>{category.category}</h2>
                    {category.categoryDescription && (
                        <p className={styles.categoryDescription}>{category.categoryDescription}</p>
                    )}
                    <div className={styles.items}>
                        {category.items.map((item) => (
                            <div key={item.name} className={styles.item}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: { title: 'Technologies' },
    };
}

export default TechnologiesPage;
