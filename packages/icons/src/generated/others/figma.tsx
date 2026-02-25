/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FigmaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Figma = React.forwardRef<SVGSVGElement, FigmaProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
);
Figma.displayName = "Figma";
export const FigmaMetadata = { id: "figma", baseId: "figma", variant: "default", name: "Figma", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Figma;
