/**
 * Auto-generated logo component: Codebeat (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodebeatProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Codebeat = React.forwardRef<SVGSVGElement, CodebeatProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M57.6966767,89.5613293 L85.6169184,147.799396 L136.662236,31.555287 L192.966767,170.537764 L210.90997,130.165559 L256,130.165559 L256,128 C256,57.3099698 198.69003,0 128,0 C57.3099698,0 0,57.3099698 0,128 L0,130.165559 L36.9691843,130.165559 L57.6966767,89.5613293 Z M192.58006,203.175831 L135.81148,93.4283988 L85.3075529,184.304532 L57.2326284,119.569789 L43.5432024,146.484592 L1.31480363,146.484592 C10.2864048,208.435045 63.5746224,256 128,256 C192.425378,256 245.790937,208.357704 254.685196,146.407251 L219.417523,146.407251 L192.58006,203.175831 Z" fill="#27A8E0"></path>
    </g>
    </svg>
  )
);

Codebeat.displayName = "Codebeat";

export const CodebeatMetadata = {
  id: "codebeat",
  baseId: "codebeat",
  variant: "default",
  name: "Codebeat",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Codebeat;
