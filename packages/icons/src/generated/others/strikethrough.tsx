/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StrikethroughProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Strikethrough = React.forwardRef<SVGSVGElement, StrikethroughProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 4H9a3 3 0 0 0-2.83 4" />
  <path d="M14 12a4 4 0 0 1 0 8H6" />
  <line x1="4" x2="20" y1="12" y2="12" />
    </svg>
  )
);
Strikethrough.displayName = "Strikethrough";
export const StrikethroughMetadata = { id: "strikethrough", baseId: "strikethrough", variant: "default", name: "Strikethrough", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Strikethrough;
