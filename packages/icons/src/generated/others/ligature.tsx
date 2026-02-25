/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LigatureProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ligature = React.forwardRef<SVGSVGElement, LigatureProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14 12h2v8" />
  <path d="M14 20h4" />
  <path d="M6 12h4" />
  <path d="M6 20h4" />
  <path d="M8 20V8a4 4 0 0 1 7.464-2" />
    </svg>
  )
);
Ligature.displayName = "Ligature";
export const LigatureMetadata = { id: "ligature", baseId: "ligature", variant: "default", name: "Ligature", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Ligature;
