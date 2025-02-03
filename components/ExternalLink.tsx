import React from 'react';
import { Link, type Href } from 'expo-router';

interface ExternalLinkProps {
    href: Href;
    children: React.ReactNode;
}


const ExternalLink: React.FC<ExternalLinkProps> = ({href, children}) => {
    return(
        <Link href={href} >{children}</Link>
    )
}

export default ExternalLink