declare module '*.scss' {
    const content: any;
    export default content;
}

// Для CSS-модулей (как в Navbar.tsx)
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    import React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.woff';
declare module '*.woff2';
