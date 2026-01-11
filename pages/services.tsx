import { services } from '../data/services';
import styles from '@/styles/ServicesPage.module.css';
import Script from 'next/script';

const ServicesPage = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web & Mobile Development",
        "provider": {
            "@type": "Person",
            "name": "Umar Hashmi"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Development Services",
            "itemListElement": services.map((service) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                }
            }))
        }
    };

    return (
        <section className={styles.pageWrapper}>
            <Script
                id="schema-services"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* TITLE + DESCRIPTION (TOP) */}
            <div className={styles.titleContainer}>
                <h1 className={styles.h1}>My Services</h1>
                <p className={styles.subtitle}>What I can do for you</p>
            </div>

            {/* CARDS (BELOW TITLE) */}
            <div className={styles.container}>
                {services.map((service) => (
                    <a
                        key={service.id}
                        href="https://wa.me/+923021550385"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        {service.badge && (
                            <span className={styles.badge}>{service.badge}</span>
                        )}
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                <service.Icon className={styles.icon} />
                            </div>

                            <div className={styles.header}>
                                <div className={styles.topRow}>
                                    <h3 className={styles.title}>{service.title}</h3>
                                    <span className={styles.price}>{service.price}</span>
                                </div>
                            </div>

                            <p className={styles.description}>
                                {service.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

        </section>
    );
};

export default ServicesPage;
