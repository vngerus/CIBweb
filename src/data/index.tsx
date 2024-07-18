import { TbWorldCode } from "react-icons/tb";
import { CgSmartphoneChip } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTrade } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { TbHealthRecognition } from "react-icons/tb";

import { Angelsmith, avoworks, aws, Cristaltavarez, DeniseWexman, Est, Fab, FABlatam, Flacma, g1, g2, g3, GabrielYannsen, GBA, GuillermoCid, hfmito, highline, iny20, Jrc, kamatera, keedidai, mariecurie, micro, nature, pandora, privee, RodrigoMolina, sebastianperez, Udc, uRecoleta, VerdeActivo } from "../assets";

const Linear = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

export const wwd = [
    {
        id: 1,
        img: g3,
        icon: <CgSmartphoneChip className="h-8 w-8 text-neutral-500" />,
        className: "md:col-span-1",
        title: "Innovative Solutions & Strategic Consulting.",
        description: "CIB offers cutting-edge blockchain solutions and strategic guidance on implementation for businesses worldwide."
    },
    {
        id: 2,
        img: g1,
        icon: <TbWorldCode className="h-8 w-8 text-neutral-500" />,
        className: "md:col-span-1",
        title: "Tokenization & Smart Contracts.",
        description: "We tokenize assets, develop secure and efficient smart contracts, opening new investment opportunities."
    },
    {
        id: 3,
        img: g3,
        icon: <GiTrade className="h-8 w-8 text-neutral-500" />,
        className: "md:col-span-1",
        title: "Finance, Banking & ReFI.",
        description: "Revolutionizing payments, fraud prevention, secure transactions, and promoting sustainable urban development using blockchain."
    },
    {
        id: 4,
        img: g2,
        icon: <SiHiveBlockchain className="h-8 w-8 text-neutral-500" />,
        className: "md:col-span-1",
        title: "Supply Chain & Crime Prevention.",
        description: "Improving traceability, reducing fraud, optimizing management, and creating immutable registers for crimes and offenders."
    },
    {
        id: 5,
        img: g2,
        icon: <TbHealthRecognition className="h-8 w-8 text-neutral-500" />,
        className: "md:col-span-1",
        title: "Healthcare & Education.",
        description: "Ensuring privacy, security, data interoperability in healthcare, and verifying credentials to enhance certification transparency in education."
    },
    {
        id: 6,
        img: g1,
        icon: <FaPeopleGroup className="h-8 w-8 text-neutral-500" />,
        className: "md:col-span-1",
        title: "Holistic Blockchain Integration.",
        description: "Providing comprehensive blockchain solutions across various sectors including finance, healthcare, education, and supply chain."
    }
];

export const projects = [
    {
        id: 1,
        img: privee,
        link: "https://privee.host",
        category: "branding",
        title: "Privee",
        description: "Project description here..."
    },
    {
        id: 2,
        img: hfmito,
        link: "https://buy.havingfun.store",
        category: "marketing",
        title: "HF Mito",
        description: "Project description here..."
    },
    {
        id: 3,
        img: keedidai,
        link: "https://keeidai.com",
        category: "development",
        title: "Keedidai",
        description: "Project description here..."
    },
    {
        id: 4,
        img: avoworks,
        link: "https://avoworks.com",
        category: "design",
        title: "Avoworks",
        description: "Project description here..."
    },
    {
        id: 5,
        img: pandora,
        link: "https://pandorath.com",
        category: "branding",
        title: "Pandora",
        description: "Project description here..."
    },
    {
        id: 6,
        img: iny20,
        link: "https://iny.com",
        category: "marketing",
        title: "Iny20",
        description: "Project description here..."
    },
];

export const brand1 = [
    {
        img: kamatera
    },
    {
        img: uRecoleta
    },
    {
        img: VerdeActivo
    },
    {
        img: Est
    },
    {
        img: FABlatam
    },
];
export const brand2 = [
    {
        img: highline
    },
    {
        img: Jrc
    },
    {
        img: Udc
    },
    {
        img: Flacma
    },
    {
        img: Fab
    }
];


export const awards = [
    {
        id: 1,
        img: GBA,
    },
    {
        id: 2,
        img: mariecurie,
    },
    {
        id: 3,
        img: nature,
    },
];


export const footer = [
    {
        img: aws
    },
    {
        img: micro
    }
];

export const team = [
    {
        name: "Guillermo Cid",
        role: "Founder",
        description: "AI/Blockchain advocate -Earth Scientist-Creative Thinker",
        img: GuillermoCid,
        icon: <Linear />,
        social: {
            linkedin: "#",
            github: "#",
        }
    },
    {
        name: "Gabriel F. Yanssen",
        role: "Founder",
        description: "Sci/Social BUILDR & Founder/CEO. Antropólogo",
        img: GabrielYannsen,
        social: {
            linkedin: "#",
            github: "#",
        }
    },
    {
        name: "Denise Wexman",
        role: "Frontend Developer",
        img: DeniseWexman,
        social: {
            linkedin: "#",
            github: "#",
        }
    },
    {
        name: "Angel Smith",
        role: "Frontend Developer",
        img: Angelsmith,
        social: {
            linkedin: "#",
            github: "#",
        }
    },
    {
        name: "Cristal Taveres",
        role: "Frontend Developer",
        img: Cristaltavarez,
        social: {
            linkedin: "#",
            github: "#",
        }
    },
    {
        name: "Rodrigo Molina",
        role: "Backend Developer",
        img: RodrigoMolina,
        social: {
            linkedin: "#",
            github: "#",
        }
    },
    {
        name: "Sebastian Perez",
        role: "Backend Developer",
        img: sebastianperez,
        social: {
            linkedin: "#",
            github: "#",
        }
    },
];