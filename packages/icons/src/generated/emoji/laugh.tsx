/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LaughProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Laugh = React.forwardRef<SVGSVGElement, LaughProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
  <line x1="9" x2="9.01" y1="9" y2="9" />
  <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
);
Laugh.displayName = "Laugh";
export const LaughMetadata = { id: "laugh", baseId: "laugh", variant: "default", name: "Laugh", category: "emoji", tags: [], viewBox: "0 0 24 24" } as const;
export default Laugh;
