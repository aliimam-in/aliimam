/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Heading5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Heading5 = React.forwardRef<SVGSVGElement, Heading5Props>(
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
  <path d="M17 13v-3h4" />
  <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
    </svg>
  )
);
Heading5.displayName = "Heading5";
export const Heading5Metadata = { 
  id: "heading-5", 
  baseId: "heading-5", 
  variant: "default", 
  name: "Heading 5", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Heading5;
