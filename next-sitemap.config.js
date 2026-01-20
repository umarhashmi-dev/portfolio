/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.umarhashmi.dev',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    additionalPaths: async (config) => {
        const result = [];
        const requiredPaths = [
            '/',
            '/about',
            '/contact',
            '/projects',
            '/articles',
            '/technologies',
            '/github',
            '/services'
        ];

        requiredPaths.forEach(path => {
            result.push({
                loc: path,
                changefreq: 'daily',
                priority: 0.7,
                lastmod: new Date().toISOString(),
            });
        });

        return result;
    },
};
