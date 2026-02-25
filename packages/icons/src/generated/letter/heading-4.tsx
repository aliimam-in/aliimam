/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Heading4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Heading4 = React.forwardRef<SVGSVGElement, Heading4Props>(
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
      <path d="M12 18V6" />
  <path d="M17 10v3a1 1 0 0 0 1 1h3" />
  <path d="M21 10v8" />
  <path d="M4 12h8" />
  <path d="M4 18V6" />
    </svg>
  )
);
Heading4.displayName = "Heading4";
export const Heading4Metadata = { 
  id: "heading-4", 
  baseId: "heading-4", 
  variant: "default", 
  name: "Heading 4", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Heading4;
