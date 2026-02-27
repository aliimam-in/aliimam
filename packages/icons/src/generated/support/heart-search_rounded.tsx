/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeartSearchRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HeartSearchRounded = React.forwardRef<SVGSVGElement, HeartSearchRoundedProps>(
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
      <path d="M21.49 12C21.81 10.98 22 9.88 22 8.69C22 5.6 19.51 3.09998 16.44 3.09998C14.62 3.09998 13.01 3.98003 12 5.34003C10.99 3.98003 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.6 2 8.69C2 15.69 8.48 19.82 11.38 20.82C11.55 20.88 11.77 20.91 12 20.91" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.74 21C19.5073 21 20.94 19.5673 20.94 17.8C20.94 16.0327 19.5073 14.6 17.74 14.6C15.9727 14.6 14.54 16.0327 14.54 17.8C14.54 19.5673 15.9727 21 17.74 21Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.54 21.6L20.54 20.6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HeartSearchRounded.displayName = "HeartSearchRounded";
export const HeartSearchRoundedMetadata = { 
  id: "heart-search_rounded", 
  baseId: "heart-search", 
  variant: "rounded", 
  name: "Heart Search", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HeartSearchRounded;
