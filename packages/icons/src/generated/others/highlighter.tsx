/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HighlighterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Highlighter = React.forwardRef<SVGSVGElement, HighlighterProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m9 11-6 6v3h9l3-3" />
  <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
    </svg>
  )
);
Highlighter.displayName = "Highlighter";
export const HighlighterMetadata = { 
  id: "highlighter", 
  baseId: "highlighter", 
  variant: "default", 
  name: "Highlighter", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Highlighter;
