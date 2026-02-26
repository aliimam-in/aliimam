/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Heading6Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Heading6 = React.forwardRef<SVGSVGElement, Heading6Props>(
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
  <circle cx="19" cy="16" r="2" />
  <path d="M20 10c-2 2-3 3.5-3 6" />
    </svg>
  )
);
Heading6.displayName = "Heading6";
export const Heading6Metadata = { 
  id: "heading-6", 
  baseId: "heading-6", 
  variant: "default", 
  name: "Heading 6", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Heading6;
