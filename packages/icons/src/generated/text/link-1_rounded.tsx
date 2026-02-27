/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Link1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Link1Rounded = React.forwardRef<SVGSVGElement, Link1RoundedProps>(
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
      <path d="M14.99 17.5H16.5C19.52 17.5 22 15.03 22 12C22 8.98 19.53 6.5 16.5 6.5H14.99"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H16"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Link1Rounded.displayName = "Link1Rounded";
export const Link1RoundedMetadata = { 
  id: "link-1_rounded", 
  baseId: "link-1", 
  variant: "rounded", 
  name: "Link 1", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Link1Rounded;
