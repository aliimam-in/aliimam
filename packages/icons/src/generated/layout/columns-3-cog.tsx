/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Columns3CogProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Columns3Cog = React.forwardRef<SVGSVGElement, Columns3CogProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
  <path d="m14.3 19.6 1-.4" />
  <path d="M15 3v7.5" />
  <path d="m15.2 16.9-.9-.3" />
  <path d="m16.6 21.7.3-.9" />
  <path d="m16.8 15.3-.4-1" />
  <path d="m19.1 15.2.3-.9" />
  <path d="m19.6 21.7-.4-1" />
  <path d="m20.7 16.8 1-.4" />
  <path d="m21.7 19.4-.9-.3" />
  <path d="M9 3v18" />
  <circle cx="18" cy="18" r="3" />
    </svg>
  )
);
Columns3Cog.displayName = "Columns3Cog";
export const Columns3CogMetadata = { id: "columns-3-cog", baseId: "columns-3-cog", variant: "default", name: "Columns 3 Cog", category: "layout", tags: [], viewBox: "0 0 24 24" } as const;
export default Columns3Cog;
