/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Heading3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Heading3 = React.forwardRef<SVGSVGElement, Heading3Props>(
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
      <path d="M4 12h8" />
  <path d="M4 18V6" />
  <path d="M12 18V6" />
  <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
  <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
    </svg>
  )
);
Heading3.displayName = "Heading3";
export const Heading3Metadata = { 
  id: "heading-3", 
  baseId: "heading-3", 
  variant: "default", 
  name: "Heading 3", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Heading3;
