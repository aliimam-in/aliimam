/**
 * Auto-generated logo component: Componentkit (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ComponentkitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Componentkit = React.forwardRef<SVGSVGElement, ComponentkitProps>(
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
        <path d="M92.7476103,135.604887 L170.567402,213.424679 L127.992081,256 L50.1722893,178.180208 L92.7476103,135.604887 Z M213.424679,85.4167603 L256,127.992081 L178.180208,205.811873 L135.604887,163.236552 L213.424679,85.4167603 Z M128.007919,0 L170.58324,42.575321 L42.575321,170.58324 L0,128.007919 L128.007919,0 Z" fill="#39BCD3"></path>
    </g>
    </svg>
  )
);

Componentkit.displayName = "Componentkit";

export const ComponentkitMetadata = {
  id: "componentkit",
  baseId: "componentkit",
  variant: "default",
  name: "Componentkit",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Componentkit;
