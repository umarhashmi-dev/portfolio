import { useEffect } from 'react';
import Resume from '@/components/Resume';
import Head from 'next/head';

const CVPage = () => {
    useEffect(() => {
        // Small timeout to ensure render is complete before printing
        const timer = setTimeout(() => {
            window.print();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title>Umar Hashmi - Resume</title>
            </Head>
            <Resume />
            <style global jsx>{`
        body {
          background: white;
          margin: 0;
          padding: 0;
        }
        @media print {
            @page {
                size: A4;
                margin: 0;
            }
            body {
                margin: 0;
                padding: 0;
            }
        }
        /* Hide Next.js dev overlay references if any leak through */
        #next-not-found-styles { display: none; }
      `}</style>
        </>
    );
};

export default CVPage;
