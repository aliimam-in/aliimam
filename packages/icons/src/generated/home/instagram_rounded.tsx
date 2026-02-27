/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface InstagramRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const InstagramRounded = React.forwardRef<SVGSVGElement, InstagramRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.6361 7H17.6477"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
InstagramRounded.displayName = "InstagramRounded";
export const InstagramRoundedMetadata = { 
  id: "instagram_rounded", 
  baseId: "instagram", 
  variant: "rounded", 
  name: "Instagram", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default InstagramRounded;
