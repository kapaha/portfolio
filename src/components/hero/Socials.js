import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import owner from '../../data/owner.json';

function Social({ icon, className, targetLink, socialName }) {
    return (
        <motion.li
            initial={{ x: -115 }}
            whileHover={{ x: 0 }}
            transition={{ duration: 1, type: 'tween' }}
            className={`social ${className}`}
            key={socialName}
        >
            <a href={targetLink} target="_blank" rel="noreferrer">
                {socialName}
                <Icon icon={icon} />
            </a>
        </motion.li>
    );
}

export default function Socials() {
    return (
        <ul className="socials">
            <Social
                icon="radix-icons:linkedin-logo"
                className="social__linkedin"
                socialName="Linkedin"
                targetLink={owner.socialUrls.linkedin}
            />
            <Social
                icon="jam:github"
                className="social__github"
                socialName="Github"
                targetLink={owner.socialUrls.github}
            />
            <Social
                icon="material-symbols:mail-outline-rounded"
                className="social__mail"
                socialName="Email"
                targetLink={owner.socialUrls.email}
            />
        </ul>
    );
}
