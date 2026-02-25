/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AnnoyedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Annoyed = React.forwardRef<SVGSVGElement, AnnoyedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M8 15h8" />
  <path d="M8 9h2" />
  <path d="M14 9h2" />
    </svg>
  )
);
Annoyed.displayName = "Annoyed";
export const AnnoyedMetadata = { id: "annoyed", baseId: "annoyed", variant: "default", name: "Annoyed", category: "emoji", tags: [], viewBox: "0 0 24 24" } as const;
export default Annoyed;
