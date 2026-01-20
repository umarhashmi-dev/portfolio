
import Script from 'next/script';

const Schema = () => {
    const schemaData = [
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://www.umarhashmi.dev/',
            name: 'Umar Hashmi - Full Stack Developer',
            alternateName: 'Umar Hashmi Portfolio',
            potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.umarhashmi.dev/?q={search_term_string}',
                'query-input': 'required name=search_term_string',
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: 'https://www.umarhashmi.dev/',
            logo: 'https://www.umarhashmi.dev/favicon.png',
            name: 'Umar Hashmi',
            sameAs: [
                'https://github.com/umarhashmi-dev',
                'https://www.linkedin.com/in/umarhashmi-dev',
                'https://twitter.com/umarhashmi_dev',
                'https://www.facebook.com/umarhashmi.dev',
                'https://www.instagram.com/umarhashmi.dev/',
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'contact@umarhashmi.dev',
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Umar Hashmi',
            url: 'https://www.umarhashmi.dev',
            image: 'https://www.umarhashmi.dev/images/umar-profile.jpg', // Ensure this image exists, or use a generic one
            sameAs: [
                'https://github.com/umarhashmi-dev',
                'https://www.linkedin.com/in/umarhashmi-dev',
                'https://twitter.com/umarhashmi_dev',
            ],
            jobTitle: 'Full Stack Developer',
            worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
            },
        },
    ];

    return (
        <>
            {schemaData.map((data, index) => (
                <Script
                    key={index}
                    id={`schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
                    strategy="afterInteractive"
                />
            ))}
        </>
    );
};

export default Schema;
