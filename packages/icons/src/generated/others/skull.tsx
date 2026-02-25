/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SkullProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Skull = React.forwardRef<SVGSVGElement, SkullProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m12.5 17-.5-1-.5 1h1z" />
  <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" />
  <circle cx="15" cy="12" r="1" />
  <circle cx="9" cy="12" r="1" />
    </svg>
  )
);
Skull.displayName = "Skull";
export const SkullMetadata = { id: "skull", baseId: "skull", variant: "default", name: "Skull", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Skull;
