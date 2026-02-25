/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MotorbikeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Motorbike = React.forwardRef<SVGSVGElement, MotorbikeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m18 14-1-3" />
  <path d="m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" />
  <path d="M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" />
  <circle cx="19" cy="17" r="3" />
  <circle cx="5" cy="17" r="3" />
    </svg>
  )
);
Motorbike.displayName = "Motorbike";
export const MotorbikeMetadata = { id: "motorbike", baseId: "motorbike", variant: "default", name: "Motorbike", category: "transportation", tags: [], viewBox: "0 0 24 24" } as const;
export default Motorbike;
