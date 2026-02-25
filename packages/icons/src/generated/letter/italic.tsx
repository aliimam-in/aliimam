/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ItalicProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Italic = React.forwardRef<SVGSVGElement, ItalicProps>(
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
      <line x1="19" x2="10" y1="4" y2="4" />
  <line x1="14" x2="5" y1="20" y2="20" />
  <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  )
);
Italic.displayName = "Italic";
export const ItalicMetadata = { 
  id: "italic", 
  baseId: "italic", 
  variant: "default", 
  name: "Italic", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Italic;
