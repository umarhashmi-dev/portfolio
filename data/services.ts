import { RiComputerLine, RiSmartphoneLine, RiDatabase2Line } from 'react-icons/ri';
import { FaPalette, FaServer, FaRobot } from 'react-icons/fa';

export const services = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Build modern, responsive, and fast loading websites using the latest technologies like Next.js, React, and Node.js.',
        price: '$500+',
        Icon: RiComputerLine,
        badge: '15% OFF',
    },
    {
        id: 2,
        title: 'UI/UX Design',
        description: 'Design intuitive and aesthetically pleasing user interfaces and user experiences for web and mobile applications.',
        price: '$300+',
        Icon: FaPalette,
    },
    {
        id: 3,
        title: 'Mobile App Development',
        description: 'Develop cross-platform mobile applications for iOS and Android using React Native and Flutter.',
        price: '$800+',
        Icon: RiSmartphoneLine,
    },
    {
        id: 4,
        title: 'API Development',
        description: 'Design and develop robust RESTful and GraphQL APIs for seamless data integration and communication.',
        price: '$400+',
        Icon: FaServer,
    },
    {
        id: 5,
        title: 'Database Management',
        description: 'Design, optimize, and manage databases to ensure data integrity, security, and high performance.',
        price: '$300+',
        Icon: RiDatabase2Line,
    },
    {
        id: 6,
        title: 'Automations',
        description: 'Streamline business processes with custom automated workflows, bots, and scripts.',
        price: '$200+',
        Icon: FaRobot,
    },
];
