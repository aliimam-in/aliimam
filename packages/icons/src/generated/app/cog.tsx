/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CogProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cog = React.forwardRef<SVGSVGElement, CogProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 10.27 7 3.34" />
  <path d="m11 13.73-4 6.93" />
  <path d="M12 22v-2" />
  <path d="M12 2v2" />
  <path d="M14 12h8" />
  <path d="m17 20.66-1-1.73" />
  <path d="m17 3.34-1 1.73" />
  <path d="M2 12h2" />
  <path d="m20.66 17-1.73-1" />
  <path d="m20.66 7-1.73 1" />
  <path d="m3.34 17 1.73-1" />
  <path d="m3.34 7 1.73 1" />
  <circle cx="12" cy="12" r="2" />
  <circle cx="12" cy="12" r="8" />
    </svg>
  )
);
Cog.displayName = "Cog";
export const CogMetadata = { id: "cog", baseId: "cog", variant: "default", name: "Cog", category: "app", tags: [], viewBox: "0 0 24 24" } as const;
export default Cog;
