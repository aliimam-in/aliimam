/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AnvilProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Anvil = React.forwardRef<SVGSVGElement, AnvilProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
  <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
  <path d="M9 12v5" />
  <path d="M15 12v5" />
  <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
    </svg>
  )
);
Anvil.displayName = "Anvil";
export const AnvilMetadata = { id: "anvil", baseId: "anvil", variant: "default", name: "Anvil", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Anvil;
