/**
 * Auto-generated logo component: Insomnia (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InsomniaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Insomnia = React.forwardRef<SVGSVGElement, InsomniaProps>(
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
      <defs>
        <linearGradient x1="49.9998025%" y1="100%" x2="49.9998025%" y2="0%" id="linearGradient-1">
            <stop stopColor="#7400E1" offset="0%"></stop>
            <stop stopColor="#4000BF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <path d="M128,249.4912 C195.0984,249.4912 249.492,195.0976 249.492,128 C249.492,60.90208 195.0984,6.508472 128,6.508472 C60.9024,6.508472 6.508792,60.90208 6.508792,128 C6.508792,195.0976 60.9024,249.4912 128,249.4912 Z" fill="#FFFFFF" fillRule="nonzero"></path>
        <path d="M128,0 C57.30752,0 0,57.30752 0,128 C0,198.6928 57.30752,256 128,256 C198.6928,256 256,198.6928 256,128 C256,57.30752 198.6928,0 128,0 Z M128,13.01696 C191.5032,13.01696 242.9832,64.49664 242.9832,128 C242.9832,191.5032 191.5032,242.9832 128,242.9832 C64.49664,242.9832 13.01696,191.5032 13.01696,128 C13.01696,64.49664 64.49664,13.01696 128,13.01696 Z" fill="#4000BF" fillRule="nonzero"></path>
        <path d="M129.4456,36.88136 C179.7696,36.88136 220.5648,77.67656 220.5648,128 C220.5648,178.3232 179.7696,219.1184 129.4456,219.1184 C79.12232,219.1184 38.32712,178.3232 38.32712,128 C38.32712,115.7016 40.76376,103.972 45.18064,93.2672 C51.62984,102.0496 62.03016,107.7512 73.76216,107.7512 C93.3328,107.7512 109.1968,91.8864 109.1968,72.3164 C109.1968,60.5844 103.496,50.18408 94.7128,43.73496 C105.4176,39.318 117.1472,36.88136 129.4456,36.88136 Z" fill="url(#linearGradient-1)"></path>
    </g>
    </svg>
  )
);

Insomnia.displayName = "Insomnia";

export const InsomniaMetadata = {
  id: "insomnia",
  baseId: "insomnia",
  variant: "default",
  name: "Insomnia",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Insomnia;
