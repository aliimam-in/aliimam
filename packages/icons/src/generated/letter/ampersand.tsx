/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AmpersandProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ampersand = React.forwardRef<SVGSVGElement, AmpersandProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 12h3" />
  <path d="M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13" />
    </svg>
  )
);
Ampersand.displayName = "Ampersand";
export const AmpersandMetadata = { id: "ampersand", baseId: "ampersand", variant: "default", name: "Ampersand", category: "letter", tags: [], viewBox: "0 0 24 24" } as const;
export default Ampersand;
