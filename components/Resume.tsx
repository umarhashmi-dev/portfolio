import styles from '@/styles/Resume.module.css';

const Resume = () => {
    return (
        <div className={styles.resumePage} id="printable-resume">
            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.name}>UMAR HASHMI</h1>
                <div className={styles.titles}>
                    Full-Stack Web Developer | UI/UX Designer | Database Expert
                </div>
                <div className={styles.contactInfo}>
                    contact@umarhashmi.dev  •  umarhashmi.dev  •  linkedin.com/in/umarhashmi-dev  •  github.com/umarhashmi-dev
                </div>
            </header>

            {/* Summary */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
                <div className={styles.separator}></div>
                <p className={styles.summary}>
                    6+ years of experience building modern, fast, scalable, and intelligent web solutions. Strong focus on frontend (React), backend (Node.js, Express, MongoDB), AI integrations, automation systems, and performance-oriented architectures.
                </p>
            </section>

            {/* Skills */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
                <div className={styles.separator}></div>
                <div className={styles.skillRow}>
                    <span className={styles.skillCategory}>Frontend:</span> React, JavaScript, HTML5, CSS3, Next.js
                </div>
                <div className={styles.skillRow}>
                    <span className={styles.skillCategory}>Backend:</span> Node.js, Express.js, MongoDB, PostgreSQL (Supabase)
                </div>
                <div className={styles.skillRow}>
                    <span className={styles.skillCategory}>AI & LLMs:</span> OpenAI (GPT-4), Google Gemini, Anthropic Claude
                </div>
                <div className={styles.skillRow}>
                    <span className={styles.skillCategory}>Payments/Auth:</span> Stripe, PayPal, Clerk, Firebase Auth
                </div>
            </section>

            {/* Experience */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</h2>
                <div className={styles.separator}></div>

                {/* Freelance */}
                <div className={styles.jobBlock}>
                    <div className={styles.jobHeader}>
                        <span className={styles.company}>Freelance & Independent Projects</span>
                        <span className={styles.date}>2018 – Present</span>
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Designed and developed modern, responsive, high-performance web applications using React and Node.js.</li>
                        <li className={styles.listItem}>Delivered end-to-end solutions including UI/UX, development, optimization, and deployment for <strong>250+ projects</strong>.</li>
                        <li className={styles.listItem}>Worked with global clients across USA, UK, UAE, Canada, Germany, and Australia.</li>
                    </ul>
                </div>

                {/* VNHAX */}
                <div className={styles.jobBlock}>
                    <div className={styles.jobHeader}>
                        <span className={styles.company}>VNHAX</span>
                        <span className={styles.date}>2023 – Present</span>
                    </div>
                    <div className={styles.jobRole}>Web Developer / Automation Specialist</div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Developed a revenue-generating platform <strong>(~2M+ PKR/month)</strong> focusing on user tooling and automation.</li>
                        <li className={styles.listItem}>Integrated automated payment and user management systems.</li>
                    </ul>
                </div>

                {/* PUBGSTUFF */}
                <div className={styles.jobBlock}>
                    <div className={styles.jobHeader}>
                        <span className={styles.company}>PUBGSTUFF</span>
                        <span className={styles.date}>2022 – Present</span>
                    </div>
                    <div className={styles.jobRole}>Web Developer</div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Built and maintain a high-traffic e-commerce platform generating <strong>~1M+ PKR/month</strong>.</li>
                        <li className={styles.listItem}>Implemented secure payment gateways (Stripe, PayPro) and real-time inventory management.</li>
                    </ul>
                </div>

                {/* U DESIGNER */}
                <div className={styles.jobBlock}>
                    <div className={styles.jobHeader}>
                        <span className={styles.company}>U DESIGNER</span>
                        <span className={styles.date}>2018 – 2022</span>
                    </div>
                    <div className={styles.jobRole}>UI/UX Designer</div>
                </div>
            </section>

            {/* Education */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>EDUCATION & CERTIFICATIONS</h2>
                <div className={styles.separator}></div>

                <div className={styles.eduBlock}>
                    <div className={styles.jobHeader}>
                        <span className={styles.company}>Hong Kong University of Science and Technology</span>
                    </div>
                    <div className={styles.jobRole}>Software Engineering Specialization</div>
                </div>

                <div className={styles.eduBlock}>
                    <div className={styles.jobHeader}>
                        <span className={styles.company}>Certifications</span>
                    </div>
                    <div className={styles.certList}>
                        Google UX Design, IBM Generative AI Engineering, Microsoft AI Product Management
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;
