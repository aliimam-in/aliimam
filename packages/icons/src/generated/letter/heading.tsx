/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeadingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Heading = React.forwardRef<SVGSVGElement, HeadingProps>(
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
      <path d="M6 12h12" />
  <path d="M6 20V4" />
  <path d="M18 20V4" />
    </svg>
  )
);
Heading.displayName = "Heading";
export const HeadingMetadata = { 
  id: "heading", 
  baseId: "heading", 
  variant: "default", 
  name: "Heading", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Heading;
