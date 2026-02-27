/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LinkRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LinkRounded = React.forwardRef<SVGSVGElement, LinkRoundedProps>(
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
      <path d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LinkRounded.displayName = "LinkRounded";
export const LinkRoundedMetadata = { 
  id: "link_rounded", 
  baseId: "link", 
  variant: "rounded", 
  name: "Link", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LinkRounded;
