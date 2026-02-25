/**
 * Auto-generated logo component: Patreon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PatreonProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Patreon = React.forwardRef<SVGSVGElement, PatreonProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 247"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M45.1355837,0 L45.1355837,246.35001 L0,246.35001 L0,0 L45.1355837,0 Z M163.657111,0 C214.65668,0 256,41.3433196 256,92.3428889 C256,143.342458 214.65668,184.685778 163.657111,184.685778 C112.657542,184.685778 71.3142222,143.342458 71.3142222,92.3428889 C71.3142222,41.3433196 112.657542,0 163.657111,0 Z" fill="#FF424D"></path>
    </g>
    </svg>
  )
);

Patreon.displayName = "Patreon";

export const PatreonMetadata = {
  id: "patreon",
  baseId: "patreon",
  variant: "default",
  name: "Patreon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 247",
} as const;

export default Patreon;
