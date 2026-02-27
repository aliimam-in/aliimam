/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BloggerRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BloggerRounded = React.forwardRef<SVGSVGElement, BloggerRoundedProps>(
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
      <path d="M6 9V15C6 17 7 18 9 18H15C17 18 18 17 18 15V12C18 11.4 17.6 11 17 11C16.4 11 16 10.6 16 10V9C16 7 15 6 13 6H9C7 6 6 7 6 9Z"   strokeMiterlimit="10"/>
<path d="M10 10H12"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14H14"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BloggerRounded.displayName = "BloggerRounded";
export const BloggerRoundedMetadata = { 
  id: "blogger_rounded", 
  baseId: "blogger", 
  variant: "rounded", 
  name: "Blogger", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BloggerRounded;
