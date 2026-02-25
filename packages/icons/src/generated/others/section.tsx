/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SectionProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Section = React.forwardRef<SVGSVGElement, SectionProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" />
  <path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" />
    </svg>
  )
);
Section.displayName = "Section";
export const SectionMetadata = { id: "section", baseId: "section", variant: "default", name: "Section", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Section;
