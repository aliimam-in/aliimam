/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BoltProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bolt = React.forwardRef<SVGSVGElement, BoltProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  <circle cx="12" cy="12" r="4" />
    </svg>
  )
);
Bolt.displayName = "Bolt";
export const BoltMetadata = { id: "bolt", baseId: "bolt", variant: "default", name: "Bolt", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Bolt;
