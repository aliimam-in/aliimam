/**
 * Auto-generated logo component: Turbopack Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TurbopackIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TurbopackIcon = React.forwardRef<SVGSVGElement, TurbopackIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 293"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient x1="50.000184%" y1="7.89569995%" x2="49.8553456%" y2="93.3433732%" id="turbopackLinearGradient-1">
            <stop stopColor="#0096FF" offset="0%"></stop>
            <stop stopColor="#FF1E56" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <path d="M128,0 L46.16,46.768 L46.32,83.52 L128,36.848 L224,91.712 L256,110 L256,73.136 L128,0 Z M113.6,247.488 L32,200.864 L32,91.792 L31.968,91.776 L31.792,54.976 L0,73.136 L0,121.904 L0,170.672 L0,219.424 L81.68,266.096 L113.6,247.488 Z M224,200.864 L224,108.304 L256,126.592 L256,170.672 L256,219.424 L128,292.576 L96.112,274.352 L128,255.76 L128,255.712 L224,200.864 Z" fill="url(#turbopackLinearGradient-1)"></path>
        <polygon fill="#000000" points="46.4 108.368615 46.4 192.496615 128 239.136615 128 154.992615"></polygon>
        <polygon fill="#000000" points="128 53.4406154 53.648 95.9206154 135.264 142.560615 209.6 100.064615"></polygon>
    </g>
    </svg>
  )
);

TurbopackIcon.displayName = "TurbopackIcon";

export const TurbopackIconMetadata = {
  id: "turbopack-icon",
  baseId: "turbopack-icon",
  variant: "default",
  name: "Turbopack Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 293",
} as const;

export default TurbopackIcon;
