/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiscoverRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DiscoverRounded = React.forwardRef<SVGSVGElement, DiscoverRoundedProps>(
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
      <path d="M17.8 2.1L7.87 4.59C6.42 4.95 4.95 6.42 4.59 7.87L2.1 17.8C1.35 20.8 3.19 22.65 6.2 21.9L16.13 19.42C17.57 19.06 19.05 17.58 19.41 16.14L21.9 6.2C22.65 3.2 20.8 1.35 17.8 2.1Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DiscoverRounded.displayName = "DiscoverRounded";
export const DiscoverRoundedMetadata = { 
  id: "discover_rounded", 
  baseId: "discover", 
  variant: "rounded", 
  name: "Discover", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DiscoverRounded;
